import React from "react";

import Flexi from "../../../Flexi/index";
import hoc from "../../../HocComponent/index";

class HomePage extends React.Component {
  render() {
    const { config, handleChange, onSubmit } = this.props;
    return (
      <div>
        <Flexi
          config={config.flexConfigForHome}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

export default hoc()(HomePage);
