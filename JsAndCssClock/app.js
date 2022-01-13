const secondHand = document.querySelector('.second-hand') 
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


    function setDate() {
      const now = new Date();
      
      const seconds = now.getSeconds();
      const secondsDegress = ((seconds/60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegress}deg)`;
      console.log(seconds)
      

      
      const mins = now.getMinutes();
      const minsDegress = ((mins/60) * 360) + 90;
      minHand.style.transform = `rotate(${minsDegress}deg)`;
     // console.log(mins)

    
      const hours = now.getHours();
      const hoursDegress = ((hours/60) * 360) + 60;
      hourHand.style.transform = `rotate(${hoursDegress}deg)`;
      //console.log(hours)
    }
    setInterval(setDate, 1000)