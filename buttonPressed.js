var datas = new Array();
$(document).ready(function () {
    $('.five').click(function () {
        for (let i = 0; i < 5; i++) {
            datas.push(Math.random() * 500 + 1);
        }
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
    });
});