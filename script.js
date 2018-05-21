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
  var event1 = [0,'Info-aften om det nye Kulturhus ved Filsø','short desc','long desc','assets/img/gl.skole.jpg','Start date','End date','Skovsalen',false,false,5,];
  var event2 = [1,'Hus og have-dag: Værkstedet','Vær med til at forvandle Vrøgum Gl. Skole til et skønt samlingssted for dig og dine naboer.','<p>Udviklingsudvalget i Vrøgum Borger- og Idrætsforening søger kvikke, hjælpende hænder til lettere istandsættelse og opfriskning af det nye Kulturhus ved Filsø &ndash; de dejlige bygninger, vi I dag kender som Vrøgum Gl. Skole.</p><p>Programmet for dagen er som følger:</p><ul><li>Kl. 8.30 i gymnastiksalen præsenterer vi vores vision og den praktiske plan for det nye Kulturhus ved Filsø.</li><li>Herefter fordeles alle frivillige hjælpere på de opgaver, der skal klares</p><p>Alle frivillige hjælpere får mad og forplejning dagen igennem. Vi serverer rundstykker med syltetøj og pålæg kl. 9.00 og æggekage med stegt flæsk og rugbrøg kl. 13.00. Dagen igennem er der fri vand og kaffe til de arbejdende.</p><p>Tusind tak for støtte og opbakning til dette spændende nye Kulturhus-projekt, der skal sikre at Vrøgum også i fremtiden forbliver Danmarks hyggeligste landsby.</p>','assets/img/kulturhuset-filsoe_hus-have-dag-02.jpg','Start date','End date','Kulturhuset',false,false,3,];
  var event3 = [2,'Hus og have-dag: Forhaven','Vær med til at forvandle Vrøgum Gl. Skole til et skønt samlingssted for dig og dine naboer.','<p>Udviklingsudvalget i Vrøgum Borger- og Idrætsforening søger kvikke, hjælpende hænder til lettere istandsættelse og opfriskning af det nye Kulturhus ved Filsø &ndash; de dejlige bygninger, vi I dag kender som Vrøgum Gl. Skole.</p><p>Programmet for dagen er som følger:</p><ul><li>Kl. 8.30 i gymnastiksalen præsenterer vi vores vision og den praktiske plan for det nye Kulturhus ved Filsø.</li><li>Herefter fordeles alle frivillige hjælpere på de opgaver, der skal klares</p><p>Alle frivillige hjælpere får mad og forplejning dagen igennem. Vi serverer rundstykker med syltetøj og pålæg kl. 9.00 og æggekage med stegt flæsk og rugbrøg kl. 13.00. Dagen igennem er der fri vand og kaffe til de arbejdende.</p><p>Tusind tak for støtte og opbakning til dette spændende nye Kulturhus-projekt, der skal sikre at Vrøgum også i fremtiden forbliver Danmarks hyggeligste landsby.</p>','assets/img/kulturhuset-filsoe_hus-have-dag-01.jpg','Start date','End date','Kulturhuset',false,false,3,];
  var event4 = [3,'Åbnings-bazar i det nye Kulturhus','Du inviteres hermed til åbningen af det nye Kulturhus ved Filsø. Vi fejrer dagen med en skøn udendørs bazar og en spændende konkurrence!','<p> med madboder,, kaffe på kanden, udendørsspil </p>','assets/img/kulturhuset-filsoe_aabnings-bazar.jpg','Start date','End date','Ballonparken',false,false,5,];
  var event5 = [4,'Kage-konkurrence','Udover ugentlig fællesspisning, er der også en kagekonkurrence! Så find din allerbedste opskrift frem og vis Vrøgum hvem der kan kokkerere det bedste tilbehør til kaffen!','<p>Som del af fællesspisningen, kan du også vise om du er Vrøgums bedste bager, når der bliver afholdt kagekonkurrence efter maden! Medbring dit bedste kaffe og kage-sæt, og se om du kan trække sejren i land om bedste dessert!</p>','assets/img/kulturhuset-filsoe_faellesspisning-kage.jpg','Start date','End date','Skovsalen',false,false,2,0,0];
  var event6 = [5,'Vrøgum Løbet 2018','Vær en del af hyggen og deltag i Vrøgum Løbet! Der er plads til alle lige fra børn til ældre. Tag dine børn, ven eller forældre under armen, og gå eller løb den hyggelige rute!','<p>Der er fire forskellige ruter og distancer man kan vælge imellem.</p><ul><li>Den korte på 4,1 km</li><li>Den der giver lidt ekstra sved på panden på 10 km.</li><li>Den lange på 21 km (halvmaraton)</li><li>Den for de helt seje, “Ultra Militær”, som er på 13 km med forhindringsbane!</li></ul><p>Efter løbet vil der fest for alle deltager, hvor der vil være drikkevarer, mad og levende musik! Så skynd dig at sikre dig en plads til løbet, så du kan være en del af hyggen!</p>','assets/img/vroegum-loebet_01.jpg','Start date','End date','Ballonparken',false,true,1,0,0];
  var event7 = [6,'Pilates','Skal du have gang i kroppen og styr på formen? Så deltag i pilates, hvor vi i fællesskab laver en masse øvelser og træner sammen for et bedre helbred.','<p>Få ekstra sved på panden, når vi laver pilates hver anden torsdag kl. 16.30 - 17.30. Det giver dig fornyet energi til din hverdag og du kommer hurtigt i form! Du bliver hurtig smidig og stærk, og det eneste du skal medbringe er godt humør og et håndklæde til at tørre sved af panden.</p><p>Tilmelding er ikke bindende og gratis for alle medlemmer.</p>','assets/img/kulturhuset-filsoe_pilates-01.jpg','Start date','End date','Ballonparken eller Gymnastiksalen (efter vejret)',true,false,1,0,30];
  var event8 = [7,'Fællesspisning i Ballonparken','Kom og vær en del af hyggen når vi spiser sammen og deler med hinanden!','<p>Vær en del af fællesskabet, når vi holder fællesspisning! Vi gør det hver anden mandag kl. 18-20 (lige uger), hvor alle hver især medbringer en ret. Der vil blive sat en buffet op, hvor alle kan stille deres lækre retter. Der vil være rigeligt med siddepladser, så tag din familie under armen og deltag i hyggen.</p><p>Som medlem skal du ikke tænke på drikkevarer, da der vil blive sørget for vand/saft under maden og kaffe efter maden.</p>','assets/img/kulturhuset-filsoe_faellesspisning-ballonparken.jpg','Start date','End date','Ballonparken',false,false,2,0,0];
  var event9 = [8,'Metal-værksted','Har du noget, der skal svejses eller en bil som skal sættes i stand? Så kom ud til vores værksted og få en hånd, eller gør brug af det værktøj vi stiller til rådighed.','<p>Gør brug af en af vores mange faciliteter, som dette metal-værksted. Der vil være workshops hver anden onsdag i ulige uger, hvor du kan få et certifikat til brugen af de store og tunge maskiner. Værkstedet vil være åbent indenfor Kulturhusets åbningstider til fri afbenyttelse, hvis du er medlem. De tunge maskiner må dog kun bruges af medlemmer over 18 år med certifikat af maskinen eller hvis du har erfaring med det i forvejen</p>','assets/img/kulturhuset-filsoe_metal-vaerksted.jpg','Start date','End date','Værkstedet',false,true,3,0,0];
  var event10 = [9,'Film under åben himmel','Tag familien i hånden og pak en picnickurv med snacks! Der bliver vist film på Friluftsscenen for hele familien','<p>Aftenenes film er “Far til Fire” og “Olsenbanden”. Der vil være mulighed for at købe kaffe og sodavand, men tæpper skal man selv medbringe. Vi håber på godt vejr, men hvis vejrguderne er imod os trækker vi ind i gymnastiksalen. Kom glad og nyd en film under åben himmel!</p>','assets/img/kulturhuset-filsoe_friluftsscenen-biograf.jpg','Start date','End date','Friluftsscenen',false,false,6,0,0];
  var event11 = [10,'Billedkunst','Har du en kunstner gemt i dig? Så kom og lær, hvordan du udfolder din kreativitet på et lærred.','<p>Vores lokale kunstner Lise Thilde kommer på besøg og vil lære fra sig om alskens teknikker. Du får lov til at blive guidet af en rigtig kunstner fra start til slut og du må såmænd tage dit mesterværk med hjem! Workshoppen er for alle aldre, men mest beregnet til større børn og voksne. Tilmelding mindst en uge før er påkrævet.</p><p>Betaling dækker materialer (lærred, maling, etc.).</p>','assets/img/kulturhuset-filsoe_billedkunst.jpg','Start date','End date','Værkstedet',false,false,3,30,100];
  var event12 = [11,'Juletræsfest','Vær med til hyggen, når vi danser om juletræet og synger julesange!','<p>Deltag til den årlige juletræsfest, når vi slår op for det fineste juletræ, hvor I kan være med til at pynte det og lave guirlander. Det bliver en fest, med julehygge, juledans og julesange, og der er plads til alle! Juletræsfesten bliver afholdt i gymnastiksalen, hvor der er kaffe og kage, og fællessang! Julemanden kommer også forbi, og overrasker børnene med julegodter. Husk tilmelding, så vi ved hvor mange børn, skal have godteposer.</p>','assets/img/kulturhuset-filsoe_juletraesfest.jpg','Start date','End date','Skovsalen',false,false,5,0,0];
  var event13 = [12,'Nytårsbrunch','Short description','Long description','assets/img/kulturhuset-filsoe_nytaars-brunch-2019.jpg','Start date','End date','Place',false,false,5,0,0];
  var event14 = [13,'Fastelavn','Hvem elsker ikke at klæde sig ud og slå katten af tønden og blive kåret som årets katte-dronning/konge?','<p>Kom indenfor, når vi klæder os ud, spiser slik og slår katten af tønden! Styrk dit og dine børns fællesskab i nabolaget og kom til fastelavn i gymnastiksalen, hvor der vil blive afholdt konkurrencer! Man kan komme afsted med tre priser:</p><ul><li>Bedst udklædte person</li><li>Bedst udklædte familie</li><li>Katte-dronning/konge</li></ul><p>Slå dig løs, og vis din indre Spiderman eller prinsesse, når du ankommer til den årlige fastelavnsfest! Udover dette, vil du kunne købe drikkevarer og popcorn til rimelige priser.</p>','assets/img/kulturhuset-filsoe_fastelavn.jpg','Start date','End date','Skovsalen',false,false,5,0,0];

  // Loading events into array, stringifying and putting in storage:
  var eventsArray = [event1,event2,event3,event4,event5,event6,event7,event8,event9,event10,event11,event12,event13,event14];
  var eventsArrayString = JSON.stringify(eventsArray);
  localStorage.setItem('events',eventsArrayString);

  console.log(eventsArray);

  // Proceed to loading events:
  loadEvents();
}

// Check if events are in localStorage and create them if they are not

function checkEvents(number) {
  console.log("Running checkEvents function.");
  if (localStorage.getItem('events') == undefined) {
    console.log("Events DO NOT exist in localStorage. Will run createEvent function.");
    createEvents();
  } else {
    console.log("Events exist in localStorage. Will run loadEvents function.");
    loadEvents(number);
  }
}

// Load events

function loadEvents(number) {
  console.log("Running loadEvents function."+number);
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);
  //console.log(eventsArray);
  var numberOfEvents = number;
  console.log(numberOfEvents);
  if (numberOfEvents > eventsArray.length || numberOfEvents == undefined)  {
    numberOfEvents = eventsArray.length;
  }
  console.log(numberOfEvents);
  var eventHTML = "";

  for (i = 0; i < numberOfEvents; i++ ) {
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

    // Check for Going and Faves for button class status
    var goingButtonClass;
    var goingButtonText;
    var favButtonClass;
    
    if (eventGoing == false) {
      var goingButtonClass = "red_button";
      var goingButtonText = "Tilmeld";
    } else if (eventGoing == true) {
      var goingButtonClass = "going_button";
      var goingButtonText = "Tilmeldt";
    }

    if (eventFav == false) {
      var favButtonClass = "none";
    } else if (eventFav == true) {
      var favButtonClass = "fav_button";
    }
    console.log(eventTitle + " going: " + eventGoing);
    // Adding items to document:
    eventHTML += '<div class="cat'+eventCatInt+'"><a href="visarrangement.html" data-id="'+eventId+'" onclick="setCurrentEvent('+eventId+')"><img src="'+eventPhoto+'"><div class="eventdate"><h4>'+eventStartDate+'</h4><p>'+eventStartDate+'</p></div></a><div class="buttonholder"><a data-id="'+eventId+'" onclick="favThis('+eventId+')"><button id="favButton'+eventId+'" class="'+favButtonClass+'">Interesseret</button></a><a data-id="'+eventId+'" onclick="goingTo('+eventId+')"><button id="goingButton'+eventId+'" class="'+goingButtonClass+'">'+goingButtonText+'</button></a></div><h3>'+eventTitle+'</h3><p class="eventcat">'+eventCat+'</p><p>'+eventShortDesc+' <a href="visarrangement.html" data-id="'+eventId+'">Læs mere</a></p></div>';
  }
  document.getElementById("eventholder").innerHTML = eventHTML;
  showGoingandFavs();
}

// Set Going and Fav events for modal

function showGoingandFavs() {
  console.log("Running showGoingandFavs function.");
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);

  var goingHTML = "";
  var favHTML = "";
  //console.log(eventsArray);
  for (i = 0; i < eventsArray.length; i++) {
    // Checking for "going" and "favorites" (true/false)
    //console.log(eventsArray[i][8]);
    if (eventsArray[i][8] == true ) {
      console.log('Checking for Going');
      goingHTML += '<li><a onclick="setCurrentEvent('+eventsArray[i][0]+')"href="visarrangement.html">'+eventsArray[i][1]+' &ndash; '+eventsArray[i][5]+'</a></li><a href="#modalbox" class="removeFromMyEvents" onclick="goingTo('+i+')">&times</a>';
    }
    if (eventsArray[i][9] == true ) {
      console.log('Checking for Favorite');
      favHTML += '<li><a onclick="setCurrentEvent('+eventsArray[i][0]+')"href="visarrangement.html">'+eventsArray[i][1]+' &ndash; '+eventsArray[i][5]+'</a></li><a href="#modalbox" class="removeFromMyEvents" onclick="favThis('+i+')">&times</a>';
    }
  }
  if (goingHTML == "") {
    console.log('No Going');
    goingHTML = '<p>Du er ikke tilmeldt nogen kommende arrangementer.</p>';
    document.getElementById("goingholder").innerHTML = goingHTML;
  }
  if (favHTML == "") {
      console.log('No Favorite');
      favHTML = '<p>Du har ikke vist interesse for nogen kommende arrangementer.</p>';
      document.getElementById("favholder").innerHTML = favHTML;
  }
  console.log(goingHTML);
  console.log(favHTML);
  if (goingHTML != "") {
    document.getElementById("goingholder").innerHTML = goingHTML;
    }
  if (favHTML != "") {
    document.getElementById("favholder").innerHTML = favHTML;
  }
}

// Set current event id

function setCurrentEvent(id) {
  var currentEventId = JSON.stringify(id);
  console.log(currentEventId);
  localStorage.setItem('currentEventId', currentEventId);
}

// Show current event

function showCurrentEvent() {
  var currentEventIdString = localStorage.getItem('currentEventId');
  var currentEventId = JSON.parse(currentEventIdString);
  // Use 1st event in localStorage If there is no current event defined
  if (currentEventId == null) {
    currentEventId = 0;
  }
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);
  console.log(eventsArray[currentEventId][1]);
  
  // Assigning all event data into variables
  var eventId = eventsArray[currentEventId][0]
  var eventTitle = eventsArray[currentEventId][1];
  var eventShortDesc = eventsArray[currentEventId][2];
  var eventLongDesc = eventsArray[currentEventId][3];
  var eventPhoto = eventsArray[currentEventId][4];
  var eventStartDate = eventsArray[currentEventId][5];
  var eventEndDate = eventsArray[currentEventId][6];
  var eventPlace = eventsArray[currentEventId][7];
  var eventGoing = eventsArray[currentEventId][8];
  var eventFav = eventsArray[currentEventId][9];
  var eventCatInt = eventsArray[currentEventId][10];
  var eventMemPrice = eventsArray[currentEventId][11];
  var eventPrice = eventsArray[currentEventId][12];

  // Converting category number to appropriate string:
  var eventCat = "";
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

  // Filling infobox with event data
  var infobox = '<table><tr><td><p>Starter</p></td><td><p>'+eventStartDate+'</p></td></tr><tr><td><p>Slutter</p></td><td><p>'+eventEndDate+'</p></td></tr><tr><td><p>Sted</p></td><td><p>'+eventPlace+'</p></td></tr><tr><td><p>Pris</p></td><td><p>Normalpris '+eventPrice+' DKR.</p><p>Medlemspris '+eventMemPrice+' DKR.</p></td></tr></table>';

  // Posting data to the document
  document.getElementById('favButton').id = "favButton" + eventId;
  document.getElementById('goingButton').id = "goingButton" + eventId;
  document.getElementById('favlink').setAttribute( "onClick", "favThis("+eventId+")" );
  document.getElementById('goinglink').setAttribute( "onClick", "goingTo("+eventId+")" );
  document.getElementById('eventtitle').innerHTML = eventTitle;
  document.getElementById('shortdesc').innerHTML = eventShortDesc;
  document.getElementById('shortdesc').setAttribute( "alt", ""+shortdesc);
  document.getElementById('longdesc').innerHTML = eventLongDesc;
  document.getElementById('eventphoto').src = eventPhoto;
  document.getElementById('infobox').innerHTML = infobox;
  //document.getElementById('').innerHTML = eventGoing;
  //document.getElementById('').innerHTML = eventFav;
  document.getElementById('eventcat').innerHTML = eventCat;
}

// Going

function goingTo(id) {
  // Get event data:
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);

  // Set changes to event data:
  console.log(id + "is it false? " + eventsArray[id][8]);
  if (eventsArray[id][8] == false) {
    eventsArray[id][8] = true;
    console.log("false to true " + eventsArray[id][8]);
    document.getElementById("goingButton"+id).className = "going_button";
    document.getElementById("goingButton"+id).innerHTML = "Tilmeldt";
    var newEventsString = JSON.stringify(eventsArray);
    localStorage.setItem('events',newEventsString);
  } else if (eventsArray[id][8] == true) {
    console.log("true to false");
    eventsArray[id][8] = false;
    document.getElementById("goingButton"+id).className = "red_button";
    document.getElementById("goingButton"+id).innerHTML = "Tilmeld";
    var newEventsString = JSON.stringify(eventsArray);
    localStorage.setItem('events',newEventsString);
  }
  showGoingandFavs();
}

// Favorite

function favThis(id) {
  // Get event data:
  var eventsString = localStorage.getItem('events');
  var eventsArray = [];
  eventsArray = JSON.parse(eventsString);

  // Set changes to event data:
  console.log(id);
  if (eventsArray[id][9] == false) {
    console.log("false to true");
    eventsArray[id][9] = true;
    document.getElementById("favButton"+id).className = "fav_button";
    var newEventsString = JSON.stringify(eventsArray);
    localStorage.setItem('events',newEventsString);
  } else if (eventsArray[id][9] == true) {
    console.log("true to false");
    eventsArray[id][9] = false;
    document.getElementById("favButton"+id).className = "none";
    var newEventsString = JSON.stringify(eventsArray);
    localStorage.setItem('events',newEventsString);
  }
  showGoingandFavs();
}

function clearStorage() {
  localStorage.clear();
  checkEvents();
}
