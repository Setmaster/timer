const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const beep = ()=> process.stdout.write("\x07");

stdin.on("data", (key) => {
  if (key === "\u0003") {
    process.stdout.write("Thanks for using me ciao!");
    process.exit();
  }

  if (key === "b") {
    beep();
  }

  if (!isNaN(key) && key > 0 && key < 10) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(beep, key * 1000);
  }
});
