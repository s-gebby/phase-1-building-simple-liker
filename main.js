// Defining text characters for the empty and full hearts for you to use later.
document.addEventListener("DOMContentLoaded", function () {
  const EMPTY_HEART = "♡";
  const FULL_HEART = "♥";
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  // Your JavaScript code goes here!
  document.querySelectorAll(".like").forEach(function (like) {
    like.addEventListener("click", function () {
      // Simulate server request
      mimicServerCall()
        .then(function () {
          // Toggle heart state on success
          toggleHeartState(like.querySelector(".like-glyph"));
        })
        .catch(function (error) {
          // Display error modal on failure
          modalMessage.textContent = error;
          modal.classList.remove("hidden");

          // Hide modal after 3 seconds
          setTimeout(function () {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  // Toggle heart state function
  function toggleHeartState(heart) {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add("activated-heart");
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  }
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
