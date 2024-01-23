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

for (index = 9; index <= 17; index++) { //declare a for loop that will, in effect, recreate the page every time the app is opened in the browser. The loop goes from 9 to 17, which represent the standard working-day hours.
    var timeBlock = $("<div>").attr("class", "time-block row"); //Use JQuery to create a new div element and then setting up class attributes to it that makes it connected to the pertinent css selectors in the style.css sheet. Store this into a variable.
    var hour = $("<div>").attr("class", "col-2 col-sm-1 hour").text(index + ":00"); //Use JQuery to create a new div element and then setting up class attributes to it that makes it connected to the pertinent css selectors in the style.css sheet; and that also makes it responsive as per the bootstrap linkage. Change the text element to carry the current index and format it to show the time. Store this into a variable.
    var textArea = $("<textarea>").attr("class", "col-2 col-sm-10 description"); //Use JQuery to create a new text-area element and then setting up class attributes to it that makes it connected to the pertinent css selectors in the style.css sheet; and that also makes it responsive as per the bootstrap linkage. Change the text element to carry the current index and format it to show the time. Store this into a variable.
    var saveBtn = $("<button>").attr("class", "col-2 col-sm-1 saveBtn").append("<i class='fas fa-save'></i>"); //Use JQuery to create a new button element and then setting up class attributes to it that makes it connected to the pertinent css selectors in the style.css sheet; and that also makes it responsive as per the bootstrap linkage. Change the text element to carry the current index and format it to show the time. Append an "i" element that obtains an icon from Fontawsome. Store this into a variable.
}