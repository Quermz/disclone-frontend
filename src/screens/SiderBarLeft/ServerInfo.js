import React from "react";
import { useSelector } from "react-redux";
import "./ServerInfo.css";

function ServerInfo({ name, description }) {
  const currentServer = useSelector((state) => state.server.currentServer);
  const serverDescription = useSelector(
    (state) => state.server.serverDescription
  );
  const username = useSelector((state) => state.user.username);
  return (
    <div className="SIcontainer">
      <div className="SIdetailsContainer">
        <h3 className="SIserverName">{currentServer}</h3>
        <p className="SIserverDetails">{serverDescription}</p>
      </div>

      <h4 className="SIusername">{username}</h4>
    </div>
  );
}

export default ServerInfo;
