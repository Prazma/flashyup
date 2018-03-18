var learnMode = 2;
var colorFL = "blue";
var readstats = document.getElementById("readStatus");
var splash = document.getElementById("splash");
var splashCard = document.getElementById("splashCard");
var splashDesc = document.getElementById("splashDesc");
var splashLogo = document.getElementById("splashLogo");
var userstats = document.getElementById("userStatus");
var gramstats = document.getElementById("gramStatus");
var vocabstats = document.getElementById("vocabStatus");
var righty = document.getElementById("righty");
var lefty = document.getElementById("lefty");
var strtbtn = document.getElementById("strtbtn");
var learnbtn = document.getElementById("learnBtn");
var profilebtn = document.getElementById("profileBtn");
var testbtn = document.getElementById("testbtn");
var leary = document.getElementById("learnbtn");
var dared = document.getElementById("daredXatlearnport");

setTimeout( function () {
  splashCard.style.opacity = "0";
  splashDesc.style.opacity = "0";
  splashLogo.style.opacity = "0";
}, 1000)
setTimeout( function () {
  splashCard.style.display = "none";
  splashDesc.style.display = "none";
  splashLogo.style.display = "none";
  splash.style.height = "0";
}, 1400)
setTimeout( function () {
  document.getElementById("righty").style.display = "inline-block";
  document.getElementById("lefty").style.display = "inline-block";
}, 1800)

function right() {
  console.log("done righty");
  var wdt = window.innerWidth;
  if( learnMode == 2 ) {
    vocabstats.style.left = -1 * wdt + "px";
    gramstats.style.left = "0px";
    readstats.style.left = -2 * wdt + "px";
    strtbtn.style.borderColor = "#8BC34A";
    strtbtn.style.color = "#8BC34A";
    testbtn.style.borderColor = "#8BC34A";
    testbtn.style.color = "#8BC34A";
    colorFL = "green";
    changeTabColor();
    learnMode = 3;
  } else if ( learnMode == 3 ) {
      vocabstats.style.left = wdt + "px";
      gramstats.style.left =  2 * wdt + "px";
      readstats.style.left = "0px";
      strtbtn.style.borderColor = "#FF9800";
      strtbtn.style.color = "#FF9800";
      testbtn.style.borderColor = "#FF9800";
      testbtn.style.color = "#FF9800";
      colorFL = "orange";
      changeTabColor();
      learnMode = 1;
  } else if ( learnMode == 1 ) {
      vocabstats.style.left = "0px";
      gramstats.style.left =  wdt + "px";
      readstats.style.left = -1 * wdt + "px";
      strtbtn.style.color = "#32cdfe";
      strtbtn.style.borderColor = "#32cdfe";
      testbtn.style.color = "#32cdfe";
      testbtn.style.borderColor = "#32cdfe";
      colorFL = "blue";
      changeTabColor();
      learnMode = 2;
  }
}

function left() {
  console.log("done righty");
  var wdt = window.innerWidth;
  if( learnMode == 2 ) {
    vocabstats.style.left = wdt + "px";
    gramstats.style.left = 2 * wdt + "px";
    readstats.style.left = "0px";
    strtbtn.style.borderColor = "#FF9800";
    strtbtn.style.color = "#FF9800";
    testbtn.style.borderColor = "#FF9800";
    testbtn.style.color = "#FF9800";
    colorFL = "orange";
    changeTabColor();
    learnMode = 1;
  } else if ( learnMode == 3 ) {
      vocabstats.style.left = "0px";
      gramstats.style.left =  wdt + "px";
      readstats.style.left = -1 * wdt + "px";
      strtbtn.style.borderColor = "#32cdfe";
      testbtn.style.borderColor = "#32cdfe";
      strtbtn.style.color = "#32cdfe";
      testbtn.style.color = "#32cdfe";
      colorFL = "blue";
      changeTabColor();
      learnMode = 2;
  } else if ( learnMode == 1 ) {
      vocabstats.style.left = -1 * wdt + "px";
      gramstats.style.left =  "0px";
      readstats.style.left = -2 * wdt + "px";
      strtbtn.style.borderColor = "#8BC34A";
      strtbtn.style.color = "#8BC34A";
      testbtn.style.borderColor = "#8BC34A";
      testbtn.style.color = "#8BC34A";
      colorFL = "green";
      changeTabColor();
      learnMode = 3;
  }
}

function changeTabColor() {
  if( colorFL == "green" ) {
    profilebtn.classList.add('greenbtn');
    profilebtn.classList.remove('orangebtn');
    profilebtn.classList.remove('bluebtn');
    learnbtn.classList.add('greenbtn');
    learnbtn.classList.remove('orangebtn');
    learnbtn.classList.remove('bluebtn');
  }
  if( colorFL == "orange" ) {
    profilebtn.classList.add('orangebtn');
    profilebtn.classList.remove('bluebtn');
    profilebtn.classList.remove('greenbtn');
    learnbtn.classList.add('orangebtn');
    learnbtn.classList.remove('bluebtn');
    learnbtn.classList.remove('greenbtn');
  }
  if( colorFL == "blue" ) {
    profilebtn.classList.add('bluebtn');
    profilebtn.classList.remove('orangebtn');
    profilebtn.classList.remove('greenbtn');
    learnbtn.classList.add('bluebtn');
    learnbtn.classList.remove('orangebtn');
    learnbtn.classList.remove('greenbtn');
  }
}

strtbtn.onclick = function () {
  var label = document.getElementById("learnWhatLabel");
  document.getElementById("learnport").style.display = "block";
  setTimeout( function () {
    document.getElementById("learnport").style.opacity = "1";
    document.getElementById("learnport").style.height = "100vh";
  }, 200 )
  if( colorFL == "blue" ) {
    label.innerHTML = "Vocabulary";
    document.getElementById("learnWrap").style.background = "#30ddff";
  } else if ( colorFL == "green" ) {
    label.innerHTML = "Grammer";
    document.getElementById("learnWrap").style.background = "#8BC34A";
  } else if ( colorFL == "orange" ) {
    label.innerHTML = "Reading";
    document.getElementById("learnWrap").style.background = "#FF9800";
  }
}

function closeLearnport() {
  document.getElementById("learnport").style.opacity = "0";
  document.getElementById("learnport").style.height = "0";
  setTimeout( function () {
    document.getElementById("learnport").style.display = "none";
  }, 200 )
}

profileBtn.onclick = function () {
  profileBtn.disabled = true;
  learnbtn.disabled = false;
  document.getElementById("sectorOne").style.display = "none";
  document.getElementById("askPort").style.display = "block";
}
learnbtn.onclick = function () {
  profileBtn.disabled = false;
  learnbtn.disabled = true;
  document.getElementById("sectorOne").style.display = "block";
  document.getElementById("askPort").style.display = "none";
}
