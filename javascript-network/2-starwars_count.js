const request = require('request');

// API URL for Star Wars films
const apiUrl = process.argv[2]; // Pass this as the first command-line argument

// Character ID for Wedge Antilles
const characterId = 18;

// Make an HTTP request to the API
request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const films = JSON.parse(body).results;

    // Filter the films where Wedge Antilles (character ID 18) is present
    const filmsWithWedgeAntilles = films.filter(film =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Print the count of films with Wedge Antilles
    console.log(`Number of films with Wedge Antilles: ${filmsWithWedgeAntilles.length}`);
  } else {
    console.error('Error:', error);
  }
});
