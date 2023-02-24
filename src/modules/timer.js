const timer = (deadline) => {
  // console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  let idUpdateClock;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    // let days = Math.floor(timeRemaining / 60 / 60 / 24);

    return { timeRemaining, hours, minutes, seconds };
  };
  const updateCLock = () => {
    let getTime = getTimeRemaining();

    const addZero = (elem) => {
      if (String(elem).length === 1) {
        return "0" + elem;
      } else {
        return String(elem);
      }
    };
    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);
    // if (getTime.timeRemaining > 0) {
    //   setTimeout(updateCLock, 1000);
    // }
    if (getTime.timeRemaining < 0) {
      clearInterval(idUpdateClock);
      timerHours.textContent = addZero(0);
      timerMinutes.textContent = addZero(0);
      timerSeconds.textContent = addZero(0);
    }
  };
  // updateCLock();
  idUpdateClock = setInterval(updateCLock, 1000);
  updateCLock();
};

export default timer;
