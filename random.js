var num = Math.random();
console.log(num);

var num10 = num * 10;
console.log(num10);

var numRedondo = Math.floor(num10); 
console.log(numRedondo);


// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
