// interface mirip dengan type aliases namun penggunaannya hanya untuk object saja
interface Student {
  name: string;
  nim: string;
  gpa: number;
}

function printStudentDetail(student: Student) {}

const student = {
  name: "kevin",
  nim: "123456",
  gpa: 3.6,
};

const student1 = {
  name: "kevin",
  nim: "123456",
  gpa: "3.6",
};

printStudentDetail(student);
// printStudentDetail(student1);
