import React from "react";
import "./App.css";
import Circles from "./Graphs/Circles";
import Lines from "./Graphs/Lines";
import LinesAxis from "./Graphs/LinesWithAxis";
import AnimatedGraph from "./Graphs/animated_graph";

function App() {
  return (
    <React.Fragment>
      <div className="svgBox col-3">
        <Circles></Circles>
      </div>
      <div className="svgBox col-3">
        <Lines />
      </div>
      <div className="svgBox col-3">
        <LinesAxis />
      </div>
      <div className="svgBox col-3">
        <AnimatedGraph />
      </div>
    </React.Fragment>
  );
}

export default App;
