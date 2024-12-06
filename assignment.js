function feetToMile(feet) {
    if (feet < 0) {
        return "Distance cannot be negative";
    }
    const mile = feet / 5280;
    return mile.toFixed(2);
}

const nanaMile = feetToMile(15840);
console.log("Miles:", nanaMile);

function woodCalculator(chairs, tables, beds) {
    const chairWood = chairs * 1;
    const tableWood = tables * 3;
    const bedWood = beds * 5;
    return chairWood + tableWood + bedWood;
}

const totalWood = woodCalculator(14, 5, 12);
console.log("Total Wood Required:", totalWood);

function brickCalculator(floors) {
    if (floors <= 0) {
        return "Floor count must be positive";
    }

    let totalBricks = 0;

    if (floors <= 10) {
        totalBricks += floors * 15 * 1000;
    } else if (floors <= 20) {
        totalBricks += 10 * 15 * 1000;
        totalBricks += (floors - 10) * 12 * 1000;
    } else {
        totalBricks += 10 * 15 * 1000;
        totalBricks += 10 * 12 * 1000;
        totalBricks += (floors - 20) * 10 * 1000;
    }

    return totalBricks;
}

const totalBricks = brickCalculator(27);
console.log("Total Bricks Required:", totalBricks);

function tinyFriend(names) {
    if (names.length === 0) {
        return "Name list is empty";
    }

    let smallestName = names[0];

    for (let i = 1; i < names.length; i++) {
        if (names[i].length < smallestName.length) {
            smallestName = names[i];
        }
    }

    return smallestName;
}

const friends = ["miraj", "fahim", "afwan", "mahdhi", "marjan", "rezbi"];
const smallestFriend = tinyFriend(friends);
console.log("Smallest Name:", smallestFriend);
