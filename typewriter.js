const sentence = "hello there from lighthouse labs";

let i = 0;
const printOut = setInterval(() => {
  process.stdout.write(sentence.charAt(i++));
  if (i > sentence.length) {
    console.log();
    clearInterval(printOut)
  }
}, 50)
console.log("\n");
