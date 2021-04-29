import React from "react";
import logo from "./../images/s1.png";
import { Avatar, Badge } from "@material-ui/core";

import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import "./heading.css";

export default function Heading() {
  return (
    <div className="heading">
      <div>
        <div className="headingInside">
          <Avatar src={logo} alt="profile pic" />
          <h3>
            floyed miles
            <br /> free account
          </h3>
        </div>
      </div>

      <div>
        <Badge badgeContent={3} color="secondary">
          <NotificationsOutlinedIcon />
        </Badge>
      </div>
      <div>
        <MenuRoundedIcon />
      </div>
    </div>
  );
}
