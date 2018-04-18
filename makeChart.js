function makeChart() {
    if (datas.length != 0) {
        var chart = $('#chart');
        var scatterChart = new Chart(chart, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Mean and Variance',
                    data: [{
                        x: 10,
                        y: 10
                    }]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });
    }
}