var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



$('.message a').click(function(){
    $('form').animate({height:"toggle", opacity:"toggle"}, "slow");
    });

function store(){
    var emri = document.getElementById('emri');
    var mbiemri = document.getElementById('mbiemri');
    var perdoruesi = document.getElementById('perdoruesi');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var pw_confirm = document.getElementById('pw_confirm');
    
    if(password.value.length<8){
        alert('Fjalëkalimi duhet të ketë së paku 8 karaktere');
    }else if(!password.value.match(numbers)){
        alert('Fjalëkalimi duhet të përmbajë së paku një numër');
    }else if(!password.value.match(upperCaseLetters)){
        alert('Fjalëkalimi duhet të përmbajë së paku një shkronjë të madhe');
    }else if(!password.value == pw_confirm.value){
        alert('Fjalëkalimi që keni shkruar nuk përputhet')
    }else{
        localStorage.setItem('emri', emri.value);
        localStorage.setItem('password', password.value);
        alert('Jeni regjistruar');
    }
}

function check(){
    var storedName = localStorage.getItem('perdoruesi');
    var storedPw = localStorage.getItem('password');

    var PERDORUESI = document.getElementById('PERDORUESI');
    var PASSWORD = document.getElementById('PASSWORD');
    var userRemember = document.getElementById("rememberMe");

    if(PERDORUESI.value == storedName && PASSWORD.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}