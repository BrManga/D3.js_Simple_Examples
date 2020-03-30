import React from "react";
import "./App.css";
import Circles from "./Graphs/Circles";
import Lines from "./Graphs/Lines";
import LinesAxis from "./Graphs/LinesWithAxis";
import AnimatedGraph from "./Graphs/animated_graph";
import AddingInteractivity from "./Graphs/Adding_interactivity";

function App() {
  return (
    <React.Fragment>
      <h1>D3&React</h1>
      <div className="row">
        <div className="svgBox ">
          <h2>Circles</h2>
          <Circles></Circles>
        </div>
        <div className="svgBox ">
          <h2>Line Chart</h2>
          <Lines />
        </div>
        <div className="svgBox col-3">
          <h2>Line Chart with Axis</h2>
          <LinesAxis />
        </div>
        <div className="svgBox col-3">
          <h2>Animated Bar Chart</h2>
          <AnimatedGraph />
        </div>
        <div className="svgBox col-3">
          <h2>Interactivity</h2>
          <AddingInteractivity />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
