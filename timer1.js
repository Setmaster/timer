const args = process.argv.slice(2);

if (args.length === 0) {
  throw new Error("No numbers provided");
}

for (const arg of args) {
  if (isNaN(arg) || arg < 0) {
    continue;
  }
  setTimeout(()=>{
    process.stdout.write("\x07");
  }, arg * 1000);
}
