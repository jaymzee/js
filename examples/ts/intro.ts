interface Person {
    name: string;
    age: number;
}

let p1 = {
    name: 'joe',
    age: 42,
    when: new Date()
}

// typescript is structural. p1 is a Person
let p1_: Person = p1;

// implements will insure the methods are provided but it isn't strictly
// necessary for Student to be a Person (typescript is structural)
class Student implements Person {
    name: string;
    age: number;
    private secret: number = 9;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak(): void {
        console.log(`hi my name is ${this.name} and my secret ` +
                    `is ${this.secret}`);
    }
}

// easy to make an immutable type
const p2: Readonly<Person> = p1;

// you can also make arrays immutable
const numbers: ReadonlyArray<number> = [...Array(10).keys()];
//numbers.push(42);
console.log(numbers);

type MyThing = {a: number} & {b: string};
type Shape = { kind: "circle", radius: number }
           | { kind: "square", x: number };

let s1: Shape = { kind: "circle", radius: 5 }
let s2: Shape = { kind: "square", x: 8 }

function foo(s: Shape) {
    switch (s.kind) {
        case "circle":
            console.log(`its a circle with radius ${s.radius}`);
            break;
        case "square":
            console.log(`its a square with side ${s.x}`);
            break;
        default:
            break;
    }
}

foo(s1);
foo(s2);

function firstish<T extends { length: number }>(t1: T, t2: T): T {
    return t1.length > t2.length ? t1 : t2;
}

let z = firstish([2,3], [1]);
console.log(z);

interface Speaks {
    speak()
}

let s3 = {
    speak(): void {
        console.log('hi');
    }
}

class Potato {
    speak() {
        console.log('im a potato');
    }
}

let s4 = new Potato();

function bar(s: Speaks) {
    s.speak();
}

bar(s3);
bar(s4);
