const form = document.getElementById('submitForm');
const emailField = document.getElementById('email').value;
const nameField = document.getElementById('name').value;

form.addEventListener('submit', handleFormSubmit);
const handleFormSubmit = (e) => {
    e.preventDefault();
    if(emailField == null || nameField == null){
        alert('Please fill in all required fields');
    }else{
        alert('Form submitted successfully!');
    }
}