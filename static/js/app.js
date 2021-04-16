// Use D3 fetch to read the JSON file and occupy the sample IDs dropdown
// Get data by using data binding. See class lecture on D3-1, example 3
function init() {
     d3.json("samples.json").then(function(data) {

          // console.log(data);

         // what to bind the data to
         d3.select("#selDataset")
            // append to the code all that follows
             .selectAll("option")
             // mapping the array
             .data(data.names)
             .enter()
             // updating html
             .append("option")
             // function of data bound to wanted elements
             .html(function(d) {
                  return `<option>${d}</option>`;
             });

     });
 };





//  **Define event handler for changing the selection in dropdown**  //



//  **Build plots**  //
function buildPlot() {
     d3.json("samples.json").then(function(data) {
          // Get values from the data json object to build the plots
          // Default for initial plots
          var defaultData = data.samples[0];
          var defaultValue = defaultData.sample_values;
          var defaultOtuId = defaultData.otu_ids;
          var defaultOtuLabel = defaultData.otu_labels;

          // other samples
          var allData = data.samples;
          var values = allData.sample_values;
          var otuIds = allData.otu_ids;
          var otuLabels = allData.otu_labels; 

          // console.log(defaultData);
          // console.log(defaultValue);
          // console.log(defaultOtuId);
          // console.log(defaultOtuLabel);
          console.log(allData);
          console.log(values);
          console.log(otuIds);
          console.log(otuLabels);


// // <div id="bar">
// // trace1
// var trace1 = {
//      x: ["put x array here"],
//      y: ["put y array here"],
//      type: "bar"
// };

// // Trace data in an array
// var data = [trace1];

// // Define layout
// var layout = {
//      title: "Put Title Here",
//      xaxis: {title: "Put xTitle Here"},
//      yaxis: {title: "Put yTitle Here"}
// };

// // Call the plot
// Plotly.newPlot("plot", data, layout);











     });
};

buildPlot();

// <div id="gauge">
// <div id="bubble">


// Calling initial function
init();