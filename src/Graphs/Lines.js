import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

function Lines() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => 150 - value).curve(curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  console.log("data", data);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update
      </button>
      <button onClick={() => setData(data.filter(value => value < 45))}>
        Filter
      </button>
    </React.Fragment>
  );
}

export default Lines;
