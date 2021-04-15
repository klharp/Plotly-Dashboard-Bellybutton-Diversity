// Use D3 fetch to read the JSON file and occupy the sample IDs
// Get data by using data binding. See class lecture on D3-1, examples 1 & 2
function init() {
     // Populate dropdown options with all the individual ID's of the study subjects.
     d3.json("data/samples.json").then(function(data) {
         d3.select("#selDataset").selectAll("option")
             .data(data.names)
             .enter()
             .append("option")
             .html(function(d) {
                  return `<option>${d}</option>`;
             });
     });
 }


 // event handler

 //  build plot




 init();

