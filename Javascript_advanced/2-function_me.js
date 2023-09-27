const welcomeMessage = fullName =>{
    return function(){ return alert(`Welcome ${fullName}`)};
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred  = welcomeMessage('Fred');
