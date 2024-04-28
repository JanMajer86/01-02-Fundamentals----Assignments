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
