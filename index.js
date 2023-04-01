/* Learning setTimeout()

First Challenge */

// console.log('What is the capital of Peru?')  


// setTimeout(function(){
//     console.log('Lima!')
// }, 3000)


/*
Challenge:
1. Make the third console.log fire 3 seconds after 
   the answer appears.
*/

/* My Solution:

setTimeout(function(){
    console.log('Ready for next question?')
}, 6000)

Full Expression:

console.log('What is the capital of Peru?')

setTimeout(function(){
    console.log('Lima!')
}, 3000)

setTimeout(function(){
    console.log('Ready for next question?')
}, 6000) */

/*
Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

// setTimeout(function(){
//     console.log('Modal Opened!')
// }, 1500)

/* Learning: Element.Style

const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')

revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
})

/*
Challenge
1. When the button is clicked and the answer revealed, 
   change the background color to #68e1fd and text color
   to #1434A4 just in the "question" div.
   ⚠️ You will run into a problem with the background 
   color. See if you can find the solution by googling.
2. When the answer is revealed, make the button disappear.
*/

/* const question = document.getElementById('question')

revealBtn.addEventListener('click', function(){
    question.style.backgroundColor = '#68e1fd'
    question.style.color = '#1434A4'
    revealBtn.style.display = 'none'
}) */

/*
Challenge:
1. Take control of the 'modal' div with JavaScript.
2. Swap out our console.log for a line of code
   which will change the CSS 'display' property
   of our modal to 'inline'.
*/

// const modal = document.getElementById('modal')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

/*
Challenge:
1. Take control of the close button.
2. Use an event listener to set the display 
   property of the modal to 'none' when the
   close button is clicked.
*/

const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')

setTimeout(function(){
    // console.log('Modal Opened!')
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})