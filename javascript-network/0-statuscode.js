const req = require('request');

req.get('https://swapi-api.alx-tools.com/api/')
    .on('data', (data) =>{
        console.log(data);
    });
