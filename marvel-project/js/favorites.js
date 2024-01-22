// Array to store character data
let characters = [];

// Function to get favorites from local storage and initiate character fetching
function getFav() {
    // Retrieve favorites from local storage or default to an empty array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // Call the function to fetch characters using the retrieved favorites
    fetchCharacters(favorites);
}

// Set the limit for the number of characters to be fetched
let limit = 30;

// Call the function to get favorites and initiate character fetching
getFav();

// Function to fetch characters based on their IDs
function fetchCharacters(favorites) {
    // Marvel API keys
    const publicKey = 'c2b37beec350a8f621567999b9398494';  
    const privateKey = 'c1e16ac4834ebee2bbda45c46cb418c3414538ac';
    
    // Generate a timestamp for the API request
    const timestamp = new Date().getTime().toString();
    // Generate a hash using timestamp, private key, and public key (MD5 hash)
    const hash = md5(timestamp + privateKey + publicKey);

    // Check if there are no favorites
    if (favorites.length === 0) {
        // Display alert and redirect to index.html
        alert(`Favorites Are Not Added`);
        window.location.href = 'index.html';
    } else {
        // Loop through each favorite ID and fetch corresponding character data
        for (let index = 0; index < favorites.length; index++) {
            const charId = Number(favorites[index]);
            const apiurl = `https://gateway.marvel.com/v1/public/characters/${charId}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${limit}`;
            
            // Fetch character data from Marvel API
            fetch(apiurl)
                .then(response => response.json())
                .then(char => {
                    // Add the fetched character data to the characters array
                    characters.push(char.data.results);
                    // Display the HTML for the fetched character
                    displayHtml(char.data.results);
                });
        }
    }
}
// Get the container element with the ID 'marvel-con'
const cardContainer = document.getElementById('marvel-con');

// Function to display Marvel characters in HTML
function displayHtml(characters) {
    // Loop through each character in the array
    characters.forEach(char => {
        // Create a new div element for the Marvel character
        const marvelItem = document.createElement('div');
        marvelItem.dataset.id = char.id;
        marvelItem.classList.add('col');

        // Create a container div for the character's image
        const marvelImageContainer = document.createElement('div');
        marvelImageContainer.classList.add('card', 'h-100');

        // Create an image element for the character's thumbnail
        const marvelImage = document.createElement('img');
        // Add a click event listener to the image to navigate to details
        marvelImage.addEventListener('click', () => goToDetails(marvelItem));
        marvelImage.src = `${char.thumbnail.path}.${char.thumbnail.extension}`;
        marvelImage.alt = '...';
        marvelImage.classList.add('card-img-top');

        // Create a div element for the card body
        const marvelBody = document.createElement('div');
        marvelBody.classList.add('card-body');

        // Create an h5 element for the character's name
        const charName = document.createElement('h5');
        charName.textContent = char.name;
        charName.classList.add('card-title');

        // Create a heart icon element for the favorite button
        const favButton = document.createElement('i');
        favButton.classList.add('fa-regular', 'fa-heart', 'checked');
        favButton.dataset.id = char.id;
        // Add a click event listener to the favorite button to remove from favorites
        favButton.addEventListener('click', () => removeFromFav(favButton, marvelItem));

        // Create a span element for dynamic text (Remove From Favorites)
        const span = document.createElement('span');
        span.classList.add('dynamic-text');
        span.dataset.spanid = char.id;
        span.textContent = 'Remove From Favorites';

        // Append elements to the DOM hierarchy
        cardContainer.appendChild(marvelItem);
        marvelItem.appendChild(marvelImageContainer);
        marvelImageContainer.appendChild(marvelImage);
        marvelImageContainer.appendChild(marvelBody);
        marvelBody.appendChild(charName);
        marvelBody.appendChild(favButton);
        marvelBody.appendChild(span);
    });
}

// Function to remove a character from favorites
function removeFromFav(favButton, marvelItem) {
    // Get the character ID from the dataset of the favorite button
    const id = favButton.dataset.id;

    // Retrieve the current list of favorites from local storage or default to an empty array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Find the index of the character ID in the favorites array
    const indexRemove = favorites.indexOf(id);

    // Check if the character is in the favorites array
    if (indexRemove !== -1) {
        // Remove the character ID from the favorites array
        favorites.splice(indexRemove, 1);

        // Update the favorites in local storage
        localStorage.setItem('favorites', JSON.stringify(favorites));

        // Remove the corresponding character item from the DOM
        marvelItem.remove();
    }
}

// Function to navigate to the details page for a selected Marvel character
function goToDetails(marvelItem) {
    // Get the character ID from the dataset of the selected Marvel item
    const characterId = marvelItem.dataset.id;

    // Store the selected character ID in local storage
    localStorage.setItem('clicked', characterId);

    // Redirect to the details page (superheroinfo.html)
    window.location.href = 'superheroinfo.html';
}