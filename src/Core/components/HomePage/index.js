import React from "react";

import Flexi from "../../../Flexi/index";
import hoc from "../../../HocComponent/index";
import flexConfigForHome from "./homePageConfig";

class HomePage extends React.Component {
  render() {
    const { config, handleChange, onSubmit } = this.props;
    return (
      <div>
        <Flexi
          config={config}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

export default hoc(flexConfigForHome)(HomePage);
