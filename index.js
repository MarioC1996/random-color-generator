import ansis, { bold, cyan, hex, red, rgb } from 'ansis';
// import ansis color library for terminals
import randomColor from 'randomcolor';

// import an npm called "randomcolor" for generating random colors
const colorHue = process.argv[2];
const colorLuminosity = process.argv[3];

const color = randomColor({
  hue: colorHue,
  luminosity: colorLuminosity
});



console.log(
    hex(color)(`
###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
`),
  );



