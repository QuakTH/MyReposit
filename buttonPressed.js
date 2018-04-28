var datas = new Array();
var size, mean, variance;
$(document).ready(function () {
    $('#reset').prop('disabled', true);
    $('#result').prop('disabled', true);
    $('.make').click(function (event) {
        makeDatas(event.target);
        var sum = 0;

        for (i in datas) {
            sum += datas[i];
        }
        mean = sum / datas.length;
        $('#mean>p').text(mean.toFixed(3));

        variance = 0;
        for (i in datas) {
            variance += (datas[i] - mean) * (datas[i] - mean);
        }
        variance /= datas.length;
        $('#variance>p').text(variance.toFixed(3));

    });

    $('#ok').click(function () {
        if ($('#sampleSize').val() == '') {
            alert("Put in a Number");
        } else {
            size = Number($('#sampleSize').val());
            if (size > datas.length || size <= 1) {
                alert('The sample size is bigger than the data Set size or less than one');
                $('#sampleSize').val("");
            } else {
                $('#ok').prop('disabled', true);
                $('#sampleSize').prop('disabled', true);
                $('#reset').prop('disabled', false);
                $('#result').prop('disabled', false);
            }
        }
    });

    $('#reset').click(function () {
        $('#ok').prop('disabled', false);
        $('#sampleSize').prop('disabled', false);
        $('#reset').prop('disabled', true);
        $('#result').prop('disabled', true);
    });

    $('#result').click(function () {
        makeChartN();
        makeChartN_1();
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