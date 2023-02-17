

// Day-2 and day-3 same



// what is React?
// => A JavaScript library for building user interfaces.


// 1. Composition
// 2. Declarative Code
// 3. Unidirectional Data Flow
// 4. React is JavaScript



// Compositions ?
// to combine simple functions to build more complicated ones.


// Declarative in nature ?
// Imperative vs Declarative
// => Imperative code instructs javascript on how it should perform each step.
// => With declarative code, we tell javascript what we want to be done, and let javascript take care of performing the steps. 


// Imperative code
let arr = ['Kawsar', 'Imran', 'Samim', 'Javed'];
let friends = [];
for (let i = 0; i < arr.length; i++) {
    friends.push(arr[i] + '!')    
}

console.log(friends)



// Declarative code
// declarative code is more focus to the goal
friends = arr.map(friend => '!' + friend)
console.log(friends)







// Unidirectional Data Flow
// parent theke child e data jabe. child er kuno data change korar dorkar hole se parent e information patabe
// parent tokhon data change korbe




// React is Just JavaScript




// JSX Rules
// closing tag is mandatory in JSX
// reserved keyword mus be check
// multiple element wrapped by parent element
// in JSX curly bracket use expression









