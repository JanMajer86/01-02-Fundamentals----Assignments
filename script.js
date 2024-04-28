"use strict";

const country = "Czech Republic";
const continent = "Europe";
let population = 10000000;
const isIsland = false;
const language = "czech";

population = 10670000;

const populationFinland = 6000000;
const populationAverage = 33000000;

// if (population > populationFinland) console.log("more people than Finland");
// const averageLog = population > populationAverage ? "more" : "less";
// console.log(`${country} has ${averageLog} people than average country`);

// const stringOutput =
//     country +
//     " is in " +
//     continent +
//     ", and it's " +
//     population +
//     " people speak " +
//     language;
const stringOutput = `${country} is in ${continent}, and its ${
    population / 1000000
} million
people speak ${language}`;
console.log(stringOutput);

const halfcountry = population / 2;
console.log(halfcountry);

if (population > populationAverage)
    console.log(`${country}'s population is above average.`);
else
    console.log(
        `${country}'s population is ${
            (populationAverage - population) / 1000000
        } million below average.`
    );

// const numNeighbours = Number(
//     prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) console.log("Only 1 border");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");

if (!isIsland && language === "english" && population < 50000000) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case "chinese" || "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :Đ");
}

console.log(
    `${country}'s population is ${
        population > populationAverage ? "above" : "below"
    } average`
);
