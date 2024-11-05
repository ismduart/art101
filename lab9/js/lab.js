/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Bella Duarte
   Date: 4 November 2024
*/


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
// add a click listener to the challenge button
$("#button-challenge").click(function(){
    $(this).parent().toggleClass("special");

});

// i used two different methods of implementing the buttons

// add button to problem section
$("#problems").append("<button id='button-problems'>Make Special</button>");
// add a click listener to the problem button
$("#button-problems").click(function(){
$("#problems").toggleClass("special");
});

// add button to results section
$("#results").append("<button id='button-results'>Make Special</button>");
// add a click listener to the results button
$("#button-results").click(function(){
$("#results").toggleClass("special");
});

