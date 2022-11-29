let stringValue2: string = "asdasd";

// type annotation pada function
function pangkatDua(angka: number): number {
  return angka ** 2;
}

pangkatDua(2);
// pangkatDua("2");

// type annotation pada array
const arrayNumber1: number[] = [1, 2, 3];

// generik
const arraynumber2: Array<number> = [1, 2, 3];
