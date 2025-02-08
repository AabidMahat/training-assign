interface StudentData {
  readonly studentId: string;
  grade: string;
  name: string;
  age: number;
}

interface TeacherData {
  readonly teacherId: string;
  name: string;
  age: number;
  subject?: string;
}

class Person {
  constructor(public name: string, public age: number) {}

  introduce(): void {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
  }
}

class Student extends Person {
  constructor(public student: StudentData) {
    super(student.name, student.age);
  }

  //   Overriding

  introduce(): void {
    console.log(
      `Hi, I am ${this.student.name}, a student in grade ${this.student.grade}`
    );
  }
}

class Teacher extends Person {
  static count: number = 0;

  constructor(public teacher: TeacherData) {
    super(teacher.name, teacher.age);
    Teacher.count++;
  }

  static getTotalTeacher() {
    console.log("Total Count of Teacher avaliable : " + Teacher.count);
  }

  //   overridding
  introduce(): void {
    console.log(
      `Hi , I am ${this.teacher.name} and I teach ${
        this.teacher.subject !== null ? this.teacher.subject : "No subject"
      }`
    );
  }
}

// Additional Task

abstract class Staff {
  private salary: number = 20000;
  constructor(protected department: string) {}

  showSalary(): void {
    console.log("Salary of Staff = " + this.salary);
  }

  //   Abstract Method

  abstract workDetails(): void;
}

class Clerk extends Staff {
  constructor(public responsibilty: string, protected department: string) {
    super(department);
  }

  // Implementation of Abstract Method
  workDetails(): void {
    console.log(
      `Hi I am Clerk working in ${this.department} , My responsibility is to manage ` +
        this.responsibilty
    );
  }
}

// Creating Object
const studentData: StudentData = {
  studentId: "Stu1",
  grade: "11",
  name: "Aabid",
  age: 21,
};
const student = new Student(studentData);

console.log(student.introduce());

const teacherData: TeacherData = {
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

const someVal: unknown = 42;

console.log(String(someVal).toUpperCase());
