/*const targetDate = new Date("Jun 15, 2021");

console.log(Date.now(targetDate));

const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timeComponents = getTimeComponents(deltaTime);
      console.log(timeComponents);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return {days, hours, mins, secs};
}*/



class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector('span[data-value="days"]');
    this.hours = document.querySelector('span[data-value="hours"]');
    this.minutes = document.querySelector('span[data-value="mins"]');
    this.seconds = document.querySelector('span[data-value="secs"]');
  }

  showClockFace() {
    setInterval(() => {
      const currentTime = new Date();
      const time = this.targetDate - currentTime;
      this.getTimeComponents(time);
    }, 1000);
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  this.updateClockFace({days, hours, mins, secs});
}

  updateClockFace({days, hours, mins, secs}) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.minutes.textContent = `${mins}`;
    this.seconds.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 15, 2021"),
});
 
timer.showClockFace();