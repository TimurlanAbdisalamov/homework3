
const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const checkpointList = document.getElementById('checkpoints');
const checkpoint = document.getElementById('checkpoint');

let interval;
let i = 0;

start.onclick = () => {
    interval = setInterval(() => {
        i++;
        time.textContent = (i / 100).toFixed(2);  
    }, 10);
    start.disabled = true;
};

stop.onclick = () => {
    clearInterval(interval);
    start.disabled = false;
};

reset.onclick = () => {
    clearInterval(interval);
    i = 0;
    time.textContent = '0.00';  
    start.disabled = false;
    checkpointList.innerHTML = '';  
};

checkpoint.onclick = () => {
    const checkpointTime = document.createElement('li');
    checkpointTime.textContent = (i / 100).toFixed(2);  
    checkpointList.appendChild(checkpointTime);
};
