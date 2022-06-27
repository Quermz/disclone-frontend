import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentServer } from "../../../slices/serverSlice";

function Icon(props) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const currentServer = useSelector((state) => {
    console.log(state);
    return state.server.currentServer;
  });
  console.log(currentServer);
  return (
    <div className="SBLiconContainer">
      <div
        className={`SBLactive ${hover ? "SBLactiveHover" : ""} ${
          currentServer === props.serverName ? "SBLactiveCurrent" : ""
        }`}
      ></div>
      <img
        src={props.source}
        alt="serverIcon"
        className={`SBLimage ${hover ? "SBLimageHover" : ""} ${
          currentServer === props.serverName ? "SBLimageHover" : ""
        }`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={() => dispatch(setCurrentServer(props.serverName))}
      />
      <div className={`SBLspeechBubble ${hover ? "SBLspeechBubbleHover" : ""}`}>
        <div className={"SBLtriangle"}></div>
        <p className={`SBLserverName ${hover ? "SBLserverNameHover" : ""}`}>
          {props.serverName}
        </p>
      </div>
    </div>
  );
}

export default Icon;
