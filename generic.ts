// typescript belum tau tipenya apa karena any
function anyFunc(value: any): any {
  return value;
}

const anyFuncResult1 = anyFunc("string");
const anyFuncResult2 = anyFunc(12345);

// generic (type variabel di deklarasikan)
function typeFunc<TYPE>(value: TYPE): TYPE {
  return value;
}
const genericFuncResult1 = typeFunc<string>("string");
const genericFuncResult2 = typeFunc<number>(12345);

