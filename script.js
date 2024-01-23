//Use JQuery to capture the pertinent HTML elements that will be affected by the code.
var timeDisplayEl = $("#currentDay"); //Capture the p element with the id of "currentDay".
var mainContainer = $(".container"); //Capture the div element with the class of "container".
var header = $("header"); //Capture the whole header element.
var body = $("body") //Capture the whole body element.

//Function to display the updated time.
function displayTime() { //Declare function.
    var rightNow = dayjs().format("ddd DD MMM YYYY [at] HH:mm:ss"); //Capture the date and time (in a specific format) into a variable.
    timeDisplayEl.text(rightNow); //Change the "text" property of the "timeDisplayEl" element to match the value of the "rightNow" variable.
}