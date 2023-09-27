const welcome = (firstName,lastName) =>{
    let fullName =  `${firstName}  ${lastName}`;
    const displayFullName = () =>{
        alert(`welcome ${fullName}!`);
    }
    displayFullName();
}