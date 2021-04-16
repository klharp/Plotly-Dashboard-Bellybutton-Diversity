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

//  **Define function to retrieve variables from json**  //
d3.json("samples.json").then(function(data) {
     // Get values from the data json object to build the plots
     // Default for initial plots
     
     var initialData = data.samples[0];
     var initialValue = initialData.sample_values;
     var initialOtuId = initialData.otu_ids;
     var initialOtuLabel = initialData.otu_labels;

     // other samples
     var samples = data.samples;
     var values = samples.map(objname => objname.id);
     var otuIds = samples.map(objIds => objIds.otu_ids);
     var otuLabels = samples.map(objLabels => objLabels.otu_labels); 

     console.log(initialData);
     console.log(initialValue);
     console.log(initialOtuId);
     console.log(initialOtuLabel);
     console.log(samples);
     console.log(values);
     console.log(otuIds);
     console.log(otuLabels);
});


//  **Define event handler for changing the selection in dropdown**  //



//  **Build plots**  //
function buildPlot() {

// <div id="bar">
// trace1
var trace1 = {
     x: initialValue,
     y: initialOtuId,
     type: "h"
};

// Trace data in an array
var data = [trace1];

// Define layout
var layout = {
     title: "Put Title Here",
     // xaxis: {title: "Put xTitle Here"},
     // yaxis: {title: "Put yTitle Here"}
};

// Call the plot
Plotly.newPlot("bar", data, layout);

};










//      });
// };

// buildPlot();

// <div id="gauge">
// <div id="bubble">


// Calling initial function
init();