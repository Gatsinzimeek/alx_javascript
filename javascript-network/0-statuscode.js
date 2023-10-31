const req = require('request');

// pass cmd line argument
const url = process.argv[2];

req.get(url,(error,response)=>{
    if(error){
        console.log("error:", error);
    }else{
        console.log(response.statusCode);
    }
});