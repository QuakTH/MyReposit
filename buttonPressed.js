var datas = new Array();

$(document).ready(function () {
    $('.make').click(function (event) {
        makeDatas(event.target);
        var sum = 0;

        for (i in datas) {
            sum += datas[i];
        }
        var mean = sum / datas.length;
        $('#mean>p').text(mean.toFixed(3));

        var variance = 0;
        for (i in datas) {
            variance += (datas[i] - mean) * (datas[i] - mean);
        }
        variance /= datas.length;
        $('#variance>p').text(variance.toFixed(3));

        makeChart();
    });
});

function makeDatas(target) {
    var name = target.classList[1];
    switch (name) {
        case "five":
            for (let i = 0; i < 5; i++) {
                datas.push(Math.random() * 500 + 1);
            }
            break;
        case "ten":
            for (let i = 0; i < 10; i++) {
                datas.push(Math.random() * 500 + 1);
            }
            break;
        case "fifteen":
            for (let i = 0; i < 15; i++) {
                datas.push(Math.random() * 500 + 1);
            }
            break;
        case "random":
            for (let i = 0; i < 100; i++) {
                datas.push(Math.random() * 500 + 1);
            }
            break;
        default:
            break;
    }

}