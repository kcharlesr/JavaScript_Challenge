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

// take input, convert to lower case and store as a var
var dateTime = d3.select("#datetime").property("value");
var selectedCountry = d3.select("#country").property("value").toLowerCase();
var selectedState = d3.select("#state").property("value").toLowerCase();
var selectedCity = d3.select("#city").property("value").toLowerCase();
var selectedShape = d3.select("#shape").property("value").toLowerCase();

//tableData as filteredData
filteredData = tableData;
if (dateTime)       {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
                    }
if (selectedCountry){
    filteredData = filteredData.filter(record => record.country === selectedCountry);
                    }
if (selectedState)  {
    filteredData = filteredData.filter(record => record.state === selectedState);
                    }   
if (selectedCity)   {
    filteredData = filteredData.filter(record => record.city === selectedCity);
                    }
if (selectedShape)  {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
                    }

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