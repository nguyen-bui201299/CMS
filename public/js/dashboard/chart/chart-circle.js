var canvas = document.getElementById('myChart');
new Chart(canvas, {
    type: 'doughnut',    
    data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
        data: [50445, 33655, 15900],
        backgroundColor: ['#FADB37', '#FBE469','#FDED9B']
    }]
    },
    options: {
        legend: {
            display: false
        },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        labels: {
        render: 'percentage',
        // precision: 1
        }
    },
    },
    plugins: [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
        var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = 'white';
    
        var text = "75%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
        }
    }]
});


var canvas = document.getElementById('myChart2');
new Chart(canvas, {
    type: 'doughnut',    
    data: {
    labels: ['January', 'February', 'March'],
    datasets: [{
        data: [50445, 33655, 15900],
        backgroundColor: ['#FADB37', '#FBE469','#FDED9B']
    }]
    },
    options: {
        legend: {
            display: false
        },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        labels: {
        render: 'percentage',
        // precision: 2
        }
    },
    },
    plugins: [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
        var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = 'white';

    
        var text = "Total 700",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
        }
    }]
});