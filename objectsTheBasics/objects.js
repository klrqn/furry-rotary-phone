// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false
//   } else {
//     return true
//   }
// }

// for (let key in obj)
// for (let key in obj)
// for (let key in obj)
// for( let key in obj)
// for (let key in obj)
// for )let key in obj)
// for (let key in obj)
// for (let key in obj)
// for (let key in obj)

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false
//   } 
//     return true
//   }
// }
// =================
// sum object basics

function sumObjectValues(object) {
  let sum = 0
  for (const property in object) {
    sum += object[property]
  }
  return sum
}

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

function multiplyNumeric(obj) {
  for (let property in obj) {
    if (!isNaN(obj[property])) {
      obj[property] *=2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu)