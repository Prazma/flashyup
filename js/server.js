var datavase = new Firebase('https://peer2peer-60587.firebaseio.com');
var readerMode = 0;

function signup() {
  var username = document.getElementById("newusername").value;
  var email = document.getElementById("newemail").value;
  var password = document.getElementById("newpassword").value;

  datavase.push({datatype:"account", usercode:username, username:username, email:email, password:password, gold:0, levelVocab: 0, levelGram: 0});

  localStorage.loggedin = "true";
  localStorage.uid = username;

  document.getElementById("guestUserContent").style.display = "none";
  document.getElementById("loggedUserContent").style.display = "block";
  signupModal.style.display = "none";
  loginModal.style.display = "none";

}

var startListening = function() {
	datavase.on('child_added', function(snapshot) {

  });
}
startListening();

window.onload = function () {
  if( localStorage.loggedin == "true" ) {
    document.getElementById("guestUserContent").style.display = "none";
    document.getElementById("loggedUserContent").style.display = "block";
    signupModal.style.display = "none";
    loginModal.style.display = "none";
    document.getElementById("usernameBig").innerHTML = localStorage.uid;
    document.getElementById("usernameMini").innerHTML = localStorage.uid;
  }
}
