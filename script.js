const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', function (event) {
    container.classList.add ('show-nav')
  })

close.addEventListener('click', function (event) {
    container.classList.remove ('show-nav')
  })





  

// open.addEventlistener('click' () => container.classList.add 
// ('show-nav'))

// open.addEventlistener('click' () => container.classList.remove 
// ('show-nav'))