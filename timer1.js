const args = process.argv.slice(2);
// console.log('args:', args);
const beep = () => {
  process.stdout.write('\x07');
}
if(args.length === 0 ){
  console.log("Error: no number entered.");
  process.exit();
}
args.forEach((alarmInterval) => {
  if (isNaN(alarmInterval) || alarmInterval < 1) {
    console.log(`${alarmInterval}: is an invalid alarm time.`);
    return;
  }
  setTimeout (() => {
    beep();
  }, alarmInterval * 1000);
});



// if (args[i] < 1 || args[i] === NaN ){
//   // ignore and skip to the next one
// }

// if (args[i] )