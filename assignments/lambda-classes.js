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
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

//Instructor class
class Instructor extends Person {   
    constructor(instructorAttributes) {
        super(instructorAttributes);
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
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    //Student methods
    listsSubjects() {
        console.log (this.map());
    }
    PRAssigment(subject) {
        console.log (`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log (`${student.name} has begun sprint challenge on ${subject}`)
    }
}

//Project Manager class
class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    //Project Manager methods
    standUp(channel) {
        console.log (`${this.name} announces to ${channel}, @ channel standy times!`);
    }
    debugsCode(student) {
        console.log (`${this.name} debugs ${student.name}'s code on ${this.subject}`)
    }
}

//OBJECTS///////////////////////////////////////////////////////////////////////////////////////////////

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
    location: 'online',
    gender: 'M',
    speciality: 'front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Joshes will rule the cyberspace'
});

const janice = new Instructor({
    name: 'Janice',
    age: 32,
    location: 'online',
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

const jason = new Student({
    name: 'Ashley',
    age: 24,
    location: 'Nashville',
    gender: 'F',
    previousBackground: 'Codecademy',
    className: 'Web 18',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

//Project Manager Objects
const nick = new ProjectManager({
    name: 'Nick',
    age: 28,
    location: 'online',
    gender: 'M',
    speciality: 'Managing',
    favLanguage: 'Javascript',
    catchPhrase: 'Lemme see that pull request',
    gradClassName: 'Web1',
    favInstructor: 'Josh',
});

const jeremy = new ProjectManager({
    name: 'Jeremy',
    age: 32,
    location: 'online',
    gender: 'M',
    speciality: 'Managing',
    favLanguage: 'HTML',
    catchPhrase: 'Lemme see that pull request',
    gradClassName: 'Web2',
    favInstructor: 'Josh',
});