const clock = document.querySelector("#clock");
const dateContent = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  dateContent.innerText = `${year}y ${month}m ${day}d`;
  clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
