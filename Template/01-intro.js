// Global  - No Window (Window მაგივრად)

// __dirname - path to currentDirectory ()
// __filename - filename
// require - funtion to use modules (commonJS)
// modules - info about curent module
// process - info about env where program is executed

console.log(__dirname); // Directory Path
console.log(__filename); // File Path

let i = 0;
let interval = setInterval(() => {
  i++;
  console.log(i);
  if (i === 5) {
    clearInterval(interval);
  }
}, 1000);
