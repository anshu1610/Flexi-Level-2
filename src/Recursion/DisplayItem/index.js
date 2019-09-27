import React from "react";

import TraverseItems from "../TraverseItems/index";

const DisplayItem = ({ item }) => {
  return <div>{item.childern && <TraverseItems />}</div>;
};

export default DisplayItem;
