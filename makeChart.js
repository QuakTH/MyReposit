function makeChartN() {
    if (datas.length != 0) {
        var chart = $('#chart1');
        scatterChart = new Chart(chart, {
            type: 'scatter',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(255,0,0,1)',
                    label: 'Mean and Variance'
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
                            min: mean - 50,
                            max: mean + 50
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
                            min: variance - 50,
                            max: variance + 50
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
        scatterChart2 = new Chart(chart, {
            type: 'scatter',
            data: {
                datasets: [{
                    backgroundColor: 'rgba(255,0,0,1)',
                    label: 'Mean and Variance',
                    data: []
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
                            min: mean - 50,
                            max: mean + 50
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
                            min: variance - 50,
                            max: variance + 50
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

function makeRandom(n) {
    var arrSize = datas.length;
    for (let i = 0; i < 300; i++) {
        let tmp1 = {x: 0, y: 0};
        let tmp2 = {x: 0, y: 0};
        let tmpArray = [];
        let mean = 0;
        for (let j = 0; j < n; j++) {
            let choose = Math.floor(Math.random() * arrSize);
            tmpArray.push(datas[choose]);
            mean += datas[choose];
        }
        mean /= n;
        tmp1.x = mean;
        tmp2.x = mean;
        let variance = 0;
        for (k in tmpArray) {
            variance += (tmpArray[k] - mean) * (tmpArray[k] - mean);
        }
        tmp1.y = (variance / n);
        tmp2.y = (variance / (n - 1));
        data1.push(tmp1);
        data2.push(tmp2);
    }
}