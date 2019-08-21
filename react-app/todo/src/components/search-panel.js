import React from "react";
const SerchPanel = () => {
  const searchStyle = {
    fontSize: "20px"
  };
  const searchText = "Type here to search";
  return <input style={searchStyle} placeholder={searchText} />;
};

export default SerchPanel;
