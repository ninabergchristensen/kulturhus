// Sorting system on "Arrangementer"
window.onload = function() {
    document.getElementsByClassName("checkbox").checked = true;
} // Make sure all checkboxes are checked onload

// show/hide Cat1 "Sport og motion"
function showCat1() {
    var y = document.getElementsByClassName("cat1");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat2 "Fællesspisning"
function showCat2() {
    var y = document.getElementsByClassName("cat2");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat3 "Workshops"
function showCat3() {
    var y = document.getElementsByClassName("cat3");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat4 "Foredrag"
function showCat4() {
    var y = document.getElementsByClassName("cat4");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat5 "Fest og højtid"
function showCat5() {
    var y = document.getElementsByClassName("cat5");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat6 "Film"
function showCat6() {
    var y = document.getElementsByClassName("cat6");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// show/hide Cat7 "Musik og teater"
function showCat7() {
    var y = document.getElementsByClassName("cat7");
    var i;
    for (i = 0; i < y.length; i++) { // for-loop
      if (y[i].style.display === 'none')
      {y[i].style.display = 'block';}
      else {
        y[i].style.display = 'none';
    }
  }
}

// Create events and load into localStorage if empty

function createEvents() {
  console.log("Creating events.");
  // Event data going to localStorage:
  var eventOne = [0,"Title","Short description","Long description","assets/img/vroegum-loebet_01.jpg","Start date","End date","Place",false,false,1,];
  var eventTwo = [1,"Title","Short description","Long description","assets/img/vroegum-loebet_01.jpg","Start date","End date","Place",false,false,1,];

  // Loading events into array, stringifying and putting in storage:
  var eventsArray = [eventOne,eventTwo];
  var eventsArrayString = JSON.stringify(eventsArray);
  localStorage.setItem('events',eventsArrayString);

  console.log(eventsArray);

  // Proceed to loading events:
  loadEvents();
}

// Check if events are in localStorage and create them if they are not

function checkEvents() {
  localStorage.clear();
  console.log("Running checkEvents function.");
  if (localStorage.getItem('events') == undefined) {
    console.log("Events DO NOT exits in localStorage. Will run createEvent function.");
    createEvents();
  } else {
    console.log("Events exist in localStorage. Will run loadEvents function.");
    loadEvents();
  }
}

// Load events

function loadEvents() {
  console.log("Running loadEvents function.");
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);
  console.log(eventsArray);

  var eventHTML = "";
  
  for (i = 0; i < eventsArray.length; i++  ) {
    console.log(i);
    // Adding items to document:
    eventHTML += '<div>Hej</div>'
  }
  document.getElementById("eventholder").innerHTML = eventHTML;
}
