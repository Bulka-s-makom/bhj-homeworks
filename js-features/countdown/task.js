const timer = document.getElementById("timer");
let seconds = 59;

const timerDecrease = () => {
    seconds -= 1;
    timer.innerText = `00:00:${seconds}`;
    if(seconds == 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе!");
    }
}

const intervalId = setInterval(timerDecrease, 1000);