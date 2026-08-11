import ansis, { bold, cyan, hex, red, rgb } from 'ansis';
// import ansis color library for terminals
import randomColor from 'randomcolor';

// import an npm called "randomcolor" for generating random colors

const color = randomColor();
const colorHueLuminosity= randomColor({
  luminosity: process.argv[2],
  hue: process.argv[3]
});
const colorHue = randomColor({
  hue: process.argv[2]
});
const colorLuminosity = randomColor({
  luminosity: process.argv[2]
});

/*console.log(console.log(hex(colorHueLuminosity)(`
###############################
###############################
###############################
#####                     #####
#####       ${colorHueLuminosity}       #####
#####                     #####
###############################
###############################
###############################
`)));
*/


if (process.argv[2] === 'red' || 'blue' || 'green' ){
  console.log(hex(colorHue)(`
###############################
###############################
###############################
#####                     #####
#####       ${colorHue}       #####
#####                     #####
###############################
###############################
###############################
`));
}else if(process.argv[2] === 'light' || 'dark'){
  console.log(console.log(hex(colorLuminosity)(`
###############################
###############################
###############################
#####                     #####
#####       ${colorLuminosity}       #####
#####                     #####
###############################
###############################
###############################
`)));
}else if((process.argv[2]=== 'red' || 'blue' || 'green' ) && (process.argv[3] === 'light' || 'dark')){
  console.log(hex(colorHueLuminosity)(`
###############################
###############################
###############################
#####                     #####
#####       ${colorHueLuminosity}       #####
#####                     #####
###############################
###############################
###############################
`));

  }else {
  console.log(hex(color)(`
###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
`));
};




//console.log(process.argv[2]);
//console.log(randColor);
