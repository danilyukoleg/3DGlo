const day = document.querySelector('p');
const week = document.querySelector('.week');
const time = document.querySelector('.time');
const newYear = document.querySelector('.new-year');
const date = new Date();
const arrDay = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

(() => {
    if (date.getHours() > 0 && date.getHours() <= 6) {
        day.textContent = `Доброй Ночи`;
    } else if (date.getHours() > 6 && date.getHours() <= 12) {
        day.textContent = `Доброе Утро`;
    } else if (date.getHours() > 12 && date.getHours() <= 18) {
        day.textContent = `Добрый День`;
    } else {
        day.textContent = `Добрый Вечер`;
    }

    arrDay.forEach((item) => {
        week.textContent = item;
    });

    time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`;
})()

const happyNewYear = () => {
    let nextYear = new Date(date.getFullYear() + 1, 0, 1);
    let dif = nextYear.getTime() - date.getTime();
    let count = Math.floor(dif / 1000 / 60 / 60 / 24);
    newYear.textContent = count;
}
happyNewYear();

