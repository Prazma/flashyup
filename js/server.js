var datavase = new Firebase('https://peer2peer-60587.firebaseio.com');
var readerMode = 0;
var accountEmails = [];
var accountUsername = [];
var accountPasswords = [];
var cred = document.getElementById("loginInitBtn");

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


  document.getElementById("usernameBig").innerHTML = localStorage.uid;
  document.getElementById("usernameMini").innerHTML = localStorage.uid;

}

var startListening = function() {
	datavase.on('child_added', function(snapshot) {
    var fdata = snapshot.val();
    if( fdata.datatype  == "account" ) {
      accountEmails.push( fdata.email );
      accountPasswords.push( fdata.password );
      accountUsername.push( fdata.username );
    }
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
    var windowWidth = window.innerWidth;
    document.html.style.width = windowWidth + "px";
  }
}
cred.onclick = function () {
  var credE = document.getElementById("loginEmailCred").value;
  var credP = document.getElementById("loginPassCred").value;
  var tcpik = accountEmails.indexOf( credE );
  if( tcpik != -1 ) {
    var fcpik = accountPasswords[tcpik];
    var dfcpik = accountPasswords.indexOf( fcpik );
    var til = accountPasswords.indexOf( credP );
    if( dfcpik == til ) {
      var username = accountUsername[til];
      document.getElementById("annoyingLoginErrorMessage").style.display = "none";
      localStorage.loggedin = "true";
      localStorage.uid = username;

      document.getElementById("guestUserContent").style.display = "none";
      document.getElementById("loggedUserContent").style.display = "block";
      signupModal.style.display = "none";
      loginModal.style.display = "none";


      document.getElementById("usernameBig").innerHTML = localStorage.uid;
      document.getElementById("usernameMini").innerHTML = localStorage.uid;
    } else {
      document.getElementById("annoyingLoginErrorMessage").style.display = "inline";
    }
  } else {
    document.getElementById("annoyingLoginErrorMessage").style.display = "inline";
  }
}
