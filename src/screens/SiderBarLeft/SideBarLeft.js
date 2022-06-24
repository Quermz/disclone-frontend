import React, { useState } from "react";
import space from "../../assets/space.jpeg";
import "./SideBarLeft.css";

function SideBarLeft(props) {
  const [hover, setHover] = useState(false);

  return (
    <div class="SBLcontainer">
      <div className="SBLiconContainer">
        <div className="SBLactive"></div>
        <img
          src={space}
          alt=""
          className="SBLimage"
          onMouseEnter={() => {
            setHover(true);
          }}
        />
      </div>
      <img src={space} alt="" className="SBLimage" />
      <img src={space} alt="" className="SBLimage" />
      <img src={space} alt="" className="SBLimage" />
      <img src={space} alt="" className="SBLimage" />
    </div>
  );
}

export default SideBarLeft;
