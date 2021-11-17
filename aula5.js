const {alfabeto} = require('./base');

// [abc]  => Conjunto 
// [^abc] => Negacao
// [0-9]  => Range

console.log(alfabeto)
console.log(alfabeto.match(/[abc123]+/g));
console.log(alfabeto.match(/[^abc123]+/g));
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) 