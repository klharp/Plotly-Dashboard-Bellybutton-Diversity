//  **Import of json data**  //
// Use D3 fetch to read the JSON file and occupy the sample IDs dropdown
// Get data for the dropdown options by using data binding. See class lecture on D3-1, example 3
d3.json("samples.json").then(function(importdata) {

     // Define a variable for the imported data
     alldata = importdata;

     console.log(alldata);

     // what to bind the data to
     d3.select("#selDataset")
          // append to the code all that follows
          .selectAll("option")
          // mapping the array
          .data(importdata.names)
          .enter()
          // updating html
          .append("option")
           // function of data bound to wanted elements
          .html(function(d) {
                return `<option>${d}</option>`;
          })


     //  **Initialize the defaults**  //
     function init() { 

          // Get the all the data for id 940 (first in the list) and assign to a variable
           var initialData = alldata.samples[0];

          // console.log(initialData);

          // Get the data from the above variable for the initial sample
          var initialValues = initialData.sample_values;
          var initialOtuIds = initialData.otu_ids;
          var initialOtuLabels = initialData.otu_labels;

          // console.log(initialValues);
          // console.log(initialOtuIds);
          // console.log(initialOtuLabels);

          // Get the top 10 OTUs from in inital data
          // See class exercise 05, Interactive Plotly I on slicing to slice the data for the top 10
          // Reverse the order so it plots correctly on horizontal bar chart
          var tenInitialValues = initialValues.slice(0,10).reverse();
          var tenInitialOtuIds = initialOtuIds.slice(0,10).reverse();
          var tenInitialOtuLabels = initialOtuLabels.slice(0,10).reverse();

          console.log(tenInitialValues);
          console.log(tenInitialOtuIds);
          console.log(tenInitialOtuLabels);

          //  **Build plot**  //
          // Bar plot
          // <div id="bar">
          // trace1
          var trace1 = {
               x: tenInitialValues,
               y: tenInitialOtuIds.map(otuId => `OTU ${otuId}`),
               text: tenInitialOtuLabels,
               type: "bar",
               orientation: "h"
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

     }
     
     init();

     
});




// //  **Define event handler for changing the selection in dropdown**  //
















//      });
// };

// 

// <div id="gauge">
// <div id="bubble">


// Calling initial function
