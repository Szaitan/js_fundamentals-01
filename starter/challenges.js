// Coding Challenge #3

// Test data 1
// dolphinsDataa = (96 + 108 + 89) / 3
// koalasDataa = (88 + 91 + 110) / 3

// Test data 2
// dolphinsDataa = (97 + 112 + 101) / 3
// koalasDataa = (109 + 95 + 123) / 3

// Test data 3
// dolphinsDataa = (97 + 112 + 101) / 3
// koalasDataa = (109 + 95 + 106) / 3

// if (dolphinsDataa > koalasDataa && dolphinsDataa >= 100) {
//     console.log(`Dolphins score ${dolphinsDataa} wins!`)
// } else if (dolphinsDataa < koalasDataa && koalasDataa >= 100) {
//     console.log(`Koalas score ${koalasDataa} wins!`)
// } else if (dolphinsDataa === koalasDataa && dolphinsDataa >= 100) {
//     console.log("Its a draw!")
// } else {
//     console.log("There is no winer")
// }

// Coding Challenge #4

let tip;

// bill 1 
// const bill = 275;

// bill 2
// const bill = 40;

// bill 3 
const bill = 430;

tip = bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

