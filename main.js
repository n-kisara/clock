"use strict";

const clock = () => {
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let dayNum = d.getDay();
  let weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = weekday[dayNum];
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const clockDate = document.querySelector(".clock-date");
  const clockTime = document.querySelector(".clock-time");

  let today = `${year}.${month}.${date} (${day})`;
  let time = `${hour}:${minutes}:${seconds}`;

  clockDate.innerHTML = today;
  clockTime.innerHTML = time;
};

setInterval(clock, 1000);
