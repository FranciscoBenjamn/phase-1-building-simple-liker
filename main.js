// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#modal')
    modal.classList.add('hidden')

    document.querySelectorAll('.like-glyph').forEach((element) => {
      element.addEventListener('click', () => {
      if (element.textContent == EMPTY_HEART) {
          mimicServerCall()
            .then((value) => {
              element.textContent = FULL_HEART
              element.classList.add('activated-heart')
            }).catch((value) => {
              modal.classList.remove('hidden')
              document.querySelector('#modal-message').textContent = value

              setTimeout(() => {
              modal.classList.add('hidden') 
              }, 3000)
            })
        } else {
          element.textContent = EMPTY_HEART
          element.classlist.remove('activated-heart')
        }
      }) 
  })
})


// This function will be used to display the modal.
function displayModal() {
  modal.classList.remove('hidden')
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
};
