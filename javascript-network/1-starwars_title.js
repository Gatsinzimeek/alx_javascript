const req = require('request');

// pass cmd line argument
const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

req.get(url,(error, response, body) =>{
    if(error){
        console.log('error occurs:', error);
    }else{
        const movieData = JSON.parse(body);
        console.log(movieData.title);
    }
});
