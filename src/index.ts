class NormalPeople {
  constructor(public name: string, public address: string) {}
}
class Hero extends NormalPeople {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "");
  }
}

class Hero2 {
  constructor(public name: string, public age: number) {}
}

const mane = new NormalPeople("Emanuel", "Chapala");
const ironMan = new Hero("Iron Man", 40, "Anthony Stark");

console.log(mane);
console.log(ironMan.name);
