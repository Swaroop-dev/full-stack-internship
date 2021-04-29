import React from "react";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import logo1 from "./../images/m2.jpg";
import logo2 from "./../images/man5-512.png";

import "./trainer.css";

export default function Trainers() {
  return (
    <div className="train3">
      <Card className="trainer">
        <CardContent className="train4">
          <Avatar src={logo1} />
          <Typography></Typography>
          <TextsmsOutlinedIcon />
        </CardContent>
      </Card>
      <Card className="trainer">
        <CardContent>
          <Avatar src={logo2} />
          <Typography></Typography>
          <TextsmsOutlinedIcon  />
        </CardContent>
      </Card>
    </div>
  );
}
