const timer =  (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSecond = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor((timeRemaining / 60 / 60)) ;
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            hours,
            minutes,
            seconds,
            timeRemaining
        }


    }

    const addZero = (num) => {
        if (num > 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();
        if(getTime.timeRemaining > 0) {
            timerHours.textContent = addZero(getTime.hours);
            timerMinutes.textContent = addZero(getTime.minutes);
            timerSecond.textContent = addZero(getTime.seconds);
            setInterval(updateClock, 1000);
        }

    }
    updateClock();

}

export default timer;