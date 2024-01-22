// get the hours element 
const hours = document.querySelector('#hours-item');

// function appendhours
function appendHours(length){
    // for loop to create options dynamically
    for (let index = 1; index < length; index++) {
        // create element option
        const options = document.createElement('option');
        // add class to option
        options.classList.add('common-time-item');
        // if index is less than 10 add another 0
        const formattedHour = index < 10 ? `0${index}` : index;
        // textcontent as formattedhour
        options.textContent = formattedHour;
        // finally append
        hours.appendChild(options)
    }
};
// initial call with value 13 12hour format 
appendHours(13);


const minutes = document.getElementById('min-item');

// Function to append minutes to a select element
function appendMinutes(minute) {
    // Loop through each minute
    for (let index = 0; index < minute; index++) {
        // Create a new option element
        const options = document.createElement('option');
        // Add a CSS class to the option element
        options.classList.add('common-time-item');
        // Format the minute with leading zeros if needed
        const formattedMin = index < 10 ? `0${index}` : index;
        // Set the text content of the option element
        options.textContent = formattedMin;
        // Append the option element to the "minutes" element 
        minutes.appendChild(options);
    }
}

// initial value of 60 
appendMinutes(60);

// get second element
const second = document.getElementById('sec-item');

// function to add seconds to select element 
function appendSeconds(sec){
    // loop through each second
    for (let index = 0; index < sec; index++) {
        // create a option element for every iteration
        const options = document.createElement('option');
        // add class to option element
        options.classList.add('common-time-item');
        // Format the second with leading zeros if needed
        const formattedSec = index < 10 ? `0${index}` : index;
         // Set the text content of the option element
        options.textContent = formattedSec;
        // Append the option element to the "sec-item" element
        second.appendChild(options)
    }
};
// initial call of 60
appendSeconds(60);
// get the date and time values inbuilt function
var time = new Date();
// Get the element for displaying current hour
const currentHourElem = document.getElementById('curr-hours');

// Get the element for displaying current minute
const currentMinElem = document.getElementById('curr-min');

// Get the element for displaying current second
const currentSecondElem = document.getElementById('curr-sec');

// Get the element for displaying current time format (AM/PM)
const currentFormatElem = document.getElementById('format');

// Function to set and update the current time
function setCurrentTime() {
    let time = new Date(); // Get current time

    // Calculate current hour in 12-hour format, display 12 if hour is 0
    let currentHour = time.getHours() % 12 || 12;

    // Determine the time format (AM or PM)
    let formatHour = time.getHours() >= 12 ? 'PM' : 'AM';

    // Get current minutes and seconds
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();

    // Display current hour with leading zero if needed
    currentHourElem.textContent = `${currentHour < 10 ? '0' + currentHour : currentHour}:`;

    // Display current minutes with leading zero if needed
    currentMinElem.textContent = `${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:`;

    // Display current seconds with leading zero if needed
    currentSecondElem.textContent = `${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

    // Display current time format (AM or PM)
    currentFormatElem.textContent = formatHour;
}

// Initial call to set the current time when the page loads
setCurrentTime();

// Update the current time every second using setInterval
setInterval(setCurrentTime, 1000);
// Get the element for selecting days
const selectDay = document.getElementById('select-day');

// Function to create buttons for each day of the week
function daysCreate() {
    // Array containing names of days
    var daysMapping = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Loop through each day
    for (let i = 0; i < daysMapping.length; i++) {
        // Create a button element for the day
        const daysDiv = document.createElement('button');

        // Set a custom data attribute to store the day value
        daysDiv.dataset.dayValue = i;

        // Add a CSS class to the button
        daysDiv.classList.add('days');

        // Add a click event listener to handle the day selection
        daysDiv.addEventListener('click', () => selectedDay(daysDiv));

        // Set the text content of the button to the day name
        daysDiv.textContent = daysMapping[i];

        // Append the button to the selectDay element
        selectDay.appendChild(daysDiv);
    }

    // Get the current date and day
    let currentDate = new Date();
    let currentDay = currentDate.getDay();

    // Disable buttons for days that have already passed in the current week
    disablePreviousDay(currentDay);
}

// Call the daysCreate function to create and set up the buttons
daysCreate();

// Function to disable buttons for days that have already passed in the current week
function disablePreviousDay(currentDay) {
    // Get all elements with the 'days' class
    const getDays = document.querySelectorAll('.days');

    // Loop through the days
    for (let i = 0; i <= currentDay; i++) {
        // Disable the button for the day
        getDays[i].disabled = true;
    }
}

// Function to handle the selection of a day
function selectedDay(day) {
    // If the day has the 'selected-day' class, remove it
    if (day.classList.contains('selected-day')) {
        day.classList.remove('selected-day');
    } else if (!day.classList.contains('selected-day')) {
        // If the day doesn't have the 'selected-day' class, add it
        day.classList.add('selected-day');
        
        // Ensure only one day is selected at a time
        checkOnlyOne(day);
    }
}

// Function to check and ensure only one day is selected at a time
function checkOnlyOne(day) {
    // Get all elements with the 'selected-day' class
    const selectedDays = document.querySelectorAll('.selected-day');

    // Loop through the selected days
    for (let i = 0; i < selectedDays.length; i++) {
        // If the selected day is not the current day, remove the 'selected-day' class
        if (selectedDays[i].dataset.dayValue === day.dataset.dayValue) {
            continue;
        } else {
            selectedDays[i].classList.remove('selected-day');
        }
    }
}

// Array to store alarm data
let alarmJSON = [];

// Get the form element
const formData = document.getElementById('form');

const asideSection = document.querySelector('.section-2');

asideSection.style.display = 'none';

// Add a submit event listener to the form
formData.addEventListener('submit', (event) => getData(event));

// Function to handle form submission
function getData(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the selected time period (AM/PM)
    const clicked = getClicked();

    // Get the current time
    let time = new Date();

    // Get current hour in 12-hour format, if 0, display 12
    let currentHour = time.getHours() % 12 || 12;

    // Determine the time format (AM or PM)
    let formatHour = time.getHours() >= 12 ? 'PM' : 'AM';

    // Get current minutes
    let currentMinutes = time.getMinutes();

    // Get current day of the week
    let currentDay = time.getDay();

    // Variable to store the selected day value
    let selectDayValue;

    // Get the selected day element with the 'selected-day' class
    const selectDay = document.querySelector('.selected-day');

    // Get the selected hour, minute, and second values from form elements
    const selectedHour = Number(hours.value);
    const selectedMin = Number(minutes.value);
    const selectedSecond = Number(second.value);

    // Check if a day and time period are chosen
    if (!selectDay || !clicked) {
        alert(`Either Day or Time Period Options are Not chosen`);
        return;
    }

    // If a day and time period are chosen
    if (selectDay && clicked) {
        // Get the value of the selected day
        selectDayValue = Number(selectDay.dataset.dayValue);
    }

    // Check conditions to set the alarm based on the selected day and time
    if (selectDayValue === currentDay && formatHour === clicked) {
        if (selectedHour > currentHour) {
            // Check if the alarm can be set for the selected time
            checkPresent(selectDayValue, selectedHour, selectedMin, selectedSecond, clicked, formatHour, currentDay);
        } else if (selectedHour < currentHour && formatHour === clicked) {
            alert(`Alarm Can't be set as time has already elapsed for the day`);
        } else if (selectedHour === currentHour && selectedMin >= currentMinutes) {
            // Check if the alarm can be set for the selected time
            checkPresent(selectDayValue, selectedHour, selectedMin, selectedSecond, clicked, formatHour, currentDay);
        }
    } else if (selectDayValue === currentDay && formatHour !== clicked) {
        // Check if the alarm can be set for the selected time
        checkPresent(selectDayValue, selectedHour, selectedMin, selectedSecond, clicked, formatHour, currentDay);
    } else if (selectDay.dataset.dayValue > currentDay) {
        // Check if the alarm can be set for the selected time
        checkPresent(selectDayValue, selectedHour, selectedMin, selectedSecond, clicked, formatHour, currentDay);
    }
}

function checkPresent(selectDay, selectedHour, selectedMin, selectedSecond, clicked, currentTimePeriod, currentDay) {
    var daysMapping = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Check if the alarmJSON array is empty
    if (alarmJSON.length === 0) {
        // Generate a unique ID for the new alarm
        let alarmId = concatenateNumericProperties({
            day: selectDay,
            hour: selectedHour,
            minutes: selectedMin,
            seconds: selectedSecond,
            timeperiod: clicked,
            status: 'on',
        });


        // Create an object with alarm data
        let alarmData = {
            id: alarmId,
            day: selectDay,
            hour: selectedHour,
            minutes: selectedMin,
            seconds: selectedSecond,
            timeperiod: clicked,
            status: 'on',
        }

        // Display a message about the created alarm
        if (selectDay === currentDay && currentTimePeriod === 'PM' && clicked === 'AM') {
            alert(`Alarm created for next week on ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        } else {
            alert(`Alarm created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        }

        // Push the new alarm data into the alarmJSON array
        if (alarmJSON.push(alarmData)) {
            console.log(alarmJSON)
            // Call functions to update the UI with the new alarm
            createAlarmItems(alarmId);
            filterOnAlarms(alarmJSON);
            asideSection.style.display = 'inline-block';
        }

    } else if (alarmJSON.length > 0) {
        // Generate a unique ID for the new alarm
        let alarmId = concatenateNumericProperties({
            day: selectDay,
            hour: selectedHour,
            minutes: selectedMin,
            seconds: selectedSecond,
            timeperiod: clicked,
            status: 'on',
        });

        // Check if the alarm with the same ID already exists in the alarmJSON array
        let alarmExists = alarmJSON.some(alarm => (
            alarm.id === alarmId
        ));

        // If the alarm with the same ID already exists, display a message
        if (alarmExists) {
            alert(`Alarm has already been created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        } else {
            // Create an object with alarm data
            let alarmData = {
                id: alarmId,
                day: selectDay,
                hour: selectedHour,
                minutes: selectedMin,
                seconds: selectedSecond,
                timeperiod: clicked,
                status: 'on',
            }

            // Display a message about the created alarm
            alert(`Alarm created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);

            // Push the new alarm data into the alarmJSON array
            if (alarmJSON.push(alarmData)) {
                // Call functions to update the UI with the new alarm
                createAlarmItems(alarmId);
                filterOnAlarms(alarmJSON)
                asideSection.style.display = 'inline-block';
            }
        }
    }
}

// Function to concatenate numeric properties of an object
function concatenateNumericProperties(obj) {
    // Get an array of entries from the object, filter numeric properties and 'timeperiod'
    let numericProperties = Object.entries(obj)
        .filter(([key, value]) => typeof value === 'number' || key === 'timeperiod')
        .map(([key, value]) => value);

    // Concatenate the numeric properties into a string
    return numericProperties.join('');
}

// Function to get the selected value from radio buttons with the name 'format'
function getClicked() {
    // Get all radio buttons with the name 'format'
    const formatType = document.getElementsByName('format');

    // Loop through the radio buttons
    for (let i = 0; i < formatType.length; i++) {
        // Check if the current radio button is checked
        if (formatType[i].checked) {
            // Add a class to the checked radio button for styling (optional)
            formatType[i].classList.add('selected-format');

            // Return the value of the checked radio button
            return formatType[i].value;
        }
    }
}

// Example usage: Get the container element with the class 'alarm-container'
const alarmContainer = document.querySelector('.alarm-container');

function createAlarmItems(id) {
    // Get alarm details based on the provided ID
    const alarmFound = getParticulars(id);

    // Array to map days of the week
    var daysMapping = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Create a div element for the alarm item
    const alarmItem = document.createElement('div');
    alarmItem.classList.add('alarm-item');

    // Create a div element for the left content
    const leftContent = document.createElement('div');
    leftContent.classList.add('left-content');

    // Create div elements for hour, minute, time period, and day
    const hourCreate = document.createElement('div');
    hourCreate.classList.add('hour-create');

    const minCreate = document.createElement('div');
    minCreate.classList.add('min-create');

    const timePeriod = document.createElement('div');
    timePeriod.classList.add('time-period');

    const day = document.createElement('div');
    day.classList.add('day');

    // Create a div element for the right content
    const rightContent = document.createElement('div');
    rightContent.classList.add('right-content');

    // Create a div element for the 'on' button
    const onButton = document.createElement('div');
    onButton.classList.add('on-button');

    // Create a div element for the 'delete alarm' button
    const delAlarm = document.createElement('div');
    delAlarm.classList.add('del-alarm');

    // Append elements to the alarm container
    alarmContainer.appendChild(alarmItem);
    alarmItem.appendChild(leftContent);
    leftContent.appendChild(hourCreate);
    leftContent.appendChild(minCreate);
    leftContent.appendChild(timePeriod);
    leftContent.appendChild(day);
    alarmItem.appendChild(rightContent);
    rightContent.appendChild(onButton);

    // Create a label element for the switch button
    const label = document.createElement('label');
    label.classList.add('switch');
    onButton.appendChild(label);

    // Create an input element for the checkbox
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('checked', 'checked'); // Set the checkbox as checked
    input.checked = true; // Alternative method to set the checkbox as checked
    input.addEventListener('click', () => unCheck(input, id));
    label.appendChild(input);

    // Create a span element for the slider
    const span = document.createElement('span');
    span.classList.add('slider', 'round');
    label.appendChild(span);

    // Append elements for the 'delete alarm' button
    rightContent.appendChild(delAlarm);
    const fontAwesomeDelete = document.createElement('i');
    fontAwesomeDelete.dataset.id = alarmFound.id;
    fontAwesomeDelete.addEventListener('click', () => deleteFromJson(fontAwesomeDelete.dataset.id, alarmItem));
    fontAwesomeDelete.classList.add('fa-solid', 'fa-trash');
    delAlarm.appendChild(fontAwesomeDelete);

    // Display alarm details in the UI
    hourCreate.textContent = formatDoubleDigit(alarmFound.hour);
    minCreate.textContent = formatDoubleDigit(alarmFound.minutes);
    timePeriod.textContent = alarmFound.timeperiod;
    day.textContent = daysMapping[alarmFound.day];
}

// Function to retrieve alarm details based on the provided ID
function getParticulars(id) {
    // Find the alarm with the specified ID in the alarmJSON array
    const existingAlarm = alarmJSON.find(alarm => alarm.id === id);

    // Return the found alarm or null if not found
    return existingAlarm || null;
}

// Function to format a numerical value by adding a leading zero if it's less than 10
function formatDoubleDigit(value) {
    return value < 10 ? `0${value}` : value;
}

// Function to delete an alarm from the alarmJSON array and remove the associated DOM element
function deleteFromJson(id, alarmItem) {
    // Find the index of the alarm with the specified ID in the alarmJSON array
    const existingAlarmIndex = alarmJSON.findIndex(alarm => alarm.id === id);

    // Check if the alarm with the specified ID exists in the array
    if (existingAlarmIndex !== -1) {
        // Remove the alarm from the alarmJSON array
        alarmJSON.splice(existingAlarmIndex, 1);

        // Remove the associated DOM element
        alarmItem.remove();
        // check if alarmItems are present
        checkAlarmItems();
    }
}
// Function to check alarm items and hide the asideSection 
function checkAlarmItems(){
    // Get all elements with the class 'alarm-item'
    const getAlarmItems = document.querySelectorAll('.alarm-item');
     // Check if there are no alarm items
    if(getAlarmItems.length === 0){
        // If no alarm items, hide the asideSection
        asideSection.style.display = 'none';
    }
}

// Function to handle the checkbox state change
function unCheck(input, id) {
    // Check if the checkbox is unchecked
    if (input.checked === false) {
        // Find the existing alarm with the specified ID in the alarmJSON array
        const existingAlarm = alarmJSON.find(alarm => alarm.id === id);

        // Update the status of the alarm to 'off'
        existingAlarm.status = 'off';

        // Log the updated alarmJSON array
        console.log(alarmJSON);
    } else {
        // Find the existing alarm with the specified ID in the alarmJSON array
        const existingAlarm = alarmJSON.find(alarm => alarm.id === id);

        // Update the status of the alarm to 'on'
        existingAlarm.status = 'on';

        // Call a function to filter and update the UI based on alarms with status 'on'
        filterOnAlarms(alarmJSON);

        // Log the updated alarmJSON array
        console.log(alarmJSON);
    }
}

function checkAndPlayMusic(alarm) {
    if (alarm.status === "on") {
        const currentDateTime = new Date();

        const alarmDateTime = new Date();
        alarmDateTime.setHours(alarm.hour + (alarm.timeperiod === "PM" && alarm.hour !== 12 ? 12 : 0), alarm.minutes, alarm.seconds || 0);

        console.log(alarmDateTime);
        console.log(alarmDateTime.getHours(),currentDateTime.getHours());
        if (currentDateTime.getHours() === alarmDateTime.getHours() &&
            currentDateTime.getMinutes() === alarmDateTime.getMinutes()) {
            // Play music or trigger your desired action here

            // Example: Play a sound using the Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 2); // Stop after 2 seconds
        }
    }
}


// Function to filter alarms based on their status and trigger actions for 'on' alarms
function filterOnAlarms(alarms) {
    // Filter alarms with status 'on'
    const onAlarms = alarms.filter(alarm => alarm.status === "on");

    // Iterate through each 'on' alarm
    onAlarms.forEach(alarm => {
        // Call a function to check and play music for the current alarm
        checkAndPlayMusic(alarm);
    });
}

// Set up an interval to periodically check and handle alarms
setInterval(() => {
    // Call the function to filter alarms with status 'on' and trigger actions
    filterOnAlarms(alarmJSON);
}, 1000);