import React from "react";

import DisplayItem from "../TraverseItems/index";

const TraverseItems = ({ items }) => {
  return (
    <div>
      return{" "}
      {items.map(item => {
        return <DisplayItem item={item} />;
      })}
    </div>
  );
};

export default TraverseItems;
