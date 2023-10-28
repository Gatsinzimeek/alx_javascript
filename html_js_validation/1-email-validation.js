const form = document.getElementById('emailForm');
const inputdata = document.getElementById('email');
const errorMsg = document.getElementById('error');

const validateEmail  = (e) => {
    e.preventDefault();
    let data = inputdata.value;
    // Regular expressions to check the criteria
    const email = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if(email.test(data)){
            errorMsg.innerHTML = '';
            form.submit();
        }else{
            errorMsg.innerHTML = 'Please enter a valid email address.';
        }
}

form.addEventListener('submit',validateEmail);