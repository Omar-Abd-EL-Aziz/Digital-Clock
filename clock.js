let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let seconds = document.getElementById("secs");
let pmAm = document.getElementById("pm-am");

const timeFunc = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let night = "Am";

  if (h > 12) {
    h -= 12;
    night = "PM";
  }

  hours.innerText = h;
  mins.innerText = m;
  seconds.innerText = sec;
  pmAm.textContent = night;
  setTimeout(() => {
    timeFunc();
  }, 1000);
};

timeFunc();
