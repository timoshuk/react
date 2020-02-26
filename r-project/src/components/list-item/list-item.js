import React from "react";
import "./list-item.css";

const ListItem = ({ id, data, togleFinished }) => {
  const { label, important, finished } = data;
  const clazz = finished ? "list-item-finished" : "";
  return (
    <div>
      <p
        className={clazz}
        onClick={() => {
          togleFinished(id);
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default ListItem;
