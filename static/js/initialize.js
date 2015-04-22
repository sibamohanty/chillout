function initialize(){
    drawChart();
    create_bar_chart();
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Mon', 20, 28, 38, 45],
      ['Tue', 31, 38, 55, 66],
      ['Wed', 50, 55, 77, 80],
      ['Thu', 77, 77, 66, 50],
      ['Fri', 68, 66, 22, 15]
      // Treat first row as data as well.
    ], true);
      

    var options = {
      legend:'none',
      backgroundColor :{
	      fill : 'black'
	},
      colors: ['green']
    };

    var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}


function create_bar_chart(){
    var data_bar = [4, 8, 15, 16, 23, 42];

   var width = 420,
      barHeight =  20;


    var x = d3.scale.linear()
        .domain([0, d3.max(data_bar)])
        .range([0,420]);

    var chart  = d3.select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data_bar.length)
	.attr("color", "green");
    
    var bar = chart.selectAll("g")
        .data(data_bar)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," +i * barHeight+ ")"; });
    
    bar.append("rect")
        .attr("width" , x)
        .attr("height", barHeight - 1);
    
    bar.append("text")
        .attr("x", function(d) {return x(d) -3 ; })
        .attr("y", barHeight/2)
        .attr("dy", ".35em")
    .text(function(d){return d;});
    
    d3.select(".chart")
        .selectAll("div")
          .data(data_bar)
        .enter().append("div")
          .style("width", function(d) {return x(d) + "px"; })
	  .attr("color", "green")
          .text(function(d) {return d});

}

function draw_bar_chart(){
   var data_bar = [4, 8, 15, 16, 23, 42];
   
   var width = 420,
       barHeight =  20;
   
   
   /*d3.select("body")
       .style("color", "black")
       .style("background-color", "white");
   */
   var x = d3.scale.linear()
       .domain([0, d3.max(data_bar)])
       .range([0,420]);
   
   var chart  = d3.select(".chart")
       .attr("width", width)
       .attr("height", barHeight * data_bar.length);
   
   var bar = chart.selectAll("g")
       .data(data_bar)
     .enter().append("g")
       .attr("transform", function(d, i) { return "translate(0," +i * barHeight+ ")"; });
   
   bar.append("rect")
       .attr("width" , x)
       .attr("height", barHeight - 1);
   
   bar.append("text")
       .attr("x", function(d) {return x(d) -3 ; })
       .attr("y", barHeight/2)
       .attr("dy", ".35em")
   .text(function(d){return d;});
   
   d3.select(".chart")
       .selectAll("div")
         .data(data_bar)
       .enter().append("div")
         .style("width", function(d) {return x(d) + "px"; })
         .text(function(d) {return d});

}
