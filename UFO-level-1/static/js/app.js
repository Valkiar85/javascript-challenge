//Level 1: Automatic Table and Date Search (Required)

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference Table Body
var tbody = d3.select("tbody");

//Funtion that creates Table with the Rows appended from the dictionary
function table(dataSet){
  tbody.html("")
    dataSet.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};

//Call function for data.js
table(tableData)


  // Button
var button = d3.select("#filter-btn");
  // Listener
button.on("click", runEnter);

  // Event Handler Function
function runEnter() {

    d3.event.preventDefault();
    var input_element = d3.select("#datetime");

    // Value for the Input Element
    var input_value = input_element.property("value"); 
    
    // Log Date
    console.log(input_value);

    // Filter Table Data
    var filteredData = tableData.filter(ufo => ufo.datetime === input_value); 

    // Log Filtered Data
    console.log(filteredData);

    // Call Function with Parameter FilteredData
    table(filteredData);

  };