// Portions of this code are taken directly from instructor's office hours tutorial 
// Permission was given to use.
// I had previously successfully imported the json and occupied the dropdown.
// I decided to redo the code based on the office hours tutorial.
// That initial code exists as previous commits in Github.

// Define plotting/graphing functions
// Function for bar graph
function drawBarGraph(sampleID) {
     console.log(`drawBarGraph(${sampleID})`);
}

// Function for bubble chart
function drawBubbleChart(sampleID) {
     console.log(`drawBubbleChart(${sampleID})`);
}

// Function for Metadata
function showMetadata(sampleID) {
     console.log(`showMetadata(${sampleID})`);
}

// Function for Gauge Gauge
function drawGauge(sampleID) {
     console.log(`drawGauge(${sampleID})`);
}

// Establish event handler
function optionChanged(newSampleID){
     console.log(`User selected ${newSampleID}`);

     drawBarGraph(newSampleID);
     drawBubbleChart(newSampleID);
     showMetadata(newSampleID);

}


 // Use D3 fetch to read the JSON file and occupy the sample IDs dropdown
 function init() { 

     // Populate the dropdown
     var selector = d3.select("#selDataset");

     d3.json("data/samples.json").then(data => {
          console.log(data);

          var sampleNames = data.names;
          // console.log(sampleNames);

          sampleNames.forEach(sampleID => {
               selector.append("option")
                    .text(sampleID)
                    .property("value", sampleID);
          });

          // Define the default id
          var id = sampleNames[0]

          // Define plotting/drawing
          drawBarGraph(id);
          drawBubbleChart(id);
          showMetadata(id);
          drawGauge(id);
         
     });


}

 init();