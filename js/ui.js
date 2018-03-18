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
var shuttermode = "opened";
var shutterbtn = document.getElementById("shutterbtn");

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
shutterbtn.onclick = function () {
  if( shuttermode == "opened" ) {
    document.getElementById("closedProfCont").style.display = "block";
    document.getElementById("openedProfCont").style.display = "none";
    document.getElementById("ocContMode").src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjg0LjkyOSAyODQuOTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOTI5IDI4NC45Mjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjgyLjA4Miw3Ni41MTFsLTE0LjI3NC0xNC4yNzNjLTEuOTAyLTEuOTA2LTQuMDkzLTIuODU2LTYuNTctMi44NTZjLTIuNDcxLDAtNC42NjEsMC45NS02LjU2MywyLjg1NkwxNDIuNDY2LDE3NC40NDEgICBMMzAuMjYyLDYyLjI0MWMtMS45MDMtMS45MDYtNC4wOTMtMi44NTYtNi41NjctMi44NTZjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1NkwyLjg1Niw3Ni41MTVDMC45NSw3OC40MTcsMCw4MC42MDcsMCw4My4wODIgICBjMCwyLjQ3MywwLjk1Myw0LjY2MywyLjg1Niw2LjU2NWwxMzMuMDQzLDEzMy4wNDZjMS45MDIsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTRzNC42NjEtMC45NTEsNi41NjItMi44NTRMMjgyLjA4Miw4OS42NDcgICBjMS45MDItMS45MDMsMi44NDctNC4wOTMsMi44NDctNi41NjVDMjg0LjkyOSw4MC42MDcsMjgzLjk4NCw3OC40MTcsMjgyLjA4Miw3Ni41MTF6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
    shuttermode = "closed";
  } else {
    document.getElementById("closedProfCont").style.display = "none";
    document.getElementById("openedProfCont").style.display = "block";
    document.getElementById("ocContMode").src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI4NC45MjkgMjg0LjkyOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkyOSAyODQuOTI5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Mi4wODIsMTk1LjI4NUwxNDkuMDI4LDYyLjI0Yy0xLjkwMS0xLjkwMy00LjA4OC0yLjg1Ni02LjU2Mi0yLjg1NnMtNC42NjUsMC45NTMtNi41NjcsMi44NTZMMi44NTYsMTk1LjI4NSAgIEMwLjk1LDE5Ny4xOTEsMCwxOTkuMzc4LDAsMjAxLjg1M2MwLDIuNDc0LDAuOTUzLDQuNjY0LDIuODU2LDYuNTY2bDE0LjI3MiwxNC4yNzFjMS45MDMsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTQgICBjMi40NzQsMCw0LjY2NC0wLjk1MSw2LjU2Ny0yLjg1NGwxMTIuMjA0LTExMi4yMDJsMTEyLjIwOCwxMTIuMjA5YzEuOTAyLDEuOTAzLDQuMDkzLDIuODQ4LDYuNTYzLDIuODQ4ICAgYzIuNDc4LDAsNC42NjgtMC45NTEsNi41Ny0yLjg0OGwxNC4yNzQtMTQuMjc3YzEuOTAyLTEuOTAyLDIuODQ3LTQuMDkzLDIuODQ3LTYuNTY2ICAgQzI4NC45MjksMTk5LjM3OCwyODMuOTg0LDE5Ny4xODgsMjgyLjA4MiwxOTUuMjg1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=";
    shuttermode = "opened";
  }
}
