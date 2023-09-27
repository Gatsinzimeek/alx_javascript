const divideBy = firstNumber  =>{
    return function (secondNumber){
        let division = secondNumber/firstNumber;
        return division;
    }
}

const addBy = firstNumber =>{
    return function (secondNumber){
        let sum = firstNumber + secondNumber;
        return sum;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

