import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  activeBtn(e) {
    const targetBtn = e.target;
    const buttons = e.currentTarget.querySelectorAll("button");
    const activeBtn = e.currentTarget.querySelector(".btn-info");

    if (targetBtn === activeBtn) {
      return;
    } else {
      [...buttons].forEach(item => {
        item.classList.remove("btn-info");
      });

      targetBtn.classList.add("btn-info");
      targetBtn.classList.remove("btn-outline-secondary");
    }
  }

  render() {
    return (
      <div className="btn-group" onClick={this.activeBtn}>
        <button type="button" className="btn btn-info">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}
