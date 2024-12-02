document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById('years');
    const monthElement = document.getElementById('months');
    const dayElement = document.getElementById('days');
    const hourElement = document.getElementById('hours');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('seconds');

    const birthDate = new Date("1998-12-03T10:45:00");

    function updateTime() {
        const now = new Date();
        const diff = now - birthDate;

        const years = now.getFullYear() - birthDate.getFullYear();
        const months = now.getMonth() - birthDate.getMonth();
        const days = now.getDate() - birthDate.getDate();

        let adjustedMonths = months;
        let adjustedDays = days;

        if (adjustedMonths < 0) {
            adjustedMonths += 12; // Adjust months if negative (we've gone back to the previous year)
        }

        if (adjustedDays < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 0);
            adjustedDays += prevMonth.getDate(); // Get the number of days in the previous month
        }

        const hours = now.getHours() - birthDate.getHours();
        const minutes = now.getMinutes() - birthDate.getMinutes();
        const seconds = now.getSeconds() - birthDate.getSeconds();

        let adjustedHours = hours;
        let adjustedMinutes = minutes;
        let adjustedSeconds = seconds;

        if (adjustedSeconds < 0) {
            adjustedSeconds += 60;
            adjustedMinutes -= 1;
        }

        if (adjustedMinutes < 0) {
            adjustedMinutes += 60;
            adjustedHours -= 1;
        }

        if (adjustedHours < 0) {
            adjustedHours += 24;
        }

        updateUnit(yearElement, years);
        updateUnit(monthElement, adjustedMonths);
        updateUnit(dayElement, adjustedDays);
        updateUnit(hourElement, adjustedHours);
        updateUnit(minuteElement, adjustedMinutes);
        updateUnit(secondElement, adjustedSeconds);
    }

    function updateUnit(element, value) {
        const currentValue = element.querySelector('.number').innerText;
        if (currentValue != value) {
            element.querySelector('.number').classList.add('flipping');
            setTimeout(() => {
                element.querySelector('.number').innerText = value;
                element.querySelector('.number').classList.remove('flipping');
            }, 300);
        }
    }

    setInterval(updateTime, 1000); 
});
