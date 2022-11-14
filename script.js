'use strict';

const mobileMenuButton = document.getElementById('open-menu-button');
const mobileSidebar = document.querySelector('#sidebar-parent');
const closeMenuButton = document.getElementById('close-menu-button');


function turnToX () {
    mobileSidebar.classList.remove('inactive')
}

function hideSidebar () {
mobileSidebar.classList.add('inactive')
}
mobileMenuButton.addEventListener('click', turnToX)
closeMenuButton.addEventListener('click', hideSidebar)
// Strategy to display sidebar -> 

// Create a new sidebar element that pops up when the menu button is pressed

// https://github.com/programmercloud/mobile-menu/blob/main/index.html

