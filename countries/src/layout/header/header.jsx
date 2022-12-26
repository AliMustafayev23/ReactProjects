import React, { useRef } from "react";
import { useState } from "react";
import "./header.scss";
const Header = () => {
  let darkmode = useRef();
  let header = useRef();

  const dark = (e) => {
    if (header.className == "header") {
      header.className = "headerdark";
    } else {
      header.className = "header";
    }
  };
  return (
    <div className="header" ref={header}>
      <h1>Where in the world?</h1>
      <div ref={darkmode} onClick={(e) => dark(e)}>
        <i class="fa-regular fa-moon fa-2x"></i>Dark Mode
      </div>
    </div>
  );
};

export default Header;
