import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear
} from "d3";

function LinesAxis() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]); //Range is here like svg width to fit in it
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]); //to make upside down
    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index=>index+1);
    const yAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
      .call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  console.log("data", data);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg><br/><br/><br/>
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update
      </button>
      <button onClick={() => setData(data.filter(value => value < 45))}>
        Filter
      </button>
    </React.Fragment>
  );
}

export default LinesAxis;
