// Navigation Scroll
// var theNav = document.getElementById("theNav");
// var black = document.getElementById("black-logo");
// var white = document.getElementById("white-logo");
// var menuLogo = document.getElementById("menu");

// let classesToAdd = ['scroll', 'shadow-sm', 'mb-5', 'p-3'];

// window.onscroll = function () {
//     "use strict";
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
//         theNav.classList.add(...classesToAdd);
//         white.classList.add("d-none");
//         black.classList.remove("d-none");
//         menuLogo.classList.add("jet-tx");
//     } else {
//         theNav.classList.remove(...classesToAdd);
//         white.classList.remove("d-none");
//         black.classList.add("d-none");
//         menuLogo.classList.remove("jet-tx");
//     }
// };


// Get the container element
var the_uls = document.getElementById("nav-links");

// Get all buttons with class="btn" inside the container
var btns = the_uls.getElementsByClassName("normal-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}


// Get the container element
var the_side_uls = document.getElementById("sidenav-links");

// Get all buttons with class="btn" inside the container
var btns = the_side_uls.getElementsByClassName("normal-side-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}


// Play pronunciation audio
function playAudio(url) {
    new Audio(url).play();
}


// Mobile Navigation
function openNav() {
    document.getElementById("mobilenavigation").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mobilenavigation").style.width = "0";
}


// Navigation Scroll
var theNav = document.getElementById("theNav");
var black = document.getElementById("black-logo");
var white = document.getElementById("white-logo");
var menuLogo = document.getElementById("menu");

let classesToAdd = ['scroll', 'pt-1', 'pb-1'];

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        theNav.classList.add(...classesToAdd);
        black.classList.add("d-none");
        white.classList.remove("d-none");
    } else {
        theNav.classList.remove(...classesToAdd);
        black.classList.remove("d-none");
        white.classList.add("d-none");
    }
};