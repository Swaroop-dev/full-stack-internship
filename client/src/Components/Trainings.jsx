import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import "./trainings.css";

export default function Trainings() {
  return (
    <div>
      <Card className="train2">
        <CardContent class="fork">
          <div>
            <Typography>Box</Typography>
            <Typography>Sport club</Typography>
            <button className="fork1">10:00</button>
          </div>
          <div>
            <Typography>40</Typography>
            <Typography>min</Typography>
            <Typography>warmup</Typography>
          </div>
          <div>
            <Typography>20</Typography>
            <Typography>min</Typography>
            <Typography>stretch</Typography>
          </div>
        </CardContent>
      </Card>
      <Card className="train1">
        <CardContent class="fork">
          <div>
            <Typography>Crossfit</Typography>
            <Typography>Sport club</Typography>
            <button className="fork1">12:00</button>
          </div>
          <div>
            <Typography>20</Typography>
            <Typography>min</Typography>
            <Typography>warmup</Typography>
          </div>
          <div>
            <Typography>20</Typography>
            <Typography>min</Typography>
            <Typography>pull ups</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
