"use strict";

// lecture: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const finland = describeCountry("Finland", 6, "Helsinki");
const czechRepublic = describeCountry("Czech Republic", 10.6, "Prague");
const germany = describeCountry("Germany", 83.8, "Berlin");
console.log(finland);
console.log(czechRepublic);

const finlandPopulation = 6;
const czechRepublicPopulation = 10.6;
const germanyPopulation = 83.8;
const worldPopulation = 8100;

// function declaration
function percentageOfWorld1(population) {
  const percentage = (population / worldPopulation) * 100;
  return percentage;
}

// function expression
const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

// arrow function

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const finlandPercentage = percentageOfWorld1(finlandPopulation);
const finlandPercentage2 = percentageOfWorld2(finlandPopulation);
const finlandPercentage3 = percentageOfWorld3(finlandPopulation);
console.log(finlandPercentage);
console.log(finlandPercentage2);
console.log(finlandPercentage3);

const czechPercentage = percentageOfWorld1(czechRepublicPopulation);
const czechPercentage2 = percentageOfWorld2(czechRepublicPopulation);
const czechPercentage3 = percentageOfWorld3(czechRepublicPopulation);
console.log(czechPercentage);
console.log(czechPercentage2);
console.log(czechPercentage3);

const germanyPercentage = percentageOfWorld1(germanyPopulation);
const germanyPercentage2 = percentageOfWorld2(germanyPopulation);
const germanyPercentage3 = percentageOfWorld3(germanyPopulation);
console.log(germanyPercentage);
console.log(germanyPercentage2);
console.log(germanyPercentage3);

// Lecture: Functions calling other functions

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people,
    which is about ${percentage}% of the world.`;
}

console.log(describePopulation("Germany", 83.8));
console.log(describePopulation("Czech Republic", 10.6));
console.log(describePopulation("Finland", 6));

// Lecture: Introduction to Arrays

const populations = [83.8, 10.6, 6, 1417];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const neighbours = ["Germany", "Poland", "Slovakia", "Austria"];
neighbours.push("Utopia");
neighbours.pop();

console.log(neighbours);

console.log(
  `Propably ${
    neighbours.includes("Germany") ? "" : "not"
  } a central European country.`
);

neighbours[1] = "Poland Republic";
console.log(neighbours);

// Lecture: Introduction to Objects

const myCountry = {
  country: "Czech Republic",
  capital: "Prague",
  language: "czech",
  population: 10.6,
  /*"Germany", "Poland", "Slovakia", "Austria"*/
  neighbours: ["Germany", "Poland", "Slovakia", "Austria"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// Dot vs Bracket Notation

myCountry.population += 2;
myCountry["population"] -= 2;

// Object Methods

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);

// Lecture: Iteration: The for Loop

// for (let i = 1; i <= 50; i++) {
//   console.log(`Vote number ${i} is currently voting`);
// }

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
