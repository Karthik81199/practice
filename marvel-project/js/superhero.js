// Array to store character data
let characters = [];

// Variables for constructing the API URL
let apiUrl;
let urlPart1;
let urlPart2;

// Subpaths for Marvel API (events and comics)
let events = `/events`;
let comics = `/comics`;

// Flag variable (not used in the provided code)
let flag;

// Variable to store the fetched character data
let char;

// Function to fetch and display Marvel character details
function fetchCharacters() {
    // Retrieve the clicked character ID from local storage
    const clicked = JSON.parse(localStorage.getItem('clicked'));

    // Marvel API keys
    const publicKey = 'c2b37beec350a8f621567999b9398494';
    const privateKey = 'c1e16ac4834ebee2bbda45c46cb418c3414538ac';

    // Limit and offset for the API request
    const limit = 100; // You can adjust the limit based on your needs
    let offset = 0;

    // Generate timestamp and hash for the API request
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey);

    // Construct the first part of the API URL
    urlPart1 = `https://gateway.marvel.com/v1/public/characters/${clicked}`;

    // Construct the second part of the API URL
    urlPart2 = `?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${limit}&offset=${offset}`;

    // Combine the URL parts to form the complete API URL
    apiUrl = `${urlPart1}${urlPart2}`;

    // Fetch character data from the Marvel API
    fetch(apiUrl)
        .then(response => response.json())
        .then(character => {
            // Retrieve the character data from the results
            char = character.data.results[0];

            // Call the function to display the character details
            displayHtml(char);
        });
}

fetchCharacters();
// Get HTML elements by their IDs
const charImage = document.getElementById('char-image');
const comicsTitle = document.getElementById('char-name');
const charDesc = document.getElementById('char-desc');

// Function to display Marvel character details in HTML
function displayHtml(element) {
    // Set the character name in the comicsTitle element
    comicsTitle.textContent = element.name;

    // Set the character image source in the charImage element
    charImage.src = `${element.thumbnail.path}.${element.thumbnail.extension}`;

    // Set the character description in the charDesc element
    charDesc.textContent = element.description;

    // Check if there are available comics or events
    if (element.comics.available === 0 && element.events.available === 0) {
        // If neither comics nor events are available, return early
        return;
    } else if (element.events.available !== 0 && element.comics.available !== 0) {
        // If both events and comics are available, set the API URL for both
        apiUrl = `${urlPart1}${comics}${urlPart2}`;
        flag = 1;
        // Call a function to fetch additional data
        fetchData();
    } else if (element.comics.available !== 0) {
        // If only comics are available, set the API URL for comics
        apiUrl = `${urlPart1}${comics}${urlPart2}`;
        // Call a function to fetch additional data
        fetchData();
    } else if (element.events.available !== 0) {
        // If only events are available, set the API URL for events
        apiUrl = `${urlPart1}${events}${urlPart2}`;
        // Call a function to fetch additional data
        fetchData();
    }
}

// Function to fetch additional data (events or comics) based on the constructed API URL
function fetchData() {
    // Fetch data from the Marvel API using the constructed API URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(character => {
            // Check if the fetched data is for events
            if (apiUrl === `${urlPart1}${events}${urlPart2}`) {
                // Retrieve events data from the results
                const event = character.data.results;
                
                // Filter out events with 'image_not_available' in their thumbnail path
                const filteredEvents = filter(event);

                // Call a function to display the filtered events
                displayEvents(filteredEvents);
            }
            // Check if the fetched data is for comics
            else if (apiUrl === `${urlPart1}${comics}${urlPart2}`) {
                // Retrieve comics data from the results
                const comic = character.data.results;

                // Filter out comics with 'image_not_available' in their thumbnail path
                const filteredComics = filter(comic);

                // Call a function to display the filtered comics
                displayComics(filteredComics);
            }
        });
}

// Function to filter out characters with 'image_not_available' in their thumbnail path
function filter(characters) {
    // Use the filter method to exclude characters with 'image_not_available' in their thumbnail path
    const imageFilter = characters.filter(char => !char.thumbnail.path.includes('image_not_available'));

    // Return the filtered array
    return imageFilter;
}

// Function to display Marvel character's featured events in HTML
function displayEvents(event) {
    // Get the container and section elements by their IDs
    const eventsContainer = document.getElementById('events-container');
    const eventsSection = document.getElementById('events-section');

    // Set the text content of the eventsSection to indicate the character's featured events
    eventsSection.textContent = `${char.name} Featured in these Events`;

    // Loop through each event in the array
    event.forEach(event => {
        // Create a new div element for the event
        const eventsItem = document.createElement('div');
        eventsItem.dataset.id = event.id;
        eventsItem.classList.add('col');

        // Create a container div for the event's image
        const eventImageContainer = document.createElement('div');
        eventImageContainer.classList.add('card', 'h-100');

        // Create an image element for the event's thumbnail
        const eventImage = document.createElement('img');
        eventImage.src = `${event.thumbnail.path}.${event.thumbnail.extension}`;
        eventImage.alt = '...';
        eventImage.classList.add('card-img-top');

        // Create a div element for the card body
        const eventBody = document.createElement('div');
        eventBody.classList.add('card-body');

        // Create an h5 element for the event's title
        const eventTitle = document.createElement('h5');
        eventTitle.textContent = event.title;
        eventTitle.classList.add('card-title');

        // Create an h3 element for the event's ID (not sure if this is needed)
        const eventId = document.createElement('h3');
        eventId.classList.add('dynamic-text');
        eventId.textContent = `${event.id}`;

        // Create an h6 element for the event's description
        const eventDesc = document.createElement('h6');
        eventDesc.classList.add('description');
        eventDesc.textContent = `${event.description}`;

        // Append elements to the DOM hierarchy
        eventsContainer.appendChild(eventsItem);
        eventsItem.appendChild(eventImageContainer);
        eventImageContainer.appendChild(eventImage);
        eventImageContainer.appendChild(eventBody);
        eventBody.appendChild(eventTitle);
        eventBody.appendChild(eventDesc);
    });
}

// Function to display Marvel character's featured comics in HTML
function displayComics(comic) {
    // Get the container and section elements by their IDs
    const comicsContainer = document.getElementById('comics-container');
    const comicsSection = document.getElementById('comics-section');

    // Set the text content of the comicsSection to indicate the character's featured comics
    comicsSection.textContent = `${char.name} Featured in these Comics`;

    // Loop through each comic in the array
    comic.forEach(item => {
        // Create a new div element for the comic
        const comicsItem = document.createElement('div');
        comicsItem.dataset.id = item.id;
        comicsItem.classList.add('col');

        // Create a container div for the comic's image
        const comicsImageContainer = document.createElement('div');
        comicsImageContainer.classList.add('card', 'h-100');

        // Create an image element for the comic's thumbnail
        const comicsImage = document.createElement('img');
        comicsImage.src = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        comicsImage.alt = '...';
        comicsImage.classList.add('card-img-top');

        // Create a div element for the card body
        const comicsBody = document.createElement('div');
        comicsBody.classList.add('card-body');

        // Create an h5 element for the comic's title
        const comicsTitle = document.createElement('h5');
        comicsTitle.textContent = item.title;
        comicsTitle.classList.add('card-title');

        // Create a span element for the comic's ID (not sure if this is needed)
        const span = document.createElement('span');
        span.classList.add('dynamic-text');
        span.textContent = `${item.id}`;

        // Append elements to the DOM hierarchy
        comicsContainer.appendChild(comicsItem);
        comicsItem.appendChild(comicsImageContainer);
        comicsImageContainer.appendChild(comicsImage);
        comicsImageContainer.appendChild(comicsBody);
        comicsBody.appendChild(comicsTitle);
        comicsBody.appendChild(span);
    });

    // Check if flag is set to 1 (indicating the need to fetch additional data for events)
    if (flag === 1) {
        // Set the API URL for events and call a function to fetch additional data
        apiUrl = `${urlPart1}${events}${urlPart2}`;
        fetchData();
    }

    // Reset the flag to 0
    flag = 0;
}