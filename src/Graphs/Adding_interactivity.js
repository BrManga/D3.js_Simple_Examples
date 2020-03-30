import React, { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisLeft, scaleLinear, scaleBand } from "d3";

function AddingInteractivity() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain([0, 1, 2, 3, 4, 5, 6])
      .range([0, 300]) //Range is here like svg width to fit in it
      .padding(0.2);
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]); //to make upside down
    const colorScale = scaleLinear()
      .domain([10, 70, 150])
      .range(["yellow", "orange", "red"])
      .clamp(true); //belirli bir degerden sonra renk degistir. Burada 30 mesela

    const xAxis = axisBottom(xScale).ticks(data.length);
    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);

    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => 150 - yScale(value));
  }, [data]);
  console.log("data", data);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update
      </button>
      <button onClick={() => setData(data.filter(value => value < 45))}>
        Filter
      </button>
    </React.Fragment>
  );
}

export default AddingInteractivity;
