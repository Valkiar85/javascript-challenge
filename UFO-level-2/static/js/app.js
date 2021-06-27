// from data.js
var tableData = data;

// YOUR CODE HERE!

//out the values for each each in our tableData array object)

var tbody=d3.select("tbody")

// Call forEach for every item on the Data
tableData.forEach((ufo) => {   
    
    var row=tbody.append("tr");
    Object.entries(ufo).forEach(([key,value]) =>{
        var cell=row.append("td");
        cell.text(value)
})
});

function filteredTable(event) {
    
    //Inputs
         date_input = document.getElementById('datetime');
         city_input = document.getElementById('City');
         state_input = document.getElementById('State');
         country_input= document.getElementById('Country');
         shape_input= document.getElementById('Shape'); 
    //Filters
         date_filter = date_input.value.toUpperCase();
         city_filter = city_input.value.toUpperCase();
         state_filter = state_input.value.toUpperCase();
         country_filter= country_input.value.toUpperCase();
         shape_filter = shape_input.value.toUpperCase();
         var rows = document.querySelector("#ufo-table tbody").rows;
    // Iteration Cells for each Row
        for (var i = 0; i < rows.length; i++) {
            var first_column = rows[i].cells[0].textContent.toUpperCase();
            var second_column = rows[i].cells[1].textContent.toUpperCase();
            var third_column = rows[i].cells[2].textContent.toUpperCase();
            var fourth_column = rows[i].cells[3].textContent.toUpperCase();
            var fifth_column = rows[i].cells[4].textContent.toUpperCase();
    
    
    // Method returns -1 if Value to Search doesn't happen
            if (first_column.indexOf(date_filter) > -1 
            &&  second_column.indexOf(city_filter) > -1 
            &&  third_column.indexOf(state_filter) > -1
            &&  fourth_column.indexOf(country_filter) > -1 
            &&  fifth_column.indexOf(shape_filter) > -1 ){
                
    // Show Rows
                rows[i].style.display = "";
            } else {
    // Hide Rows
                rows[i].style.display = "none";
            }      
        }
    }
    
    // For each Value Input entered, Rows are looked with: KeyUp and Filtered Table Function
    document.querySelectorAll('#datetime,#City,#State,#Country,#Shape').forEach(element => {
                element.addEventListener('keyup', filteredTable, false);
            });