import React from "react";
import logo from "./../images/s1.png";
import { Avatar, Badge, Grid, Typography } from "@material-ui/core";

import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import "./heading.css";

export default function Heading() {
  return (
    <div className="id2">
      <Avatar src={logo} alt="profile pic" style={{ float: "left" }} />
      <span>
        <strong>floyed miles</strong>
        <br /> free account
      </span>

      <div style={{ float: "right" }}>
        <NotificationsOutlinedIcon />
        <MenuRoundedIcon />
      </div>
    </div>
  );
}
