const clickerCounter = document.getElementById('clicker__counter')
const clickerSpeed = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie')
const clickerCookie = document.getElementsByClassName('clicker__cookie')
var isCookieBig = true;
let oldSeconds = null;

function clicker() {
    clickerCounter.innerText++;
    if(isCookieBig) {
        cookie.width = 220;
        isCookieBig = false;
    } 

    setTimeout(function() {
        if(!isCookieBig) {
            cookie.width = 200;
            isCookieBig = true;
        }
    }, 100)

    const newSeconds = new Date();
    // let newSeconds = date.getSeconds();
    if(oldSeconds) {
        const secondsDifferense = newSeconds - oldSeconds;
        let Speed = 1000 / secondsDifferense;
        clickerSpeed.innerText = Speed.toFixed(2);
    }
    oldSeconds = newSeconds;
}

cookie.onclick = clicker;