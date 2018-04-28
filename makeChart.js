function makeChartN() {
    if (datas.length != 0) {
        var chart = $('#chart1');
        var scatterChart = new Chart(chart, {
            type: 'scatter',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(255,0,0,1)',
                    label: 'Mean and Variance',
                    data: [{
                        x: 400,
                        y: 6000
                    }]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Divide by N"
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            //drawOnChartArea: false,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(0,0,0,1)',
                            drawBorder: false
                        },
                        ticks: {
                            min: 0,
                            max: mean * 2.2
                        },
                        afterBuildTicks: function (chart) {
                            chart.ticks = [];
                            chart.ticks.push(mean);
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            //drawOnChartArea: false,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(0,0,0,1)',
                            drawBorder: false
                        },
                        ticks: {
                            min: 0,
                            max: variance * 2
                        },
                        afterBuildTicks: function (chart) {
                            chart.ticks = [];
                            chart.ticks.push(variance);
                        }
                    }]
                }
            }
        });
    }
}

function makeChartN_1() {
    if (datas.length != 0) {
        var chart = $('#chart2');
        var scatterChart2 = new Chart(chart, {
            type: 'scatter',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(255,0,0,1)',
                    label: 'Mean and Variance',
                    data: [{
                        x: 400,
                        y: 6000
                    }]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: "Divide by N-1"
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            //drawOnChartArea: false,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(0,0,0,1)',
                            drawBorder: false
                        },
                        ticks: {
                            min: 0,
                            max: mean * 2.2
                        },
                        afterBuildTicks: function (chart) {
                            chart.ticks = [];
                            chart.ticks.push(mean);
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            //drawOnChartArea: false,
                            color: 'rgba(0,0,0,1)',
                            zeroLineColor: 'rgba(0,0,0,1)',
                            drawBorder: false
                        },
                        ticks: {
                            min: 0,
                            max: variance * 2
                        },
                        afterBuildTicks: function (chart) {
                            chart.ticks = [];
                            chart.ticks.push(variance);
                        }
                    }]
                }
            }
        });
    }
}