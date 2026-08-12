# Node.js Random Color Generator

Node.js CLI which generates random colors


Without any input,  a block of 31x9 # characters colored with a random color (using hex code, e.g. #ff0000) should be generated.
```bash
node index.js
###############################
###############################
###############################
#####                     #####
#####       #ff0000     #####
#####                     #####
###############################
###############################
###############################
```

With user input it should be able to accept the request for a:
 hue (eg. green or red or blue)
luminosity (eg. light or dark)
...and then generate random colors that match those choices.

```bash


node index.js blue
###############################
###############################
###############################
#####                     #####
#####       #4c56aa     #####
#####                     #####
###############################
###############################
###############################
node index.js red light
###############################
###############################
###############################
#####                     #####
#####       #ff72d2     #####
#####                     #####
###############################
###############################
###############################
```
