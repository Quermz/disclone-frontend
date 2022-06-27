import React from "react";
import space from "../../assets/space.jpeg";
import "./SideBarLeft.css";
import Icon from "./SBLcomponents/Icon";
import ServerInfo from "./ServerInfo";

function SideBarLeft(props) {
  return (
    <div className="SBLouterContainer">
      <div className="SBLcontainer">
        <Icon source={space} serverName={"1"} />
        <Icon source={space} serverName={"abc"} />
        <Icon source={space} serverName={"def"} />
        <Icon source={space} serverName={"Test"} />
        <Icon source={space} serverName={"Welcome"} />
      </div>
      <ServerInfo></ServerInfo>
    </div>
  );
}

export default SideBarLeft;
