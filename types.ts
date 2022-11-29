// primitive string
let stringValue: string = "hello world";
// stringValue = 123;
// stringValue = true;
// stringValue = "bye world";

// primitive number
let numberValue: number = 123;
// numberValue = '123';
// numberValue = true;
numberValue = 3.123213;

// primitive boolean
let booleanValue: boolean = true;
// booleanValue = "asdasda";
// booleanValue = 123123;

let anyValue: any = " string";
anyValue = 123;
anyValue = true;
anyValue.toUpperCase();
stringValue.toUpperCase();
// numberValue.toUpperCase();

// object type
function registerUser(user: {
  username: string;
  password: string;
  phoneNumber?: string;
}) {
  console.log(`user ${user.username} ${user.password}`);
}

const user1 = {
  username: "kevin",
  password: "pasword",
};
const user2 = {
  username: "kevin",
};
const user3 = {
  username: "kevin",
  password: "pasword",
  phoneNumber: "012345",
  // property phoneNumber adalah property optional maka apabila property phoneNumber tidak ada di dalam user1 maka user1 tidak dianggap error
};
registerUser(user1);
// registerUser(user2); (error dikarenakan user2 tidak memiliki property wajib yaitu property password)
registerUser(user3);

// union type (type yang menggabungkan beberapa type data sekaligus)
function getBookById(id: number | string | boolean) {}

getBookById("asd");
getBookById(123);
getBookById(true);

// literal type (type yang langsung memakai valuenya)
function setDiscordStatus(newStatus: "online" | "idle" | "offline") {}
setDiscordStatus("online");

// function type (dianggap guntion type karena dalam callback ada function)
function sum(callback: (value: number) => void, num1: number, num2: number) {
  callback(num1 + num2);
}
function printNumber(value: number) {}
function printString(value: string) {}

sum(printNumber, 123, 123);
// sum(printString, 2, 3);


