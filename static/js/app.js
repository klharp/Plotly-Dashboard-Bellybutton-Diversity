// Portions of this code are taken directly from instructor's office hours tutorial 
// Permission was given to use.
// I had previously successfully imported the json, occupied the dropdown and put data into variables.
// I decided to redo the code based on the office hours tutorial.
// That initial code exists as previous commits in Github.

// Define plotting/graphing functions
// Function for bar graph
function drawBarGraph(sampleId) {
     //console.log(`drawBarGraph(${sampleId})`);

     //Reading data each time drawing a graph
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

          yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

          var barData = {
               x: sample_values.slice(0,10).reverse(),
               y: yticks,
               type: "bar",
               text: otu_labels.slice(0,10).reverse(),
               orientation: "h",
               marker: {color: "red"}
          }

          var barArray = [barData];

          var barLayout = {
               title: "Top 10 Bacteria Cultures Found",
               margin: {t: 40, l: 100}
          }

          // Div id=bar
          Plotly.newPlot("bar", barArray, barLayout)
     });
}

// Function for bubble chart
function drawBubbleChart(sampleId) {
     console.log(`drawBubbleChart(${sampleId})`);

     //Reading data each time drawing a graph
     d3.json("data/samples.json").then(data => {
          //console.log(data);
     
          var samples = data.samples;
          // Filter samples where sample id = desired sample id
          var resultArray = samples.filter(s => s.id == sampleId);
          var result = resultArray[0];
     
          var otu_ids = result.otu_ids;
          var otu_labels = result.otu_labels;
          var sample_values = result.sample_values
     
         // yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();
     
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
               margin: {t: 0},
               hovermode: "closest",
               xaxis: {title: "OTU ID"},
               margin: {t: 30}
          }
     
          // Div id=bubble
          Plotly.newPlot("bubble", bubbleArray, bubbleLayout)
     });
     
}

// Function for Metadata
function showMetadata(sampleId) {
     console.log(`showMetadata(${sampleId})`);
}

// Function for Gauge Gauge
function drawGauge(sampleId) {
     console.log(`drawGauge(${sampleId})`);
}

// Establish event handler
function optionChanged(newsampleId){
     console.log(`User selected ${newsampleId}`);

     drawBarGraph(newsampleId);
     drawBubbleChart(newsampleId);
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
          drawBarGraph(id);
          drawBubbleChart(id);
          showMetadata(id);
          drawGauge(id);
         
     });


}

 init();