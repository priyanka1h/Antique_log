let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false
    });
  });

function validateForm() {
  // Get form inputs
  var name = document.forms["contact-form"]["name"].value.trim();
  var email = document.forms["contact-form"]["email"].value.trim();
  var phone = document.forms["contact-form"]["phone"].value.trim();
  var message = document.forms["contact-form"]["message"].value.trim();
  // Validate name
  if (name == "") {
    alert("Please enter your name.");
    document.forms["contact-form"]["name"].focus();
    return false;
  } else if (!/^[A-Za-z]+$/.test(name)) {
  alert("Please enter a valid name with only alphabets.");
  document.forms["contact-form"]["name"].focus();
  return false;
}
  // Validate email
  if (email == "") {
    alert("Please enter your email.");
    document.forms["contact-form"]["email"].focus();
    return false;
  }
  // Validate phone
  if (phone == "") {
    alert("Please enter your phone number.");
    document.forms["contact-form"]["phone"].focus();
    return false;
  } else if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    document.forms["contact-form"]["phone"].focus();
    return false;
  }
  // Validate message
  if (message == "") {
    alert("Please enter your message.");
    document.forms["contact-form"]["message"].focus();
    return false;
  }
  // Form is valid
  return true;
}

