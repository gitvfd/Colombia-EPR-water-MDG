function step3(){
		g.selectAll("text")
		.remove();
	svg.selectAll("rect")
		.remove();

	svg.selectAll("circle")
		.remove();

	d3.json("data/water.json", function(error, data) {
        var colombiaData3=data.filter(function(d) {
            return((d.area=="Urban" || d.area=="Rural") && d.year=="2010" && (d.country=="Colombia"))
        });
        var targetData3=data.filter(function(d) {
            return((d.area=="Urban" || d.area=="Rural") && d.year=="1993" && (d.country=="MDG target 2015" || d.country=="National target 2015"))});
		console.log(colombiaData3);
		console.log(targetData3);



		var bar = svg.selectAll(".bar")
	      .data(colombiaData3)
	      .enter().append("rect")
	      .transition().duration(1000)
	      .attr("class", "bar")
	      .attr("x", function(d) { 
                	if(d.area=="Urban")
                		return x(d.indicator)-x.rangeBand()/2;
                	if(d.area=="Rural")
                		return x(d.indicator)+x.rangeBand()/2; 
	      })
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d.value); })
	      .attr("height", function(d) { return height - y(d.value); })
	      .style("fill",function(d) { return color(d.area);})
	      .style("opacity",.9);   

		var circle = svg.selectAll("circle")
	        .data(targetData3)
	        .enter().append("circle")
			.transition().delay(500).duration(500)
	            .attr('cx', function(d) { 
	            	if(d.area=="Urban")
	            		return x(d.indicator);
	            	if(d.area=="Rural")
	            		return x(d.indicator)+x.rangeBand();
	            })
	            .attr('cy', function(d) { return y(d.value); })
	            .attr('r',5)
	        .style("fill",function(d) { 
	          return colorLimit(d.country)  
	        })
	        .style("opacity",1);	      

	    document.getElementById("textToDisplay").innerHTML = "Urban dwellers generally have much better access to safe water and sanitation than the rural population.";    
	    
	    svg.selectAll("rect")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("x")) + document.getElementById("area1").offsetLeft + 1.5*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("y")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip2")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip2")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });


	            d3.select("#tooltip2")
	              .select("#areaTooltip")
	              .text(function(){
	                  return d.area;
	              });

	            d3.select("#tooltip2").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",color(d.area));

	            d3.select("#tooltip2").classed("hidden", true);
	        });

	    svg.selectAll("circle")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("cx")) + document.getElementById("area1").offsetLeft + 1.1*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip2")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip2")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });

	            d3.select("#tooltip2")
	              .select("#areaTooltip")
	              .text(function(){
	                  return d.area;
	              });

	            d3.select("#tooltip2").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",colorLimit(d.country));

	            d3.select("#tooltip2").classed("hidden", true);
	        });    
	
 		document.getElementById("selectedStep").innerHTML="step3";

	});
	g.append("text")
		.attr("x",width-50)
		.attr("y",30)
		.text("2010")
		.style("fill","grey")
		.style("font","20px sans-serif")
		.style("font-weight","bold");
	
	
}