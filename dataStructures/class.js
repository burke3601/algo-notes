//class syntax

//the method to create new objects must be called constructor
//the class keyword creates a constant, so you can not redefine it

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    //instance methods
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "you are expelled!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }
    //class methods
    static enrollStudents(){
        return "Enrolling Students"
    }
}



let firstStudent = new Student("Will", "Burke", 5);
let secondStudent = new Student("Joe", "Smith", 12);


console.log(Student.enrollStudents());
secondStudent.grade = 9;

secondStudent.addScore(100);
secondStudent.addScore(99);

firstStudent.addScore(88);
firstStudent.addScore(76)


firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
secondStudent

console.log(firstStudent)
console.log(secondStudent)

console.log(firstStudent.calculateAverage())
console.log(secondStudent.calculateAverage())

