import imageContent from "./../images/emogi.png";
import imageContent1 from "./../images/time.jpg";
import imageContent2 from "./../images/heart.jpg";
import imageContent3 from "./../images/calori.png";
import React from "react";
import {
  Card,
  CardContent,
  Button,
  LinearProgress,
  Typography,
  Avatar,
} from "@material-ui/core";
import "./Health.css";

export default function Health() {
  return (
    <div className="main-container">
      <div className="health">
        <Card>
          <CardContent>
            <Typography>120</Typography>
            <Avatar variant="square" src={imageContent1} />
            <LinearProgress variant="determinate" value={7}></LinearProgress>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>120</Typography>
            <Avatar variant="square" src={imageContent2} />
            <LinearProgress
              variant="determinate"
              value={7}
              color="secondary"
            ></LinearProgress>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography>120</Typography>
            <Avatar variant="square" src={imageContent3} />
            <LinearProgress
              variant="determinate"
              value={78}
              color="primary"
            ></LinearProgress>
          </CardContent>
        </Card>
      </div>
      <Card className="signup">
        <div style={{ marginLeft: "10%" }}>
          <img src={imageContent} style={{ float: "left",marginTop:"20px" }}></img>
          <CardContent >
            <h3>
              sign up to get personal trainer
              <br />
              to improve results
            </h3>
            <Button color="primary">sign up</Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
