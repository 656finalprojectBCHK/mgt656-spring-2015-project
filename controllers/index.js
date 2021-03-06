'use strict';

var events = require('../models/events');


/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Team Young Frost',
    'tagline': 'You are doomed (just kidding).',
    'events': []
  };
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
  response.render('index.html', contextData);
}
function donate (request, response) {
  var now = new Date();
  var contextData = {
    'title': 'Donate',
    'tagline': 'Please donate!',
    'events': []
  };
  for(var i=0; i < events.all.length; i++){
    var event = events.all[i];
    if(event.date > now){
      contextData.events.push(event);
    }
  }
  response.render('donate.html', contextData);
}

module.exports = {
  index: index,
  donate: donate
};
