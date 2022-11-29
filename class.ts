class Book {
  title: string;
  author: string;
  totalPage: number;
  currentPage: number;
  constructor(
    // constructor pasti balikin object
    title: string,
    author: string,
    totalPage: number,
    currentpage: number
  ) {}
  read(untilPage: number): boolean {
    // method read
    this.currentPage = untilPage;
    if (this.currentPage === this.totalPage) {
      return true;
    } else {
      return false;
    }
  }
}

class Course {
  readonly courseId: string;
  constructor(courseid: string) {
    // readonly hanya bisa di assign di dalam constructornya
    this.courseId = courseid;
  }
}

// public class bisa dipanggil di luar class nya
class Player {
  public hp: number;
  mp: number;
  constructor(hp: number, mp: number) {
    this.hp = hp;
    this.mp = mp;
  }
  public heal(healHp) {
    this.hp += healHp;
  }
  levelUp() {}
}

const jojo = new Player(100, 100);
jojo.hp = 200;
jojo.mp = 300;
jojo.heal(123);
jojo.levelUp();

// protected hanya bisa di panggil di dalam classnya sendiri atau di sub classnya
class User {
  protected username: string;
  private password: string; // private hanya bisa idpanggil di dalam classnya
  constructor(username: string) {
    this.username = username;
  }
  printBasicInfo() {
    console.log(this.username);
  }
  changePassword(newPassword: string) {
    this.password = newPassword;
  }
}

class Seller extends User {
  protected shopName: string;
  constructor(username: string, shopName: string) {
    super(username);
    this.shopName = shopName;
  }
  printShop() {
    console.log(`the seller ${this.username} has the shop ${this.shopName}`);
  }
}

const penjual = new Seller("jojo", "jojoshop");

abstract class Hewan { // abstract class
  abstract bersuara(); // abstract member
}

class Kucing extends Hewan {
  bersuara() { // abstract member di implementasikan lagi
    console.log("meow meow");
  }
}

const pet = new Kucing();
