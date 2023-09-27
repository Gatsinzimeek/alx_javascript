const form = document.getElementById('passwordForm');
const inputData = document.getElementById('password');
const msgError = document.getElementById('error');

const validatePassword = (e) => {
    
    alert('hello');
        e.preventDefault();
        let data = inputData.value;
            let pinCheck = new RegExp('^([A-Z])');
            if(data.length >= 8 || pinCheck.test(data)){
                alert('submited');
            }else{
                msgError.innerHTML = 'error';
                alert('hello');
            }
}

form.addEventListener('submit',validatePassword());


