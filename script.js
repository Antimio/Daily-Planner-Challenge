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

    timeBlock.append(hour, textArea, saveBtn).appendTo(mainContainer); //Link the separate elements, one after the other, left to right, put them inside the first div created; and then add it to the the main container element. This will, in effect, create the table with all the time slots, from 9 to 17.

    header.attr("class", "margin-gap"); //Set the class attribute of the header element so that it links to the css file and creates a space between the header section and the mainContainer element (which is directly underneath it).

    body.attr("class", "margin-gap"); //Set the class attribute of the body element so that it links to the css file and creates a space between the bottom of the body section and the end of the page.

    var currentTime = dayjs().hour(); //Capture the curent hour, using the Day.js API. Do this by declaring it into a variable.This will be dynamic as it will always update whenever the for loop runs, which is whenever the page is opened.


    //set up an if statement that analises the difference between the current time and the time as represented by the current value of index.
    if (index < currentTime) { // If the index is less than the value of current time...
        textArea.addClass("past"); // ...add the class "past" to the text-area element. This will add the css styling representing a past hour (gray).
    } else if (index === currentTime) { // If the index is equal to the value of current time...
        textArea.addClass("present"); //...add the class "past" to the text-area element. This will add the css styling representing the current hour (red).
    } else { // If the index is greater than the value of current time...
        textArea.addClass("future") //...add the class "past" to the text-area element. This will add the css styling representing a future hour (green).
    };

    //Set up a function that will remember the current state of the page
    function persistEvents() {
        $(".hour").each(function() { //Go through each element with the class of "hour".
            var slot = $(this).text(); //Capture the text value of each of the elements into a variable. The "this" ensures that the current ".hour" element is the one being treated.
            var savedEvent = localStorage.getItem(slot); //Get, from the local storage, the value corresponsing to the "slot" (the current value of the that variable) key; and save it into a new variable declaration.
            if (savedEvent) { //If there is anything to retrieve from the local storage...
                $(this).siblings(".description").val(savedEvent); //...search one of the siblings (other elements inside the same parent element: in this case, the sibling with the class "description") of the current element with the "hour" class; and set it's value to what has been retrieved from local sotorage for the current key.
            };
        });
    };

    persistEvents() //Call the above function whenever the page is opened or refreshed.
};

//Create an event listener for all the elements with the class "saveBtn".
$(".saveBtn").on("click", function() { //Whenever the element is clicked...
    var time = $(this).siblings(".hour").text(); //...get the text value of this element's sibling with the class of "hour" and capture it into a variable and...
    var scheduleEvent = $(this).siblings(".description").val(); //...get the content value of this element's sibling with the class of "description" and capture it into a variable.
    var empty = ""; // Set up a variable with an empty string to hadle the possiblity of deleting an event from the palnner.
    if (scheduleEvent) { // If there is something in the text area (.description) that is a sibling of this event listener element...
        localStorage.setItem(time, scheduleEvent); //...save the item to the local storage, with the key being the value of the time variable and the value being the content of the scheduleEvent variable.
    } else { //If there is nothing in the text area when the button is clicked...
        localStorage.setItem(time, empty); //... save the time as the key and the empty string as the value.
    };
});

setInterval(displayTime, 1000); //Call the displayTime function every 1000 milliseconds (i.e. one second). This will keep the time ticking for the user to see.