const createClassRoom = numbersOfStudents  =>{
    const studentSeat = seat =>{
        return function(){
            return seat;
        }
    }
    let students = [];
    for(let i = 0; i<= numbersOfStudents; i++){
        let studentsnumber = i+1;
        let student = studentSeat(studentsnumber) 
        students.push(student)  
    }
    return students;
};

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());