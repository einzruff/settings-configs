// ==UserScript==
// @name        Trello card progress
// @namespace   trello
// @author      Tuomas Kinnunen
// @description Add a thin progress bar to trello cards that have a checklist
// @include     https://trello.com/b/*
// @version     1
// @grant       none
// ==/UserScript==
window.addEventListener ("load", Greasemonkey_main, false);
function Greasemonkey_main () {
  var cards = document.getElementsByClassName('list-card-details');
  var i = 0;
  for (i; i < cards.length; i++) {
    var checklistBadges = cards[i].getElementsByClassName('icon-checklist');
    if (checklistBadges.length > 0) {
      if (checklistBadges[0].parentNode.childNodes.length > 0) {
        var listCompletion = checklistBadges[0].parentNode.childNodes[1].innerHTML.split('/');
        var progress = 100*listCompletion[0]/listCompletion[1];
        if (progress == 100) return;
        var container = document.createElement('div');
        container.setAttribute('class', 'checklist-progress-bar');
        var pbar = document.createElement('span');
        //pbar.setAttribute('class', 'card-progressbar');
        //pbar.setAttribute('value', listCompletion[0]);
        //pbar.setAttribute('max', listCompletion[1]);
        //pbar.setAttribute('style', 'width: 95%; height: 10px; background: green;');
        pbar.setAttribute('class', 'checklist-progress-bar-current js-checklist-progress-bar');
        pbar.setAttribute('style', 'width: '+progress+'%; background:#61BD4F;');
        container.setAttribute('style', 'margin:0; height: 6px; background: #FFF6F6;');
        container.appendChild(pbar);
        cards[i].insertBefore(container, cards[i].childNodes[2]);
      }
    }
  }
}
