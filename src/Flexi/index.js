import React from "react";

// import Button from "./components/Button/index";
// import Card from "./components/Card/index";
// import Cards from "./components/Cards/index";
// import Header from "./components/Header/index";
// import RadioGroup from "./components/RadioGroup/index";
// import TextField from "./components/TextField/index";

const Flexi = ({ config, handleChange, onSubmit }) => {
  // console.log(config);
  let items = config.items;

  const traverseItems = items => {
    return items.map(item => {
      return displayItem(item);
    });
  };

  let child = [];
  const displayItem = item => {
    if (item.children) {
      child = traverseItems(item.children.items);
    }

    var Comp = require(`./components/${item.type}`).default;

    return (
      <Comp
        props={item.props}
        child={child}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    );
    // switch (item.type) {
    //   case "Button":
    //     return <Button props={item.props} onSubmit={onSubmit} />;
    //   case "Card":
    //     return <Card props={item.props} child={child} />;
    //   case "Cards":
    //     return <Cards props={item.props} />;
    //   case "Header":
    //     return <Header props={item.props} />;
    //   case "RadioGroup":
    //     return <RadioGroup props={item.props} handleChange={handleChange} />;
    //   case "TextField":
    //     return <TextField props={item.props} handleChange={handleChange} />;
    //   default:
    //     return null;
    // }
  };

  return <div>{traverseItems(items)}</div>;
};

export default Flexi;
