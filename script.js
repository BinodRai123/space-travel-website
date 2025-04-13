"use strict";
var toggleButton = document.querySelector(".mobile-nav-toggle");
var navigation = document.querySelector(".primary-navigation");

function menubar(){
    function toggleAnimation(){
        const navigationToggle = document.querySelector(".primary-navigation--toggle");
        if(navigationToggle){
            toggleButton.style.backgroundImage = `url(./assets/shared/icon-close.svg)`;
            toggleButton.setAttribute("aria-expanded", true);
        }
        else {
            toggleButton.style.backgroundImage = `url(./assets/shared/icon-hamburger.svg)`;
            toggleButton.setAttribute("aria-expanded", false);
        }
    }
    
    toggleButton.addEventListener("click", () => {
        navigation.classList.toggle("primary-navigation--toggle");
        toggleAnimation();
    })
}

menubar();