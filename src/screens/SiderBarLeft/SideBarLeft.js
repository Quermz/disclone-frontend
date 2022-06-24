import React from "react";
import space from "../../assets/space.jpeg";
import "./SideBarLeft.css";
import Icon from "./SBLcomponents/Icon";

function SideBarLeft(props) {
  return (
    <div className="SBLcontainer">
      <Icon source={space} serverName={"Space"} />
      <Icon source={space} serverName={"Fitness"} />
      <Icon source={space} serverName={"Beer"} />
      <Icon source={space} serverName={"Teste"} />
      <Icon source={space} serverName={"Welcome"} />
    </div>
  );
}

export default SideBarLeft;
