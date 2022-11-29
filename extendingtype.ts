// extendings type cuma bisa digunakan di interface
interface UserBimay {
  name: string;
  email: string;
  phoneNumber: string;
}

interface StudentBimay extends UserBimay {
  nim: string;
  gpa: number;
}

interface LecturerBimay extends UserBimay {
  lectureCode: string;
}

const studentBimay: StudentBimay = {
  name: "kevin",
  email: "kevin@gamil.com",
  phoneNumber: "0123456",
  nim: "12345",
  gpa: 3.6,
};
