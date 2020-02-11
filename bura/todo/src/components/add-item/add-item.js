import React from "react";
import "./add-item.css";
const AddItem = ({ addItem }) => {
  return (
    <div className="add-item mt-2">
      <button
        className="btn btn-block btn-danger"
        onClick={() => {
          addItem("Test data");
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
