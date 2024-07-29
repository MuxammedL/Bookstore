// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    flipAllCards(timeBetweenDates);

    previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}



