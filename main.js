let myNameItems = document.querySelector("#myName");
var myNamePrompt = prompt("İsminiz : ");
myNameItems.innerHTML = myNamePrompt;
debugger;

const showTime = () => {
  let today = new Date();
  let todayHour = today.getHours();
  let todayMinute = today.getMinutes();
  let todaySecond = today.getSeconds();

  let options = { weekday: "long" };
  let todayDate = today.toLocaleDateString("tr-TR", options); // Tarih bilgisini getirir.

  todayHour = todayHour < 10 ? 0 + todayHour : todayHour;
  todayMinute = todayMinute < 10 ? 0 + todayMinute : todayMinute;
  todaySecond = todaySecond < 10 ? 0 + todaySecond : todaySecond;

  let time = `${todayHour}:${todayMinute}:${todaySecond} ${todayDate}`;
  let myClockItems = document.querySelector("#myClock");
  myClockItems.innerHTML = time;
};

setInterval(showTime, 1000);
