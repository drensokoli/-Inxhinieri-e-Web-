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


  console.log("slides:")
  console.log(slides)
  console.log("slideIndex:")
  console.log(slideIndex)
  console.log("slideIndex-1:")
  console.log(slideIndex-1)
  console.log("slides[slideIndex-1]:")
  console.log(slides[slideIndex-1])

  console.log("slides:")
  console.log(slides)
  console.log(slides.item(0))
  console.log(slides.item(1))
  console.log(Array.from(slides)[2])
  console.log(Array.from(slides))

  console.log("slides:")
  console.log(slides)
  console.log(typeof(slides))

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
    }else if(!password.value.match(/[0-9]/)){
        alert('Fjalëkalimi duhet të përmbajë së paku një numër');
    }else if(!password.value.match(/[A-Z]/)){
        alert('Fjalëkalimi duhet të përmbajë së paku një shkronjë të madhe');
    }else if(!password.value == pw_confirm.value){
        alert('Fjalëkalimi që keni shkruar nuk përputhet')
    }else{
        localStorage.setItem('perdoruesi', perdoruesi.value);
        localStorage.setItem('password', password.value);
        alert('Jeni regjistruar');
    }
}

function check(){
    var storedName = localStorage.getItem('perdoruesi');
    var storedPw = localStorage.getItem('password');

    var PERDORUESI = document.getElementById('PERDORUESI');
    var PASSWORD = document.getElementById('PASSWORD');
    // var userRemember = document.getElementById("rememberMe");

    if(PERDORUESI.value == storedName && PASSWORD.value == storedPw){
        localStorage.setItem('loggedInUser', perdoruesi)
        // document.getElementById("login_btn").onclick = function () {
        //     location.href = "index.html";
        // };
        alert('Mirësevjen!');
        location.href = 'index.html';
        
    }else{
        alert('Emri i perdoruesit ose fjalëkalimi janë gabim.');
    }
}

