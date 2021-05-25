"use strict";
var theStage, getDrop, getSize;

function changeFrame() {
    var time = setInterval(start, 250);
}

function start() {
    var frames = theStage.value.split("=====\n");
    var i = 0, l = frames.length;
    (function iterator() {
        theStage.value = frames[i];

        if (++i < l) {
            setTimeout(iterator, 250);
        }
    })();
};

function stop(time) {

}


function getFrames() {
    var dropSel = getDrop.options[getDrop.selectedIndex].innerHTML;
    theStage.value = ANIMATIONS[dropSel];

}

function setSize() {

    var fontsize = getSize.options[getSize.selectedIndex].value;
    theStage.style.fontSize = fontsize;

}

window.onload = function () {
    theStage = document.getElementById("textstage");
    getDrop = document.getElementById("dropdown");
    getSize = document.getElementById("dropspeed");
}