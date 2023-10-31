
const req = require('request');

const Urlarg = process.argv[2];
const characterId = 18;

req.get(Urlarg,(error,res,body)=>{
    if(error){
        console.log('Error occur: ',error)
    }else{
        const films = JSON.parse(body).results;
        let count = films.forEach(film => {
            film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
        });
        console.log(filmsWithWedgeAntilles.length);
    }
});