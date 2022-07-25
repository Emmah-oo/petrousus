(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "10/20/",
    launchDay = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > launchDay) {
    launchDay = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(launchDay).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.querySelector(".days h1").innerText = Math.floor(distance / day);
      (document.querySelector(".hours h1").innerText = Math.floor(
        (distance % day) / hour
      )),
        (document.querySelector(".minutes h1").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.querySelector(".seconds h1").innerText = Math.floor(
          (distance % minute) / second
        ));
    }, 0);
})();
