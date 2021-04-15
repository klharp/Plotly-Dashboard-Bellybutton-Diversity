// Use D3 fetch to read the JSON file and occupy the sample IDs
// Get data by using data binding. See class lecture on D3-1, example 3
function init() {
     d3.json("data/samples.json").then(function(data) {
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

// plot the initial/default



// event handler for changing the selection in dropdown



//  build plots



// calling initial function
init();

