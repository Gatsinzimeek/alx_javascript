document.addEventListener('DOMContentLoaded',function(){
const inputContainer = document.getElementById('inputContainer');
const selectItem = document.getElementById('numFields');
const form = document.getElementById('dynamicForm');

selectItem.addEventListener("change", function () {
    const numFields = parseInt(selectItem.value);
    generateInputFields(numFields);
});


const generateInputFields = (Item)=>{
    inputContainer.innerHTML = "";
    for(let i = 0; i < Item; i++){
       let fields =  document.createElement('input');
       fields.setAttribute('type','text');
       fields.setAttribute('class','field');
        if(i === 1){
            fields.setAttribute('name','field1');
        }else if(i === 2){
            fields.setAttribute('name','field2');
        }else{
            fields.setAttribute('name','field3');
        }
        inputContainer.appendChild(fields);
    }
}

const validateForm = (e) =>{
    e.preventDefault();
    let input = document.getElementsByTagName('input');
    if(input.value == null){
        alert('Please fill in all fields');
    }else{
        input.value = '';
        form.submit();
    }
}

form.addEventListener('submit', validateForm);

});