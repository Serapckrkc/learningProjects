const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  
    panels.forEach(panel => {
        const isOpen = panel.classList.contains('open')
        if (isOpen === true && panel !== this ){
            panel.classList.remove('open')
        }
        
    })
    this.classList.toggle('open');
}

function toggleActive(e) {
  
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
