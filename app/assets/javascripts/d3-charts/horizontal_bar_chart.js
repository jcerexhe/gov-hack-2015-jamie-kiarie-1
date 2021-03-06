function bar_chart( element, data ) {
	var x = d3.scale.linear().domain( [0, d3.max(data)] ).range( [0, 420] );
	d3.select(element)
	  .selectAll("div")
	    .data(data)
	  .enter().append("div")
	    .style("width", function(d) { return x(d) + "px"; })
	    .text(function(d) { return d; });
}

$(document).ready(function(){ 
	bar_chart( ".horizontal_bar_chart", [ 1, 2, 3, 4, 5 ] ); 
});