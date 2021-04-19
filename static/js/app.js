// Portions of this code are taken directly from instructor's office hours tutorial 
// Permission was given to use.
// I had previously successfully imported the json, occupied the dropdown and put data into variables.
// I decided to redo the code based on the office hours tutorial.
// That initial code exists as previous commits in Github.
// Met with tutor to help to understand functions and to clean up the function code.

// Function for graphs
function drawGraphs(sampleId) {
     //console.log(`drawGraphs(${sampleId})`);

     //Reading sample data to draw graphs
     d3.json("data/samples.json").then(data => {
          //console.log(data);

          var samples = data.samples;
          // Filter samples where sample id = desired sample id
          var resultArray = samples.filter(s => s.id == sampleId);
          //console.log(resultArray);
          var result = resultArray[0];
          //console.log(result);

          var otu_ids = result.otu_ids;
          var otu_labels = result.otu_labels;
          var sample_values = result.sample_values
          //console.log(otu_ids);
          //console.log(otu_labels);
          //console.log(sample_values);

          // Bar chart
          yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId} `).reverse();

          var barData = {
               x: sample_values.slice(0, 10).reverse(),
               y: yticks,
               type: "bar",
               text: otu_labels.slice(0, 10).reverse(),
               orientation: "h",
               marker: { color: "#ff4d4d" } //{color: "#ff94c9"}
          }

          var barArray = [barData];

          var barLayout = {
               title: "Top 10 Bacteria Cultures Found",
               titlefont: { size: 20, },
               margin: { t: 40, l: 100 }
          }

          // Div id=bar
          Plotly.newPlot("bar", barArray, barLayout)

          // Bubble chart
          // https://plotly.com/javascript/bubble-charts/
          var bubbleData = {
               x: otu_ids,
               y: sample_values,
               text: otu_labels,
               mode: "markers",
               marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Picnic"
               }
          }

          var bubbleArray = [bubbleData];

          var bubbleLayout = {
               title: "Sample Bacteria Cultures",
               titlefont: { size: 20, },
               margin: { t: 0 },
               hovermode: "closest",
               xaxis: { title: "OTU ID" },
               yaxis: { title: "Sample Values" },
               margin: { t: 30 }
          }

          // Div id=bubble
          Plotly.newPlot("bubble", bubbleArray, bubbleLayout)
     });
}


// Function for Metadata 
function showMetadata(sampleId) {
     //console.log(`showMetadata(${sampleId})`);

     //Reading metadata for table and gauge
     d3.json("data/samples.json").then(data => {
          //console.log(data);

          var samples = data.metadata;
          // Filter samples where sample id = desired sample id
          var resultArray = samples.filter(s => s.id == sampleId);
          var result = resultArray[0];
          //console.log(result);

          // Demographic info
          // Class lecture Javascript II, Object iteration (07) to extract key:value pairs
          // https://stackoverflow.com/questions/26629180/changing-the-case-of-javascript-object-keysvar 
          metaPanel = d3.select("#sample-metadata");
          metaPanel.html("");
          Object.entries(result).forEach(([key, value]) => {
               metaPanel.append("h6").text(`${key.toUpperCase()}: ${value}`)
          });

          // Gauge
          //https://plotly.com/javascript/gauge-charts/
          var gaugedata = [{
               type: "indicator",
               mode: "gauge+number",
               value: result.wfreq,
               title: "Belly Button Washing Frequency <br> Scrubs Per Week",
               titlefont: { size: 20, },
               gauge: {
                    axis: { visible: true, range: [null, 9], tickmode: "linear", nticks: 10 },
                    bar: { 'color': "black" },
                    steps: [
                         { range: [0, 1], color: "rgb(15,42,251)" },
                         { range: [1, 2], color: "rgb(43,114,251)" },
                         { range: [2, 3], color: "rgb(109,205,253)" },
                         { range: [3, 4], color: "rgb(203,205,254)" },
                         { range: [4, 5], color: "rgb(245,245,255)" },
                         { range: [5, 6], color: "rgb(254,189,254)" },
                         { range: [6, 7], color: "rgb(253,106,184)" },
                         { range: [7, 8], color: "rgb(253,104,117)" },
                         { range: [8, 9], color: "rgb(252,18,31)" },
                    ]
               }
          }];

          var gaugelayout = {
               width: 450,
               height: 500,
               margin: { t: 0, l: 0, b: 0, r: 0 },
          };

          Plotly.newPlot("gauge", gaugedata, gaugelayout);
     });
}


// Establish event handler
function optionChanged(newsampleId) {
     //console.log(`User selected ${newsampleId}`);

     drawGraphs(newsampleId);
     showMetadata(newsampleId);
}


// Use D3 fetch to read the JSON file and occupy the sample IDs dropdown
function init() {

     // Populate the dropdown
     var selector = d3.select("#selDataset");

     d3.json("data/samples.json").then(data => {
          console.log(data);

          var sampleNames = data.names;
          // console.log(sampleNames);

          sampleNames.forEach(sampleId => {
               selector.append("option")
                    .text(sampleId)
                    .property("value", sampleId);
          });

          // Define the default id
          var id = sampleNames[0]

          // Calling plotting/drawing functions
          drawGraphs(id);
          showMetadata(id);

     });
}

init();