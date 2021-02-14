//kcharlesr



// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// display table and data

tableData.forEach((report) =>   {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
                                    });
                                });

// select button
var clickHandler = d3.select("#filter-btn");
                                           
//event
clickHandler.on("click", function() {

//delete
d3.select("tbody").html("");

//stop page from refreshing
d3.event.preventDefault();

// take input znd store as a var
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// filter records
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// display results of search
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});
