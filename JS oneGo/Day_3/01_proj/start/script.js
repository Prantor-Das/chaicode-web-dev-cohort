const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

function updateClock() {
    const now = new Date(); // got the current date

    const hours = now.getHours() % 12 || 12; //problem at 12 o clock so in or 12 is there,
    //at 12, now.getHours() % 12 = 0 which is false so 12 is passed

    const minutes = now.getMinutes().toString().padStart(2,"0"); //adding padding if minutes is not 2 digits
    //minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = now.getSeconds().toString().padStart(2,"0");

    const ampm = now.getHours() % 12 > 0 ? "PM" : "AM";

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
    dateElement.textContent = now.toLocaleDateString(undefined, options);
};
setInterval(updateClock, 1000);

updateClock(); 
//so that there is no time delay when we refresh
// window.onload();