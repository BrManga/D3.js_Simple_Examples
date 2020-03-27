import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

function Circles() {
  const [data, setData] = useState([15, 30, 45, 60, 75]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red");
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

export default Circles;
