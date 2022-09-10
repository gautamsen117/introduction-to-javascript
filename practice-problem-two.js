var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;
// total marks
var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
// average marks
var averageMarks = totalMarks / 5;
console.log(averageMarks);
// now print two decimal places
averageMarks = averageMarks.toFixed(2);
console.log(averageMarks);
// averageMarks string to number
averageMarks = parseFloat(averageMarks);
console.log(averageMarks);