class Hero {
  name: string;
  age: number;
  realName: string;

  constructor(name: string, age?: number, realname = "") {
    this.name = name;
    this.age = age;
    this.realName = realname;
  }
}

/* cuando no se define de forma explicita un modificador de
  acceeso de las propiedades de una clase por defiinicion 
  todas son publicas. */

class Hero2 {
  constructor(public name: string, public age: number) {}
}

const ironMan = new Hero("Iron Man", 40, "Anthony Stark");
console.log(ironMan.name);

const captain = new Hero2("Captain America", 80);

console.log(captain.name);
