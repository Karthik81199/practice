// Marvel API keys and configuration
const publicKey = 'c2b37beec350a8f621567999b9398494';  // Replace with your Marvel API public key
const privateKey = 'c1e16ac4834ebee2bbda45c46cb418c3414538ac'; // Replace with your Marvel API private key
const limit = 50;  // You can adjust the limit based on your needs
let offset = 0;

// Arrays to store character data
let characters = [];
let filterCharacter = [];

// Function to fetch Marvel characters from the API
function fetchCharacters() {
    // Generate timestamp and hash for the API request
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey);
  
    // Construct the API URL for fetching characters
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${limit}&offset=${offset}`;

    // Fetch characters from the Marvel API
    fetch(apiUrl)
        .then(response => response.json())
        .then(character => {
            // Extract characters from the results
            const char =  character.data.results;

            // Push each character into the characters array
            char.forEach(element => {
                characters.push(element);
            });

            // Check if there are more characters to fetch
            offset += limit;

            // Filter characters based on some criteria (e.g., 'filter' function needed here)
            filterCharacter = filter(characters);

            // Call the function to display the filtered characters
            displayHtml(filterCharacter);
        });
}

// Start fetching characters and sorting
fetchCharacters();

// Function to filter characters based on the presence of 'image_not_available' in their thumbnail path
function filter(characters) {
  const imageFilter = characters.filter(char => !char.thumbnail.path.includes('image_not_available'));
  return imageFilter;
}

// Get the container element with the ID 'marvel-con'
const cardContainer = document.getElementById('marvel-con');

// Variable to keep track of displayed characters
let count = 0;

// Limit the number of characters to display
let displayLimit = 9;

// Function to display Marvel characters in HTML
function displayHtml(characters) {
  // Loop through each character in the array
  characters.forEach(char => {
      // Check if the display limit has been reached
      if (count < displayLimit) {
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
          favButton.classList.add('fa-regular', 'fa-heart');
          favButton.dataset.id = char.id;
          // Add a click event listener to the favorite button to add to favorites
          favButton.addEventListener('click', () => addToFav(favButton, span));

          // Create a span element for dynamic text (Add To Favorites)
          const span = document.createElement('span');
          span.classList.add('dynamic-text');
          span.dataset.spanid = char.id;
          span.textContent = 'Add To Favorites';

          // Append elements to the DOM hierarchy
          cardContainer.appendChild(marvelItem);
          marvelItem.appendChild(marvelImageContainer);
          marvelImageContainer.appendChild(marvelImage);
          marvelImageContainer.appendChild(marvelBody);
          marvelBody.appendChild(charName);
          marvelBody.appendChild(favButton);
          marvelBody.appendChild(span);

          // Increment the count of displayed characters
          count = count + 1;
      }
  });

  // Call a function to check and highlight initial favorites
  checkFavoritesInitial(favorites);
}

// Retrieve favorites from local storage or default to an empty array
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to check and highlight initial favorites
function checkFavoritesInitial(favorites) {
    // Check if there are no favorites
    if (favorites.length === 0) {
        // If no favorites, return early
        return;
    } else {
        // Select all elements with the class '.fa-heart'
        const favoriteItems = document.querySelectorAll('.fa-heart');
        
        // Loop through each favorite item
        favoriteItems.forEach(item => {
            // Get the dataset ID from the favorite item
            const itemId = item.dataset.id;

            // Check if the item ID is in the favorites array
            if (favorites.includes(itemId)) {
                // If in favorites, add the 'checked' class to highlight
                item.classList.add('checked');
                
                // Call a function to change the text content based on favorites
                changeTextContent(favorites);
            }
        });
    }
}

// Function to change text content based on favorites
function changeTextContent(favorites) {
    // Select all elements with the class '.dynamic-text'
    const dynamicText = document.querySelectorAll('.dynamic-text');

    // Loop through each dynamic text element
    dynamicText.forEach(item => {
        // Get the dataset span ID from the dynamic text element
        const spanId = item.dataset.spanid;

        // Check if the span ID is in the favorites array
        if (favorites.includes(spanId)) {
            // If in favorites, change the text content to 'Remove From Favorites'
            item.textContent = 'Remove From Favorites';
        }
    });
}

// Function to add or remove a character from favorites
function addToFav(favButton, span) {
  // Get the character ID from the dataset of the favorite button
  const id = favButton.dataset.id;

  // Check if the character is already in favorites
  if (favorites.includes(id)) {
      // If the character is in favorites, remove it
      const indexRemove = favorites.indexOf(id);
      if (indexRemove !== -1) {
          // Remove the character from the favorites array
          favorites.splice(indexRemove, 1);

          // Remove the 'checked' class from the favorite button
          favButton.classList.remove('checked');

          // Update localStorage with the modified favorites array
          localStorage.setItem('favorites', JSON.stringify(favorites));

          // Change the text content of the span to 'Add To Favorites'
          span.textContent = 'Add To Favorites';
      }
  } else {
      // If the character is not in favorites, add it
      favorites.push(id);

      // Add the 'checked' class to the favorite button
      favButton.classList.add('checked');

      // Update localStorage with the modified favorites array
      localStorage.setItem('favorites', JSON.stringify(favorites));

      // Change the text content of the span to 'Remove From Favorites'
      span.textContent = 'Remove From Favorites';
  }
}

// Get the 'load-more' button element by ID
const loadMoreBtn = document.getElementById('load-more');

// Add a click event listener to the 'load-more' button
loadMoreBtn.addEventListener('click', loadMoreCharacters);


// Function to load more characters from the Marvel API
function loadMoreCharacters() {
  // Declare a new array to store filtered characters
  let newFilter = [];

  // Generate timestamp and hash for the API request
  const timestamp = new Date().getTime().toString();
  const hash = md5(timestamp + privateKey + publicKey);

  // Construct the API URL for fetching more characters
  const apiUrl = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${limit}&offset=${offset}`;

  // Fetch more characters from the Marvel API
  fetch(apiUrl)
      .then(response => response.json())
      .then(fetchchar => {
          // Extract characters from the results
          const char = fetchchar.data.results;

          // Push each character into the characters array
          char.forEach(item => {
              characters.push(item);
          });

          // Filter characters based on some criteria (e.g., 'filter' function needed here)
          newFilter = filter(characters);

          // Create a new array to continue from where the display limit left off
          let continueArray = newFilter.slice(displayLimit);

          // Update the display limit
          displayLimit = count + count;

          // Call the function to display the continued characters
          displayHtml(continueArray);
      });
}

// Function to navigate to character details page
function goToDetails(marvelItem) {
  // Set the clicked character ID in local storage
  localStorage.setItem('clicked', marvelItem.dataset.id);

  // Navigate to the 'superheroinfo.html' page
  window.location.href = 'superheroinfo.html';
}