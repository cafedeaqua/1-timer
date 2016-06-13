(function () {
    'use strict';

    var passedTime = 0;
    var intervalId = null;

    var timer = document.getElementById('timer');


    document.getElementById('start').addEventListener('click', start);
    document.getElementById('stop').addEventListener('click', stop);
    document.getElementById('reset').addEventListener('click', reset);

    render();

    function start() {
        if (intervalId !== null) {
            return;
        }
        intervalId = setInterval(function () {
            passedTime++;
            render();
        }, 1000);
    }

    function stop() {
        if (intervalId != null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function reset() {
        stop();
        passedTime = 0;
    }

    function render() {
        var minutes = Math.floor(passedTime / 60);
        var seconds = passedTime % 60;
        timer.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
    }

    function zeroFill(num) {
        return ('0' + num).slice(-2);
    }

})();
