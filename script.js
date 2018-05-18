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
  var event1 = [0,'Vrøgum Løbet 2018','Vær en del af hyggen og deltag i Vrøgum Løbet! Der er plads til alle lige fra børn til ældre. Tag dine børn, ven eller forældre under armen, og gå eller løb den hyggelige rute!','<p>Der er fire forskellige ruter og distancer man kan vælge imellem.</p><ul><li>Den korte på 4,1 km</li><li>Den der giver lidt ekstra sved på panden på 10 km.</li><li>Den lange på 21 km (halvmaraton)</li><li>Den for de helt seje, “Ultra Militær”, som er på 13 km med forhindringsbane!</li></ul><p>Efter løbet vil der fest for alle deltager, hvor der vil være drikkevarer, mad og levende musik! Så skynd dig at sikre dig en plads til løbet, så du kan være en del af hyggen!</p>','assets/img/vroegum-loebet_01.jpg','Start date','End date','Ballonparken',true,false,1,];
  var event2 = [1,'Pilates','Skal du have gang i kroppen og ha’ styr på formen? Så deltag til pilates, hvor vi i fællesskab laver en masse øvelser, og træner sammen for et bedre helbred!','<p>Få ekstra sved på panden, når vi laver pilates hver torsdag kl. 16.30-17.30. Det giver dig fornyet energi til din hverdag og du kommer hurtigt i form! Du bliver hurtig smidig og stærk, og det eneste du skal medbringe er godt humør og et håndklæde til at tørre sved af panden (og andre steder!)</p><p>Tilmelding er ikke bindende, og gratis for alle medlemmer.</p>','assets/img/vroegum-byfest_01.jpg','Start date','End date','Ballonparken',true,true,1,];
  var event3 = [2,'Fællesspisning 10. Juni','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,2,];
  var event4 = [3,'Kage-konkurrence','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,2,];
  var event5 = [4,'Metal','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,3,];
  var event6 = [5,'Billedkunst','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,3,];
  var event7 = [6,'Søren Ryge: Alt om haven','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,4,];
  var event8 = [7,'Fastelavn','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,5,];
  var event9 = [8,'Juletræsfest','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,5,];
  var event10 = [9,'Nytårsbrunch','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,5,];
  var event11 = [10,'Title','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,6,];
  var event12 = [11,'Title','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,6,];
  var event13 = [12,'Title','Short description','Long description','assets/img/vroegum-loebet_01.jpg','Start date','End date','Place',false,false,7,];
  var event14 = [13,'Title','Short description','Long description','assets/img/vroegum-byfest_01.jpg','Start date','End date','Place',false,false,7,];

  // Loading events into array, stringifying and putting in storage:
  var eventsArray = [event1,event2,event3,event4,event5,event6,event7,event8,event9,event10,event11,event12,event13,event14];
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
  //console.log(eventsArray);

  var eventHTML = "";

  for (i = 0; i < eventsArray.length; i++  ) {
    //console.log(i);
    var eventId = eventsArray[i][0];
    var eventTitle = eventsArray[i][1];
    var eventShortDesc = eventsArray[i][2];
    var eventLongDesc = eventsArray[i][3];
    var eventPhoto = eventsArray[i][4];
    var eventStartDate = eventsArray[i][5];
    var eventEndDate = eventsArray[i][6];
    var eventPlace = eventsArray[i][7];
    var eventGoing = eventsArray[i][8];
    var eventFav = eventsArray[i][9];
    var eventCatInt = eventsArray[i][10];
    var eventCat;

    // Converting category number to appropriate string:
    switch (eventCatInt) {
      case 1:
        eventCat = "Sport og motion";
        break;
      case 2:
        eventCat = "Fællesspisning";
        break;
      case 3:
        eventCat = "Workshop";
        break;
      case 4:
        eventCat = "Foredrag";
        break;
      case 5:
        eventCat = "Fest og højtid";
        break;
      case 6:
        eventCat = "Film";
        break;
      case 7:
        eventCat = "Musik og teater";
        break;
    }

    // Adding items to document:
    eventHTML += '<div class="cat'+eventCatInt+'"><a href="visarrangement.html" data-id="'+eventId+'"><img src="'+eventPhoto+'"><div class="eventdate"><h4>'+eventStartDate+'</h4><p>'+eventStartDate+'</p></div></a><div class="buttonholder"><a href="#" data-id="'+eventId+'"><button>Interesseret</button></a><a href="#" data-id="'+eventId+'"><button class="red_button">Tilmeld</button></a></div><h3>'+eventTitle+'</h3><p class="eventcat">'+eventCat+'</p><p>'+eventShortDesc+' <a href="visarrangement.html" data-id="'+eventId+'">Læs mere</a></p></div>';
  }
  document.getElementById("eventholder").innerHTML = eventHTML;
  showGoingandFavs();
}

// Set current event id

function setCurrentEvent(id) {
  var currentEventId = id;
}

function showGoingandFavs() {
  console.log("Running showGoingandFavs function.");
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);

  var goingHTML = "<li><p>Du er ikke tilmeldt nogen kommende arrangementer.</p></li>";
  var favHTML = "<li><p>Du har ikke vist interesse for nogen kommende arrangementer.</p></li>";
  console.log(eventsArray);
  for (i = 0; i < eventsArray.length; i++) {
    // Checking for "going" and "favorites" (true/false)
    console.log(eventsArray[i][8]);
    if (eventsArray[i][8] == true ) {
      console.log('Checking for Going');
      goingHTML += '<li><a onclick="setCurrentEvent('+eventsArray[i][0]+')"href="visarrangement.html">'+eventsArray[i][1]+' &ndash; '+eventsArray[i][5]+'</a></li>'
    }
    if (eventsArray[i][9] == true ) {
      console.log('Checking for Favorite');
      favHTML += '<li><a onclick="setCurrentEvent('+eventsArray[i][0]+')"href="visarrangement.html">'+eventsArray[i][1]+' &ndash; '+eventsArray[i][5]+'</a></li>'
    }
  }
  if (goingHTML == "") {
    console.log('No Going');
    goingHTML = '<li><p>Du er ikke tilmeldt nogen kommende arrangementer.</p></li>';
  }
  if (favHTML == "") {
      console.log('No Favorite');
      favHTML = '<li><p>Du har ikke vist interesse for nogen kommende arrangementer.</p></li>';
  }
  console.log(goingHTML);
  console.log(favHTML);
  document.getElementById("goingholder").innerHTML = goingHTML;
  document.getElementById("favholder").innerHTML = favHTML;
}
