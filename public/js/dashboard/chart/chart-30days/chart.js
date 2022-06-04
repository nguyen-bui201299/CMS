//Chart Access 30days 
var ctx = document.getElementById("chart-access-30days").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15", "day 16", "day 17", "day 18", "day 19", "day 20", "day 21", "day 22", "day 23", "day 24", "day 25", "day 26", "day 27", "day 28", "day 29", "day 30"],
        datasets: [{
            label: 'Access', // Name the series
            data: [0, 2220, 3210, 4320, 5120, 6560, 7850, 8470, 9110, 13500, 11230, 12110,1412, 2324, 542, 124, 1112, 100,424,525,626,727,124,0, 621, 545, 236, 545, 212, 653], // Specify the data values array
            fill: false,
            borderColor: '#7380ec', // Add custom color border (Line)
            backgroundColor: '#7380ec63', // Add custom color background (Points and Fill)
            borderWidth: 1,
        }]},
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});

//Chart Users 30days 
var ctx = document.getElementById("chart-users-30days").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15", "day 16", "day 17", "day 18", "day 19", "day 20", "day 21", "day 22", "day 23", "day 24", "day 25", "day 26", "day 27", "day 28", "day 29", "day 30"],
        datasets: [{
            label: 'Users', // Name the series
            data: [0, 2220, 3210, 4320, 5120, 6560, 7850, 8470, 9110, 13500, 11230, 12110,1412, 2324, 542, 124, 1112, 100,424,525,626,727,124,0, 621, 545, 236, 545, 212, 653], // Specify the data values array
            fill: false,
            borderColor: '#41f1b6', // Add custom color border (Line)
            backgroundColor: '#41f1b663', // Add custom color background (Points and Fill)
            borderWidth: 1,
        }]},
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
          },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});



//Chart Posts
var ctx = document.getElementById("chart-posts-bot-30days").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15", "day 16", "day 17", "day 18", "day 19", "day 20", "day 21", "day 22", "day 23", "day 24", "day 25", "day 26", "day 27", "day 28", "day 29", "day 30"],
        datasets: [{
            label: 'Posts(bots)', // Name the series
            data: [0, 2220, 3210, 4320, 5120, 6560, 7850, 8470, 9110, 13500, 11230, 12110,1412, 2324, 542, 124, 1112, 100,424,525,626,727,124,0, 621, 545, 236, 545, 212, 653], // Specify the data values array
            fill: true,
            lineTension: 0.1,
            backgroundColor: "#ff77825e",
            borderColor: "#ff7782", // Add custom color background (Points and Fill)
            borderWidth: 1,
        }]},
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
          },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});


var ctx = document.getElementById("chart-posts-users-30days").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15", "day 16", "day 17", "day 18", "day 19", "day 20", "day 21", "day 22", "day 23", "day 24", "day 25", "day 26", "day 27", "day 28", "day 29", "day 30"],
        datasets: [{
            label: 'Posts(bots)', // Name the series
            data: [0, 2220, 3210, 4320, 5120, 6560, 7850, 8470, 9110, 13500, 11230, 12110,1412, 2324, 542, 124, 1112, 100,424,525,626,727,124,0, 621, 545, 236, 545, 212, 653], // Specify the data values array
            fill: true,
            lineTension: 0.1,
            backgroundColor: "#ff77825e",
            borderColor: "#ff7782", // Add custom color background (Points and Fill)
            borderWidth: 1,
        }]},
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
          },
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});