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

// const decrement = document.getElementById('decrement')
// const increment = document.getElementById('increment')
// const quantityDisplay = document.getElementById('quantity-display')
// const cartBtn = document.getElementById('cartBtn')

// let quantity = 0

// decrement.addEventListener('click', function(){
//     quantity--
//     if (quantity === 0){
//         decrement.disabled = true
//     }     
//     quantityDisplay.innerText = quantity
// })

// increment.addEventListener('click', function(){
//     quantity ++
//     decrement.disabled = false
//     cartBtn.disabled = false
//     quantityDisplay.innerText = quantity
// })
 
// cartBtn.addEventListener('click', function(){
//     console.log(`Your order for ${quantity} pairs of shoes is being processed`)
// /*
// Challenge:
// 1. Disable the 'Add to Cart' button when 
//    quantity is at zero. Remember: quantity
//    will be at zero when the page loads!
// */ 
//     You interact with the HTML first by disabling the button
//     Then you go to the increment section and set
//     cartBtn.disabled to "false"
//     Then you go to the decrement section and 
//     set cartBtn.disabled = true in the "if" statement
//
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

//     const consentFormData = new FormData(consentForm)

//     /*   
// Challenge: 
// 1. Create a const to store the user's name and
//    use a FormData method to extract the 
//    submitted name from the FormData object.
// 2. Insert the user's name into the HTML string
//    that contains the final message we show our
//    users.

//    To do this second part of the challenge,
//    I used this syntax: ${variableName}
// */ 

//     const fullName = consentFormData.get('fullName')

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
//             <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
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

//     const consentFormData = new FormData(consentForm)

//     const fullName = consentFormData.get('fullName')

//     modalText.innerHTML = `
//     <div class="modal-inner-loading">
//         <img src="images/loading.svg" class="loading">
//         <p id="upload-text">Uploading your data to the dark web...</p>
//     </div>`

//     setTimeout(function(){
//         document.getElementById('upload-text').innerText = `
//         Making the sale...`
//     }, 1500)
    
//    /*   
// Challenge: 
// 1. Make the button that closes the modal disabled.
// 2. Make that button become usable when the final 
//    modal message has been displayed to the user.
// */  


//     setTimeout(function(){
//         document.getElementById('modal-inner').innerHTML = `
//             <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
//             <p>We just sold the rights to your eternal soul.</p>
//             <div class="idiot-gif">
//                 <img src="images/pirate.gif">
//             </div>`
    
//     /*2. Make that button become usable when the final 
//             modal message has been displayed to the user.
//     */ 
//     modalCloseBtn.disabled = false
//     }, 3000)

// })




// const modal = document.getElementById('modal')
// const modalCloseBtn = document.getElementById('modal-close-btn')
// const consentForm = document.getElementById('consent-form')
// const modalText = document.getElementById('modal-text')
// const declineBtn = document.getElementById('decline-btn')

// setTimeout(function(){
//     // console.log('Modal Opened!')
//     modal.style.display = 'inline'
// }, 1500)

// modalCloseBtn.addEventListener('click', function(){
//     modal.style.display = 'none'
// })

// /*   
// Challenge: 
// 1. Take control of the decline btn. (What do you
//    need to do to make that possible?)
// 2. Set up an eventListener that is triggered 
//    when a user's cursor hovers over the decline 
//    button. (Google the event to listen out for!)
// 3. For now, just log out "hovered" when that 
//    happens. 
// */ 

// declineBtn.addEventListener('mouseenter', function(){
//     console.log('hovered')
// })

// consentForm.addEventListener('submit', function(e){
//     e.preventDefault()

//     const consentFormData = new FormData(consentForm)

//     const fullName = consentFormData.get('fullName')

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
//             <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
//             <p>We just sold the rights to your eternal soul.</p>
//             <div class="idiot-gif">
//                 <img src="images/pirate.gif">
//             </div>`

//             modalCloseBtn.disabled = false
//         }, 3000)
    
// })

// const sortBtn = document.getElementById('sort-btn')
// const container = document.getElementById('container')
                  
// sortBtn.addEventListener('click', function(){
//     container.classList.toggle('reverse')
// })

// const sortBtn = document.getElementById('sort-btn')
// const container = document.getElementById('container')
            
// sortBtn.addEventListener('click', function(){
//     container.classList.toggle('reverse')
// /*
// Challenge:
// 1. Make the Sort by Price button 
//    reverse the order of the paintings.
// */

// })





const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')
const modalChoiceBtn = document.getElementById('modal-choice-btns')

setTimeout(function(){
    // console.log('Modal Opened!')
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtn.classList.toggle('modal-choice-btns-reverse')
})

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/ 

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)

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

            modalCloseBtn.disabled = false
        }, 3000)
    
})