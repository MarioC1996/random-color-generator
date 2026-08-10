import hashColor from 'hash-color-material';

console.log(hashColor.getColorFromString('Hello world!'));

hashColor.getColorFromString('Hello world!');

const color = hashColor[Math.floor(Math.random()* hashColor.length)];
console.log(color);
