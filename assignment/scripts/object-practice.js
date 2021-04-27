console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Dillon',
  lastName: 'Baxendell',
  hasSiblings: true,
  shoeCount: 6,
  favThreeFoods: ['Chicken Tikka Masala', 'Tacos', 'Peanut Butter Cookies']
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/

let fullName = me.firstName + ' ' + me.lastName;

console.log( `My full name is ${fullName}.` );

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/

console.log( `My number one favorite food is ${me.favThreeFoods[0]}.` );

console.log( `The last item in favThreeFoods is ${me.favThreeFoods[ me.favThreeFoods.length - 1 ]}.` );

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/

console.log( `I started with ${me.shoeCount} pairs of shoes.` );

me.shoeCount = me.shoeCount + 1;
//OR
me.shoeCount = 7;

console.log( `I now own ${me.shoeCount} pairs of shoes.` );

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Blue';

console.log( `My favorite color is ${me.favoriteColor}.` );
