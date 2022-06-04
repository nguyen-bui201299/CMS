Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
  draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
        var activePoint = this.chart.tooltip._active[0],
            ctx = this.chart.ctx,
            x = activePoint.tooltipPosition().x,
            topY = this.chart.legend.bottom,
            bottomY = this.chart.chartArea.bottom;

        // draw line
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, topY);
        ctx.lineTo(x, bottomY);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#f9d2057a';
        ctx.stroke();
        ctx.restore();
      }
  }
});

var chart = new Chart(ctx, {
    type: 'LineWithLine',
    data: {
        labels: [" ",	" ", "03:00", " ",	" ", "06:00", " ", " ", "09:00", " ", " ", " ", " ", " ", "15:00", " ", " ", "18:00", " ", " ", "21:00", " ", " ", " "],
        datasets: [{
            label: 'Access', // Name the series
            data: [0, 2220, 3210, 4320, 5120, 6560, 7850, 8470, 9110, 13500, 11230, 12110,1412, 2324, 542, 124, 1112, 100,424,525,626,727,124,0], // Specify the data values array
            fill: false,
            borderColor: '#2196f3', // Add custom color border (Line)
            backgroundColor: '#7380ec6b', // Add custom color background (Points and Fill)
            borderWidth: 1,
        },
        {
            label: 'Posts', // Name the series
            data: [0, 220, 310, 420, 520, 660, 780, 870, 910, 1500, 1230, 1110], // Specify the data values array
            fill: false,
            borderColor: '#ff7782', // Add custom color border (Line)
            backgroundColor: '#ff7782', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        },
        {
            label: 'Users', // Name the series
            data: [0, 220, 210, 320, 120, 560, 850, 470, 110, 3500, 1230, 1110], // Specify the data values array
            fill: false,
            borderColor: '#41f1b6', // Add custom color border (Line)
            backgroundColor: '#41f1b64d', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},
        options: {
            legend: {
             align: 'center',
        
            },
              responsive: true,
              tooltips: {
                mode: 'index',
                intersect: false,
              },
              hover: {
                mode: 'nearest',
                intersect: true
              },
              scales: {
                xAxes: [{
                  display: false,
                  scaleLabel: {
                    display: false,
                    // labelString: 'Month'
                  }
                }],
                yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                }]
              }
          }
});

