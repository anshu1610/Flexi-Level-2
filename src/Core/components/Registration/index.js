import React, { Component } from "react";

import Flexi from "../../../Flexi/index";
import hoc from "../../../HocComponent/index";

class Registration extends Component {
  render() {
    //console.log(this.props.config.flexConfigForRegistration);
    const { config, handleChange, onSubmit } = this.props;

    return (
      <div>
        <Flexi
          config={config.flexConfigForRegistration}
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  }
}

export default hoc()(Registration);
