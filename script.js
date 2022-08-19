var colours = ["green", "blue", "purple", "cyan", "white", "yellow", "orange", "darkGreen", "black", "lightGreen", "darkBlue", "grey", "red", "pink", "violet", "amazon", "amber", "ruby", "lightblue", "salmon"];

var boo_counter = false;

$(document).ready(function() {
  $("label").click(function () {
    var ran_index = Math.floor(Math.random() * (19 - 1)) + 1;
    $("body").css("background-color", colours[ran_index]);

    }) 
})
