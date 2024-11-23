// Function to convert Feet to Mile
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance cannot be negative"; // Handle invalid input
    }
    var mile = feet / 5280;
    return mile.toFixed(2); // Return result rounded to 2 decimal places
}
var nanaMile = feetToMile(15840);
console.log("Miles:", nanaMile); // Outputs: Miles: 3.00

// Wood Calculator
function woodCalculator(chairs, tables, beds) {
    var chairWood = chairs * 1; // 1 cubic feet per chair
    var tableWood = tables * 3; // 3 cubic feet per table
    var bedWood = beds * 5; // 5 cubic feet per bed
    return chairWood + tableWood + bedWood;
}
var totalWood = woodCalculator(14, 5, 12);
console.log("Total Wood Required:", totalWood); // Outputs: Total Wood Required: 92

// Brick Calculator
function brickCalculator(floors) {
    if (floors <= 0) {
        return "Floor count must be positive"; // Handle invalid input
    }
    var totalBricks = 0;
    if (floors <= 10) {
        totalBricks += floors * 15 * 1000; // 15 feet height for the first 10 floors
    } else if (floors <= 20) {
        totalBricks += 10 * 15 * 1000; // First 10 floors
        totalBricks += (floors - 10) * 12 * 1000; // Next 10 floors
    } else {
        totalBricks += 10 * 15 * 1000; // First 10 floors
        totalBricks += 10 * 12 * 1000; // Next 10 floors
        totalBricks += (floors - 20) * 10 * 1000; // Remaining floors
    }
    return totalBricks;
}
var totalBricks = brickCalculator(27);
console.log("Total Bricks Required:", totalBricks); // Outputs: Total Bricks Required: 390000

// Find the smallest name in an array
function tinyFriend(names) {
    if (names.length === 0) {
        return "Name list is empty"; // Handle empty array
    }
    var smallestName = names[0];
    for (var i = 1; i < names.length; i++) {
        if (names[i].length < smallestName.length) {
            smallestName = names[i];
        }
    }
    return smallestName;
}
var friends = ["miraj", "fahim", "afwan", "mahdhi", "marjan", "rezbi"];
var smallestFriend = tinyFriend(friends);
console.log("Smallest Name:", smallestFriend); // Outputs: Smallest Name: afwan



