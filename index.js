const btn = document.querySelector('#btn')
let enemyHealth = 100
let num = 10
let damage = 10
num - 3

// Functions

// 1: Write a function that on button click, decreases the enemyHealth variable by 10
btn.addEventListener('click',
// write function here:

)

// Adding your own damage

// same function but put damage into a variable

// btn.addEventListener("click", () => {
//   // don't pass a param for this one, don't know why it's not working
//   enemyHealth -= damage;
//   console.log(enemyHealth);
//   gsap.to(".healthbar", {
//     width: enemyHealth + "%",
//   });
// });

// IF STATEMENTS 
// Take in a boolean, code block runs depending on true or false 'if this, then that'
// declare a variable
let numbah = 1

if (numbah === 0) {
    console.log('goodbye world')
}

if (numbah === 0) {
    console.log('goodbye')
} else {
    console.log('hello world')
}

if (numbah > 0) {
    console.log()
}

btn.addEventListener("click", () => {
  // don't pass a param for this one, don't know why it's not working
  if (enemyHealth > 0) {
      enemyHealth -= damage;
  } else {
    console.log('ded')
  }
    console.log(enemyHealth);
});

//btn.addEventListener('click', () => {
// enemyHealth -= 10}
//);

// For Loops

// Objects
