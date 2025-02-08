"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
    }
}
class Student extends Person {
    student;
    constructor(student) {
        super(student.name, student.age);
        this.student = student;
    }
    //   Overriding
    introduce() {
        console.log(`Hi, I am ${this.student.name}, a student in grade ${this.student.grade}`);
    }
}
class Teacher extends Person {
    teacher;
    static count = 0;
    constructor(teacher) {
        super(teacher.name, teacher.age);
        this.teacher = teacher;
        Teacher.count++;
    }
    static getTotalTeacher() {
        console.log("Total Count of Teacher avaliable : " + Teacher.count);
    }
    //   overridding
    introduce() {
        console.log(`Hi , I am ${this.teacher.name} and I teach ${this.teacher.subject !== null ? this.teacher.subject : "No subject"}`);
    }
}
// Additional Task
class Staff {
    department;
    salary = 20000;
    constructor(department) {
        this.department = department;
    }
    showSalary() {
        console.log("Salary of Staff = " + this.salary);
    }
}
class Clerk extends Staff {
    responsibilty;
    department;
    constructor(responsibilty, department) {
        super(department);
        this.responsibilty = responsibilty;
        this.department = department;
    }
    // Implementation of Abstract Method
    workDetails() {
        console.log(`Hi I am Clerk working in ${this.department} , My responsibility is to manage ` +
            this.responsibilty);
    }
}
// Creating Object
const studentData = {
    studentId: "Stu1",
    grade: "11",
    name: "Aabid",
    age: 21,
};
const student = new Student(studentData);
console.log(student.introduce());
const teacherData = {
    teacherId: "Tea1",
    name: "Anis",
    age: 42,
    subject: "Maths",
};
const teacher = new Teacher(teacherData);
const teacher1 = new Teacher(teacherData);
const teacher2 = new Teacher(teacherData);
console.log(teacher.introduce());
console.log(Teacher.getTotalTeacher());
// Additional Task
const clerk = new Clerk("Attendance", "Computer Science");
clerk.showSalary();
console.log(clerk.workDetails());
const someVal = 42;
console.log(String(someVal).toUpperCase());
