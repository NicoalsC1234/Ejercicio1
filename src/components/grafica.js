import * as d3 from "d3";
import React, { useEffect, useRef } from 'react';

function Grafica(props){

    const canvas = useRef();

    useEffect(() => {
    let datos = props.series
        
          const canvas = d3.select("#canvas");
      
          const width = 700;
          const height = 500;
          const margin = {top:10, left:90, bottom: 40, right: 10};
          const iwidth = width - margin.left - margin.right;
          const iheight = height - margin.top - margin.bottom;
          
          const svg = canvas.append("svg");
          svg.attr("width", width);
          svg.attr("height", height);
      
          let graph = svg
              .append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
      
          const bars = graph.selectAll("rect").data(datos);
      
          const x1 = d3.scale.linear()
              .domain([0, 980000])
              .range([0, iwidth]);
      
          const y1 = d3.scaleBand() 
              .domain(datos.map(d => d.name)) 
              .range([0, iheight])
              .paddingInner(0.1); 
      
          bars.enter().append("rect")
              .attr("class", "bar")
              .attr("fill", "orange")
              .attr("x", () => x1(0))
              .attr("y", (d) => y1(d.name))
              .attr("height", y1.bandwidth())
              .attr("width", d => x1(d.season));
      
          graph.append("g")
              .classed("x--axis", true)
              .call(d3.axisBottom(x1))
              .attr("transform", `translate(0, ${iheight})`); 
              
          graph.append("g")
              .classed("y--axis", true)
              .call(d3.axisLeft(y1));
      }, [props.series])
    

    return(
        <div className="container mt-4">
            <div id="canvas">
                <svg ref={canvas}></svg>
            </div>
        </div>
    )
}

export default Grafica;
