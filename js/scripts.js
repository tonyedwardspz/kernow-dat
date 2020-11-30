/* jshint latedef:nofunc */

var app = {
  container: 0,
  containerWidth: 0,
  triggerHeight: 0,
  h3Project: 0,
  h3Location: null,
  h3Supporter: 0,
  h3Newsletter: 0,
  h3Speakers: 0,
  h3Sponsors: 0,
  h3Demos: 0,
  h3Talk: 0,
  h3Tickets: 0,
  h3Conduct: 0,
  h3Credit: 0,
  lastScroll: 0,
  scrollingDown: null
};

(function() {
  setupApp();
  setScrollDirection();
  enlargeH3Underlines();
  setYear();
  // fixSpeakerHeight();
})();

function setScrollDirection() {
  window.addEventListener('scroll', function(){
    var curPos = window.pageYOffset || document.body.scrollTop;

    app.scrollingDown = curPos > app.lastScroll ? true : false;
    app.lastScroll = curPos;
  });
}

function enlargeH3Underlines() {
  window.addEventListener('scroll', function(){
    // var locationDistanceToTop = app.h3Location.getBoundingClientRect().top;
    // if (locationDistanceToTop <= app.triggerHeight && locationDistanceToTop > 0){
    //   app.h3Location.classList.add('animated-h3-border');
    // }

    var supportersDistanceToTop = app.h3Supporter.getBoundingClientRect().top;
    if (supportersDistanceToTop <= app.triggerHeight && supportersDistanceToTop > 0){
      app.h3Supporter.classList.add('animated-h3-border');
    }

    var newsletterDistanceToTop = app.h3Newsletter.getBoundingClientRect().top;
    if (newsletterDistanceToTop <= app.triggerHeight && newsletterDistanceToTop > 0){
      app.h3Newsletter.classList.add('animated-h3-border');
    }

    var speakersDistanceToTop = app.h3Speakers.getBoundingClientRect().top;
    if (speakersDistanceToTop <= app.triggerHeight && speakersDistanceToTop > 0){
      app.h3Speakers.classList.add('animated-h3-border');
    }

    var projectDistanceToTop = app.h3Project.getBoundingClientRect().top;
    if (projectDistanceToTop <= app.triggerHeight && projectDistanceToTop > 0){
      app.h3Project.classList.add('animated-h3-border');
    }

    var talkDistanceToTop = app.h3Talk.getBoundingClientRect().top;
    if (talkDistanceToTop <= app.triggerHeight && talkDistanceToTop > 0){
      app.h3Talk.classList.add('animated-h3-border');
    }

    var ticketsDistanceToTop = app.h3Tickets.getBoundingClientRect().top;
    if (ticketsDistanceToTop <= app.triggerHeight && ticketsDistanceToTop > 0){
      app.h3Tickets.classList.add('animated-h3-border');
    }

    // var sponsorsDistanceToTop = app.h3Sponsors.getBoundingClientRect().top;
    // if (sponsorsDistanceToTop <= app.triggerHeight && sponsorsDistanceToTop > 0){
    //   app.h3Sponsors.classList.add('animated-h3-border');
    // }

    var conductDistanceToTop = app.h3Conduct.getBoundingClientRect().top;
    if (conductDistanceToTop <= app.triggerHeight && conductDistanceToTop > 0){
      app.h3Conduct.classList.add('animated-h3-border');
    }

    var formatDistanceToTop = app.h3Format.getBoundingClientRect().top;
    if (formatDistanceToTop <= app.triggerHeight && formatDistanceToTop > 0){
      app.h3Format.classList.add('animated-h3-border');
    }
  });
}

function setupApp() {
  // Store reference to reused items
  app.container = document.getElementsByClassName('container')[0];
  // app.h3Location = document.getElementById('location');
  app.h3Supporter = document.getElementById('supporter');
  app.h3Newsletter = document.getElementById('newsletter');
  app.h3Speakers = document.getElementById('speakers');
  app.h3Project = document.getElementById('project');
  app.h3Talk = document.getElementById('talk');
  app.h3Tickets = document.getElementById('tickets');
  // app.h3Sponsors = document.getElementById('sponsors');
  app.h3Conduct = document.getElementById('conduct');
  app.h3Format = document.getElementById('format');

  // Calculate the distance from top that h3 effects should trigger
  app.lastScroll = window.pageYOffset || document.body.scrollTop;
  app.triggerHeight = Math.floor(window.innerHeight - ((window.innerHeight / 100) * 10));
}

function setYear() {
  var currentYear = (new Date()).getFullYear();
  var displayedYearContainer = document.getElementById('current-year');
  var displayedYear = displayedYearContainer.innerHTML;

  if (currentYear > displayedYear){
    displayedYearContainer.innerHTML = currentYear;
  }
}

// function fixSpeakerHeight() {
//   var matches = document.getElementsByClassName('speaker-blurb');
//   var maxHeight = matches[0].clientHeight;
  
//   for(var i = 1; i < matches.length; i++) {
//     if (matches[i].clientHeight > maxHeight) {
//       maxHeight = matches[i].clientHeight;
//     }
//   }

//   for(var j = 0; j < matches.length; j++) {
//     matches[j].style.height = maxHeight + 'px';
//   }
// }
