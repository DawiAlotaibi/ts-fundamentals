import { Person } from './person';
import { Rectangle } from './rectangle';
//  Declaring Variables: Declare a variable called userName and assign your name as its value. Print the value
// of this variable to the console
let userName = 'Dawi';
console.log('Username: '+userName);

// Types: Declare a variable called age and assign your age as its value. Use an appropriate type that
// represents a numeric value. Print the value of this variable to the console.
let age: number = 23;
console.log('Age: '+ age);

// Arrow Functions: Write an arrow function called multiply that takes two parameters, a and b, and returns
// their product. Call the function with different sets of values and print the results

let multiply = (a: number, b: number): number => {
    return a * b;
}

console.log('Arrow fucntion multiply: ' + multiply(2, 3));

// Interfaces: Define an interface called Person with properties name (string), age (number), and email
// (string). Create an object using this interface and populate its properties. Print the object to the console.

let person: Person = {
    name: 'Dawi',
    age: 23,
    email: 'DawiAlotaibi47@gmail.com'
}

console.log('Interface person: '+person.name+', '+person.age+', '+person.email);

// Classes: Create a class called Rectangle with properties width and height. Implement a method called
// calculateArea that returns the area of the rectangle (width * height). Create an instance of the class, set its
// properties, and call the calculateArea method. Print the calculated area to the console.


let rectangle = new Rectangle(2,3);
// rectangle.width = 2;
// rectangle.height =3;
console.log('Rectangle public calculateArea: '+rectangle.calculateAreaPublic());

// Objects: Declare an object called book with properties title (string) and author (string). Print out the
// details of the book.
let book = {
    title: 'A day in the rain',
    author: 'Dawi Alotaibi'
}
console.log('Object book: '+book.title+', '+book.author);

// Modifiers: Add access modifiers (public, private, protected) to the properties and methods of the
// Rectangle class to control their visibility. Demonstrate their effects by attempting to access them from
// outside the class.

// Will return an error because it is private
//console.log('Rectangle private calculateArea: '+rectangle.calculateAreaPrivate());
