import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JAKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* Menu Item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* Menu Item */}
      </div>
    </div>
  );
};

export default HomePage;
