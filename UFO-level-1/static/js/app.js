//Level 1: Automatic Table and Date Search (Required)

// from data.js
var table_data = data;

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
table(table_data)


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
    var filtered_data = table_data.filter(ufo => ufo.datetime === input_value); 

    // Log Filtered Data
    console.log(filtered_data);

    // Call Function with Parameter filtered_data
    table(filtered_data);

  };