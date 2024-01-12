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
const selectDay = document.getElementById('select-day');

function daysCreate(){
    var daysMapping = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for(let i = 0 ; i < daysMapping.length ; i++){
        const daysDiv = document.createElement('button');
        daysDiv.dataset.dayValue = i;
        daysDiv.classList.add('days');
        daysDiv.addEventListener('click' ,() => selectedDay(daysDiv));
        daysDiv.textContent = daysMapping[i];
        selectDay.appendChild(daysDiv);
    }
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    disablePreviousDay(currentDay);
}

daysCreate();

function disablePreviousDay(currentDay){
    const getDays = document.querySelectorAll('.days');
    for(let i = 0 ; i <= currentDay ; i++){
        getDays[i].disabled = true;
    }
}

function selectedDay(day){
    if(day.classList.contains('selected-day')){
        day.classList.remove('selected-day');
    }else if(!day.classList.contains('selected-day')){
        day.classList.add('selected-day');
        checkOnlyOne(day);
    }
}

function checkOnlyOne(day){
    const selectedDays = document.querySelectorAll('.selected-day');
    for(let i = 0; i < selectedDays.length; i++){
        if(selectedDays[i].dataset.dayValue === day.dataset.dayValue){
            continue;
        }else{
            selectedDays[i].classList.remove('selected-day')
        }
    }
}

let alarmJSON = [];

const formData = document.getElementById('form');

formData.addEventListener('submit' ,() => getData(event));


function getData(event){
    event.preventDefault();
    const clicked = getClicked();
    let time = new Date(); // Get current time
    let currentHour = time.getHours() % 12 || 12; // % 12 to get hour in 12-hour format, if 0, display 12
    let formatHour = time.getHours() >= 12 ? 'PM' : 'AM';
    let currentMinutes = time.getMinutes();
    let currentDay = time.getDay();
    let selectDayValue;
    const selectDay =  document.querySelector('.selected-day');
    const selectedHour = Number(hours.value);
    const selectedMin = Number(minutes.value);
    const selectedSecond = Number(second.value);
    if(!selectDay || !clicked){
        alert(`Either Day or Time Period Options are Not choosen`);
        return;
    }if(selectDay && clicked){
        selectDayValue = Number(selectDay.dataset.dayValue);
    }
    if(selectDayValue === currentDay && formatHour === clicked){
        if(selectedHour > currentHour){
            checkPresent(selectDayValue,selectedHour,selectedMin,selectedSecond,clicked,formatHour,currentDay);
        }else if(selectedHour < currentHour && formatHour === clicked){
            alert(`Alarm Can't be se set as time as already elapsed for the day`)
        }else if(selectedHour === currentHour && selectedMin >= currentMinutes){
            checkPresent(selectDayValue,selectedHour,selectedMin,selectedSecond,clicked,formatHour,currentDay);
        }
    }else if(selectDayValue === currentDay && formatHour !== clicked){
        checkPresent(selectDayValue,selectedHour,selectedMin,selectedSecond,clicked,formatHour,currentDay);
    }
    else if(selectDay.dataset.dayValue > currentDay){
        checkPresent(selectDayValue,selectedHour,selectedMin,selectedSecond,clicked,formatHour,currentDay);
    }
}

function checkPresent(selectDay,selectedHour,selectedMin,selectedSecond,clicked,currentTimePeriod,currentDay){
    var daysMapping = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(alarmJSON.length === 0){
        let alarmId = concatenateNumericProperties({
            day: selectDay,
            hour: selectedHour,
            minutes: selectedMin,
            seconds: selectedSecond,
            timeperiod: clicked,
            status:'on',
        });
        console.log(alarmId);
        let alarmData = {
            id:alarmId,
            day:selectDay,
            hour:selectedHour,
            minutes:selectedMin,
            seconds:selectedSecond,
            timeperiod:clicked,
            status:'on',
        }
        if(selectDay === currentDay && currentTimePeriod === 'PM' && clicked === 'AM'){
            alert(`Alarm created for next week of ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        }else{
            alert(`Alarm created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        }
        if(alarmJSON.push(alarmData));{
            console.log(alarmJSON)
            createAlarmItems(alarmId);
            filterOnAlarms(alarmJSON);
        }

    }else if(alarmJSON.length > 0){
                let alarmId = concatenateNumericProperties({
            day: selectDay,
            hour: selectedHour,
            minutes: selectedMin,
            seconds: selectedSecond,
            timeperiod: clicked,
            status:'on,'
        });
        let alarmExists = alarmJSON.some(alarm => (
        alarm.id === alarmId
    ));
        if (alarmExists) {
            alert(`Alarm has already been created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
        }else {
            let alarmData = {
                id:alarmId,
                day:selectDay,
                hour:selectedHour,
                minutes:selectedMin,
                seconds:selectedSecond,
                timeperiod:clicked,
                status:'on',
            }
            alert(`Alarm created for ${daysMapping[selectDay]} at ${selectedHour}:${selectedMin}:${selectedSecond}`);
            if(alarmJSON.push(alarmData)){
                createAlarmItems(alarmId);
                filterOnAlarms(alarmJSON)
            }
        }
    }
}
function concatenateNumericProperties(obj) {
    let numericProperties = Object.entries(obj)
    .filter(([key, value]) => typeof value === 'number' || key === 'timeperiod')
    .map(([key, value]) => value);
    return numericProperties.join('');
}

function getClicked(){
    const formatType = document.getElementsByName('format');
    for(let i = 0;i< formatType.length;i++){
        if(formatType[i].checked){
            formatType[i].classList.add('selected-format');
            return formatType[i].value;
        }
    }
}

const alarmContainer = document.querySelector('.alarm-container');

function createAlarmItems(id){
    const alarmFound = getParticulars(id);
    console.log(alarmFound);
    var daysMapping = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const alarmItem = document.createElement('div');

        alarmItem.classList.add('alarm-item');

        const leftContent = document.createElement('div');

        leftContent.classList.add('left-content');

        const hourCreate = document.createElement('div');

        hourCreate.classList.add('hour-create');

        const minCreate = document.createElement('div');

        minCreate.classList.add('min-create');

        const timePeriod = document.createElement('div');

        timePeriod.classList.add('time-period');

        const day = document.createElement('div');

        day.classList.add('day');

        const rightContent = document.createElement('div');

        rightContent.classList.add('right-content');

        const onButton = document.createElement('div');

        onButton.classList.add('on-button');

        const delAlarm = document.createElement('div');

        delAlarm.classList.add('del-alarm');

        alarmContainer.appendChild(alarmItem);

        alarmItem.appendChild(leftContent);

        leftContent.appendChild(hourCreate);

        leftContent.appendChild(minCreate);

        leftContent.appendChild(timePeriod);

        leftContent.appendChild(day);

        alarmItem.appendChild(rightContent);

        rightContent.appendChild(onButton);
        
        const label = document.createElement('label');

        label.classList.add('switch');

        onButton.appendChild(label);

        const input = document.createElement('input');

        input.setAttribute('type', 'checkbox');

        input.setAttribute('checked', 'checked'); 

        input.checked = true;

        input.addEventListener('click',()=>unCheck(input,id));

        label.appendChild(input);

        const span = document.createElement('span');

        span.classList.add('slider','round');

        label.appendChild(span);

        rightContent.appendChild(delAlarm);

        const fontAwesomeDelete = document.createElement('i');

        fontAwesomeDelete.dataset.id = alarmFound.id;

        fontAwesomeDelete.addEventListener('click' ,()=>deleteFromJson(fontAwesomeDelete.dataset.id,alarmItem));

        fontAwesomeDelete.classList.add('fa-solid', 'fa-trash');
        
        delAlarm.appendChild(fontAwesomeDelete);

        hourCreate.textContent = formatDoubleDigit(alarmFound.hour);

        minCreate.textContent = formatDoubleDigit(alarmFound.minutes);

        timePeriod.textContent = alarmFound.timeperiod;

        day.textContent = daysMapping[alarmFound.day];

}

function getParticulars(id){
    const existingAlarm = alarmJSON.find(alarm => alarm.id === id);
    return existingAlarm || null ;
}
function formatDoubleDigit(value) {
    return value < 10 ? `0${value}` : value;
}

function deleteFromJson(id,alarmItem){
    const existingAlarmIndex = alarmJSON.find(alarm => alarm.id === id);
    if(existingAlarmIndex !== -1){
        alarmJSON.splice(existingAlarmIndex,1);
        alarmItem.remove();
    }
}

function unCheck(input,id){
    if(input.checked === false){
        const existingAlarm = alarmJSON.find(alarm => alarm.id === id);
        existingAlarm.status = 'off';
        console.log(alarmJSON);
    }else {
        const existingAlarm = alarmJSON.find(alarm => alarm.id === id);
        existingAlarm.status = 'on';
        filterOnAlarms(alarmJSON);
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


function filterOnAlarms(alarms) {
    const onAlarms = alarms.filter(alarm => alarm.status === "on");
    onAlarms.forEach(alarm => {
        checkAndPlayMusic(alarm);
    });
}

setInterval(() => {
    filterOnAlarms(alarmJSON);
}, 1000);