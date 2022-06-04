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
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        ctx.restore();
      }
  }
});
window.chartColors = {
    red: '#FA2E05',
    orange: '#FA6C05',
    yellow: '#F9D205',
    yellow2: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #F9D205;',
    blue: 'rgb(54, 162, 235)',
    purple: '#BE62C2',
    grey: 'rgb(231,233,237)'
  };
  var Month = ['1','2','3','4','5']
  var chart = new Chart(ctx, {
  type: 'LineWithLine',
  data: {
      labels: Month,
      datasets: [{
        label: "Critical",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [0, 45, 90, 135, 180, 280], // Specify the data values array
        fill: false,
      }, {
        label: "High",
        fill: false,
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [0, 45, 190, 235, 380, 424], // Specify the data values array
      }, {
        label: "Medium",
        fill: false,
        backgroundColor: window.chartColors.yellow,
        borderColor: window.chartColors.yellow,
        data: [0, 145, 10, 231, 364, 497], // Specify the data values array
      }, {
        label: "Low",
        fill: false,
        background: window.chartColors.yellow2,
        borderColor: window.chartColors.yellow,
        data: [0, 15, 110, 215, 480, 624], // Specify the data values array
      }, {
        label: "Negligible",
        fill: false,
        backgroundColor: window.chartColors.purple,
        borderColor: window.chartColors.purple,
        data: [0, 145, 290, 135, 520, 374], // Specify the data values array
      }]
  },
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