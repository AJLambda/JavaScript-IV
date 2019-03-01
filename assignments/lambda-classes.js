// CODE here for your Lambda Classes


//Person class
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    //Person methods
    speak() {
        console.log (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//Instructor class
class Instructor extends Person {       //Instructors need to be extensions of Person. __proto__
    constructor(instructorAttributes) {
        super(instructorAttributes);        //Instructor uses the same attributes and methods that have been set up by Person
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    //Instructor methods
    demo(subject) {
        console.log (`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log (`${student.name} receives a perfect score on ${subject}`);
    }
}

//Student class
class Student extends Person {      //Students need to be extentions of Person. __proto__
    constructor(studentAttributes) {
        super(studentAttributes);       //Student uses the same attributes and methods that have been set up by Person
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    //Student methods
    listsSubjects() {
        console.log (this.favSubjects.toString());
    }
    PRAssignment(subject) {
        console.log (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log (`${this.name} has begun sprint challenge on ${subject}`)
    }
}

//Project Manager class
class ProjectManager extends Instructor {       //Project Managers need to be extensions of Instructor. __proto__
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);         //Project Managers use the same attributes and methods that have been set up by Instructor
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    //Project Manager methods
    standUp(channel) {
        console.log (`${this.name} announces to ${channel}, @ channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

//OBJECTS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Person Objects
const bill = new Person({
    name: 'Bill',
    age: 33,
    location: 'Las Vegas',
    gender: 'M',
});

const bob = new Person({
    name: 'Bob',
    age: 45,
    location: 'Atlanta',
    gender: 'M',
});

//Instructor Objects
const josh = new Instructor({
    name: 'Josh',
    age: 21,
    location: 'Zoomville',
    gender: 'M',
    speciality: 'front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Joshes will rule the cyberspace'
});

const janice = new Instructor({
    name: 'Janice',
    age: 32,
    location: 'Zoomville',
    gender: 'F',
    speciality: 'back-end',
    favLanguage: 'Python',
    catchPhrase: 'Janice knows best!',
});

//Student Objects
const austin = new Student({
    name: 'Austin',
    age: 27,
    location: 'L.A.',
    gender: 'M',
    previousBackground: 'Server',
    className: 'Web 18',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

const ashley = new Student({
    name: 'Ashley',
    age: 24,
    location: 'Kentucky',
    gender: 'F',
    previousBackground: 'Codecademy',
    className: 'Web 18',
    favSubjects: ['C++', 'Python', 'JavaScript'],
});

//Project Manager Objects
const nick = new ProjectManager({
    name: 'Nick',
    age: 28,
    location: 'SlackTown',
    gender: 'M',
    specialty: 'Managing',
    favLanguage: 'Javascript',
    catchPhrase: 'Lemme see that pull request',
    gradClassName: 'Web1',
    favInstructor: 'Josh',
});

const jeremy = new ProjectManager({
    name: 'Jeremy',
    age: 32,
    location: 'SlackTown',
    gender: 'M',
    specialty: 'Managing',
    favLanguage: 'HTML',
    catchPhrase: 'Lemme see that pull request',
    gradClassName: 'Web2',
    favInstructor: 'Josh',
});

//Call speak method on each Person, individually
bill.speak();
bob.speak();
josh.speak();
janice.speak();
austin.speak();
ashley.speak();
nick.speak();
jeremy.speak();

//Call demo method for each Instructor, individually
josh.demo('JavaScript IV');  //Passes subject string as argument
janice.demo('JavaScript III'); //Passes subject string as argument

//Call grade method for each Instructor, individually
josh.grade(austin, 'JavaScript IV'); //Passes student object and a subject string as arguments
janice.grade(ashley, 'JavaScript III'); //Passes student object and a subject string as arguments

//Call listsSubjects method for each Student, individually
austin.listsSubjects();
ashley.listsSubjects();

//Call PRAssignment method for each Student, individually
austin.PRAssignment('JavaScript IV');
ashley.PRAssignment('JavaScript III');

//Call sprintChallenge method for each Student, individually
austin.sprintChallenge('JavaScript IV');
ashley.sprintChallenge('JavaScript III');

//Call standUp method for each Project Manager, individually
nick.standUp('Web18_Help');
jeremy.standUp('Web18_Help');

//Call debugsCode method for each Project Manager, individually
nick.debugsCode(austin, 'JavaScript IV');
jeremy.debugsCode(ashley, 'JavaScript III');






