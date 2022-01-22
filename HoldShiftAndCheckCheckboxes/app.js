const checboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;
function handleCheck(e) {
   // Check if they had the shift key down
   //AND check that they are checking it

   let inBetween = false;

   if (e.shiftKey && this.checked) {
       checboxes.forEach(checkbox => {
           console.log(checkbox);
       
       if (checkbox === this || checkbox === lastChecked) {
           inBetween = !inBetween;
           console.log('starting to check them between!');
       }

       if (inBetween) {
           checkbox.checked = true;
       }
   });
}
lastChecked = this;
}

checboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));