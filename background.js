'use strict';

chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.create({'url': 'bibi/bib/i/index.html'});
});
