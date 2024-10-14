//  Challenge 1
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

let markBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI

console.log(markBMI, johnBMI)
console.log(markHigherBMI)

// Challenge 2
if (markBMI > johnBMI) {
    let markResponse = `Mark's BMI ${markBMI} is higher than John's!`;
    console.log(markResponse)
}
else {
    let johnsResponse = `Johns's BMI ${johnBMI} is higher than John's!`;
    console.log(johnsResponse)
}