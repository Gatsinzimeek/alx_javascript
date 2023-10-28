const form = document.getElementById('passwordForm');
const inputData = document.getElementById('password');
const msgError = document.getElementById('error');

const validatePassword = (e) => {
        e.preventDefault();
        let data = inputData.value;// Regular expressions to check the criteria
        const lengthRegex = /^.{8,}$/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*]/;
            if(lengthRegex.test(data) &&
            uppercaseRegex.test(data) &&
            lowercaseRegex.test(data) &&
            digitRegex.test(data) &&
            specialCharRegex.test(data)){
                msgError.style.display = 'none';
                form.submit();
            }else{
                msgError.innerHTML = 'error';
            }
}

form.addEventListener('submit',validatePassword);


