function step2(){
		g.selectAll("text")
		.remove();

if(document.getElementById("selectedStep").innerHTML=="step3"){
	svg.selectAll("rect")
		.remove();

	svg.selectAll("circle")
		.remove();
	
	d3.json("data/water.json", function(error, data) {
        var colombiaData2=data.filter(function(d) {
            return(d.area=="Total" && d.year=="2010" && (d.country=="Colombia"))
        });
        
        var targetData=data.filter(function(d) {
            return(d.area=="Total" && d.year=="1993" && (d.country=="MDG target 2015" || d.country=="National target 2015"))
        });

		console.log(colombiaData2);

		var bar = svg.selectAll(".bar")
	      .data(colombiaData2)
	      .enter().append("rect")
	      .attr("class", "bar")
	      .attr("x", function(d) { return x(d.indicator); })
	      .attr("width", x.rangeBand())
	      .attr("y", function(d) { return y(d.value); })
	      .attr("height", function(d) { return height - y(d.value); })
	      .style("fill",function(d) { return color(d.area);})
	      .style("opacity",.9);  

	    document.getElementById("textToDisplay").innerHTML = "In 2010, Colombia was close to achieving the Millenium development goal on access to safe water but needs to invest more to reach the sanitation goal.";         
	
	    svg.selectAll("rect")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("x")) + document.getElementById("area1").offsetLeft + 1.5*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("y")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });
	            d3.select("#tooltip").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",color(d.area));

	            d3.select("#tooltip").classed("hidden", true);
	        });



	    var circle = svg.selectAll("circle")
            .data(targetData)
            .enter().append("circle")
			.transition().delay(500).duration(500)
                .attr('cx', function(d) { return x(d.indicator)+x.rangeBand()/2;})
                .attr('cy', function(d) { return y(d.value); })
                .attr('r',5)
            .style("fill",function(d) { 
              return colorLimit(d.country)  
            })
            .style("opacity",1);


	    svg.selectAll("circle")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("cx")) + document.getElementById("area1").offsetLeft + 1.1*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });
	            d3.select("#tooltip").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",colorLimit(d.country));

	            d3.select("#tooltip").classed("hidden", true);
	        });    	

	});

 		document.getElementById("selectedStep").innerHTML="step2";

}else{

	d3.json("data/water.json", function(error, data) {
        var colombiaData2=data.filter(function(d) {
            return(d.area=="Total" && d.year=="2010" && (d.country=="Colombia"))
        });
		
		console.log(colombiaData2);

		var bar = svg.selectAll(".bar")
	      .data(colombiaData2)
	      .transition().duration(2000)
	      .attr("class", "bar")
	      .attr("y", function(d) { return y(d.value); })
	      .attr("height", function(d) { return height - y(d.value); }); 

	    document.getElementById("textToDisplay").innerHTML = "In 2010, Colombia was close to achieving the Millenium development goal on access to safe water but needs to invest more to reach the sanitation goal.";         
	
	    svg.selectAll("rect")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("x")) + document.getElementById("area1").offsetLeft + 1.5*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("y")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });
	            d3.select("#tooltip").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",color(d.area));

	            d3.select("#tooltip").classed("hidden", true);
	        });

	    svg.selectAll("circle")
	        .on("mouseover",function(d){

	            d3.select(this).style("fill","lightgrey");

	            var xPosition = parseFloat(d3.select(this).attr("cx")) + document.getElementById("area1").offsetLeft + 1.1*margin.left ;
	            var yPosition = parseFloat(d3.select(this).attr("cy")) +document.getElementById("area1").offsetTop ;
	             

	            d3.select("#tooltip")
	              .style("left", xPosition + "px")
	              .style("top", yPosition + "px") 
	              .select("#variableTootip")
	              .text(function(){
	                  return d.country;
	              });

	            d3.select("#tooltip")
	              .select("#valueTooltip")
	              .text(function(){
	                  return d.value;
	              });
	            d3.select("#tooltip").classed("hidden", false);
	        })
	        .on("mouseout",function(d){

	            d3.select(this).style("fill",colorLimit(d.country));

	            d3.select("#tooltip").classed("hidden", true);
	        });    	

 		document.getElementById("selectedStep").innerHTML="step2";
	});

};
	g.append("text")
		.attr("x",width-50)
		.attr("y",30)
		.text("2010")
		.style("fill","grey")
		.style("font","20px sans-serif")
		.style("font-weight","bold");
	
}