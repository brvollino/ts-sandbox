// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//    Exercise 3 – Classes
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • Create classes with typed properties and methods
// • Add access modifiers to class members

export default () => {

  // ======== Exercise 3.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event: string = 'party'): string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Exercise 3.1]', mc.greet('show'));


  // ======== Exercise 3.2 ========
  // Goals:
  // • Add explicit parameter types to constructor
  // • Add typed parameters for storing values

  class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Exercise 3.2]', `The new person's name is ${jane.name}.`);


  // ======== Exercise 3.3 ========
  // Goals:
  // • Explicitly make the title and salary properties publicly available
  // • Reduce class to three lines of code while maintaining functionality

  class Employee {
    constructor(public title: string, public salary: number) {}
  }

  const employee = new Employee('Engineer', 100000);

  console.log('[Exercise 3.3]', `The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


  // ======== Exercise 3.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  abstract class Animal {
    constructor(private name: string) {}
    move(meters: number): void {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake extends Animal {
    move(meters: number = 5): void {
      console.log('Slithering...');
      // should call on parent's `move` method, w/ a default
      // slither of 5 meters
      super.move(meters);
    }
  }

  class Pony extends Animal {
    move(meters: number = 60) {
      console.log('Galloping...');
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
      super.move(meters);
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.
  //const andrew = new Animal("Andrew the Animal");
  //andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  //console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  //console.log(pokey.name); // Should return error

  // ======== Exercise 3.5 ========
  // Goals:
  // • Make it so that only the Desk and Chair classes can see the 
  //   manufacturer member

  class Furniture {
    constructor(protected manufacturer: string = 'IKEA') {}
  }

  class Desk extends Furniture {
    kind() {
      console.log('[Exercise 3.5]', `This is a desk made by ${this.manufacturer}`);
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log('[Exercise 3.5]', `This is a chair made by ${this.manufacturer}`);
    }
  }

  const desk = new Desk();
  desk.kind();
  //desk.manufacturer; // Should return error

  const chair = new Chair();
  chair.kind();
  //chair.manufacturer; // Should return error

  // ======== Exercise 3.6 ========
  // Goals:
  // • Eliminate the error without changing references to `Student.school`

  class Student {
    public static school: string = 'Harry Herpson High School';
    constructor(private name: string) {};
    introduction() {
      console.log('[Exercise 3.6]', `Hi, my name is ${this.name} and I attend ${Student.school}`);
    }
  }

  const student = new Student('Morty');
  console.log(Student.school);
  student.introduction();
}
