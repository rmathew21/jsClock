const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minuteHand');
const hourHand = document.querySelector('.hourHand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // console.log(`seconds: ${seconds}`)
    const secondsDegrees = ((seconds/60) * 360) + 90 + 180;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    // console.log(`minutes: ${minutes}`)
    const minutesDegrees = ((minutes/60) * 360) + 90 + 180;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    // console.log(`hours: ${hours}`)
    const hoursDegrees = ((hours/12) * 360) + ((minutes/60)*30) + 90 + 180;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();