const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
let player = {
  damage: 10,
  health: 100,
  name: "PLAYER",
};
let enemy = {
  damage: 10,
  health: 100,
  name: "Eren Yeager",
};

// OBJECTS CONTINUED

// Task 1: Add in 2 objects to the player Object, one with the name position that has
// 2 keys with values x and y, and the second object names size with 2 keys called width and height
// Their values should be positive integers