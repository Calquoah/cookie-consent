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

// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display = 'none'
// })

/*
Challenge:
1. Take control of the form element. 
2. Add an eventListener to the form to listen for a
   "submit" event.
3. When a user clicks "accept", prevent the default
   behaviour that triggers the refresh.
4. Log out "form submitted".
*/  

// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')
// const consentForm = document.getElementById('consent-form')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display = 'none'
// })

// consentForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log("form submitted")
// })



// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')
// const consentForm = document.getElementById('consent-form')
// const modalText = document.getElementById('modal-text')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display = 'none'
// })

// consentForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     // console.log("form submitted")

//     /*
// Challenge:
// 1. Take control of the "modal-text" element. 
// 2. Make it so that when a user clicks on 
//    the accept button, the HTML string below
//    is inserted into the modal-text div.

// <div class="modal-inner-loading">
//     <img src="images/loading.svg" class="loading">
//     <p id="uploadText">
//         Uploading your data to the dark web...
//     </p>
// </div>
// */

// modalText.innerHTML = `
//     <div class="modal-inner-loading">
//         <img src="images/loading.svg" class="loading">
//         <p id="upload-text">Uploading your data to the dark web...</p>
//     </div>`

// /*   
// Challenge: 
// 1. Use a setTimeout to make the phrase "Uploading
//    your data to the dark web" change to "Making the 
//    sale..." after 1.5 seconds.
// ⚠️ Do not change the loading svg!
// */ 
// /* My Solution 
// setTimeout(function(){
//     modalText.innerHTML = `
//         <div class="modal-inner-loading">
//             <img src="images/loading.svg" class="loading">
//                 <p id="uploadText">
//                 Making the sale...
//                 </p>
//         </div>`
// }, 1500) */

// /* Tom's Solution */
//     // setTimeout(function(){
//     //     const uploadText = document.getElementById('upload-text')
//     //     uploadText.innerHTML = `Making the sale...`
//     // }, 1500) 

//     setTimeout(function(){
//         document.getElementById('upload-text').innerText = `
//         Making the sale...`
//     }, 1500) 


//     /*   
// Challenge: 
// 1. Make it so that 1.5 seconds after seeing the 
//    "Making the sale..." message, the modal is 
//    cleared of its content and the following 
//    string of HTML is displayed instead.
   
//    `<h2>Thanks you sucker! </h2>
//     <p>We just sold the rights to your eternal soul.</p>
//     <div class="idiot-gif">
//         <img src="images/pirate.gif">
//     </div>
//     ` 
// */  
//     setTimeout(function(){
//         document.getElementById('modal-inner').innerHTML = `
//             <h2>Thanks you sucker!</h2>
//             <p>We just sold the rights to your eternal soul.</p>
//             <div class="idiot-gif">
//                 <img src="images/pirate.gif">
//             </div>`
//     }, 3000)

// })



// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')
// const consentForm = document.getElementById('consent-form')
// const modalText = document.getElementById('modal-text')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display = 'none'
// })

// consentForm.addEventListener('submit', function(e){
//     e.preventDefault()

//     /*   
// Challenge: 
// 1. Inside the body of this event listener, 
//    create a const and set it equals to a new 
//    instance of FormData which takes in our HTML 
//    form element as a parameter.
// 2. Log out the const (you should just get 
//    a FormData object).
// */ 

// const consentFormData = new FormData(consentForm)

//     modalText.innerHTML = `
//     <div class="modal-inner-loading">
//         <img src="images/loading.svg" class="loading">
//         <p id="upload-text">Uploading your data to the dark web...</p>
//     </div>`

//     setTimeout(function(){
//         document.getElementById('upload-text').innerText = `
//         Making the sale...`
//     }, 1500)
    
    
//     setTimeout(function(){
//         document.getElementById('modal-inner').innerHTML = `
//             <h2>Thanks <span class="modal-display-name">NAME</span> you sucker!</h2>
//             <p>We just sold the rights to your eternal soul.</p>
//             <div class="idiot-gif">
//                 <img src="images/pirate.gif">
//             </div>`
//     }, 3000)

// })


const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    // console.log('Modal Opened!')
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)

    /*   
Challenge: 
1. Create a const to store the user's name and
   use a FormData method to extract the 
   submitted name from the FormData object.
2. Insert the user's name into the HTML string
   that contains the final message we show our
   users.

   To do this second part of the challenge,
   I used this syntax: ${variableName}
*/ 

    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`

    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`
    }, 3000)

})