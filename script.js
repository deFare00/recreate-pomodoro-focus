let focusTitle = document.getElementById('focus');
let breakTitle = document.getElementById('short-break');

let focusTime = 25;
let breakTime = 5;

let seconds = '00'

window.onload =() => {
    document.getElementById('minutes').innerHTML = focusTime;
    document.getElementById('seconds').innerHTML = seconds;

    focusTitle.classList.add('active');
}

function start() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    seconds = 59;

    let focusMinutes = focusTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = focusMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            focusMinutes = focusMinutes - 1;
            if(focusMinutes === -1) {
                if(breakCount % 2 === 0) {
                    focusMinutes = breakMinutes;
                    breakCount++;

                    focusTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    focusMinutes = focusTime;
                    breakCount++;

                    breakTitle.classList.remove('active');
                    focusTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000);
}