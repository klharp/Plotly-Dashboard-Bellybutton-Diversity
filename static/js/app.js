// Portions of this code are taken directly from instructor's office hours tutorial 
// Permission was given to use.
// I had previously successfully imported the json and occupied the dropdown.
// I decided to redo the code based on the office hours tutorial.
// That initial code exists as previous commits in Github.

 //  **Use D3 fetch to read the JSON file and occupy the sample IDs dropdown**  //
 function init() { 

     // Populate the dropdown
     var selector = d3.select("#selDataset");

     d3.json("data/samples.json").then(data => {
          console.log(data);

          var sampleNames = data.names;
          console.log(sampleNames);

          sampleNames.forEach(sampleID => {
               selector.append("option")
                    .text(sampleID)
                    .property("value", sampleID);
          });
     });

}

 init();