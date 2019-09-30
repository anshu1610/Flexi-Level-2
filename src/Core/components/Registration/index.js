import React, { Component } from "react";

import Flexi from "../../../Flexi/index";
import hoc from "../../../HocComponent/index";
import flexConfigForRegistration from "./registrationConfig";

class Registration extends Component {
  render() {
    //console.log(this.props.config.flexConfigForRegistration);
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

export default hoc(flexConfigForRegistration)(Registration);
