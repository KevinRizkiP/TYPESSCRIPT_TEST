// object type
type Member = {
  username: string;
  email: string;
};

function printMemberDetail(member: Member) {}

function getMemberUsername(member: Member) {}

// primitive type
type StringTest = string;
const sebuahString: StringTest = "asd";

// union type
type numStr = string | number;
let valueNumStr: numStr = "1";
valueNumStr = 123;
