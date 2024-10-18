let i = 0;
let currentImg;

function toggleOpacity() {
  document.querySelector(".img1").style.opacity = 0;
  document.querySelector(".img2").style.opacity = 0;
}

function imageSwap() {
  setTimeout(() => {
    i = (i + 1) % 3;
    currentImg = document.querySelector(`.img${i}`);
    currentImg.style.opacity = 1;
    if (i === 0) {
      toggleOpacity();
    }
    imageSwap();
  }, 5000);
}

toggleOpacity();
imageSwap();

document.getElementById("form").addEventListener('submit', function(e) {
  e.preventDefault();

  var passwordInput = document.getElementById('password');
  var confirmPasswordInput = document.getElementById('confirm-password');

  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;
  var errorMessage = document.getElementById("error-message");

  if(password !== confirmPassword) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";

    var inputs = document.querySelectorAll('input');
        inputs.forEach(function(input) {
            input.value = ""; 
        });

    alert("Form submitted.")
  }

});