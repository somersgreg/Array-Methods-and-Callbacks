import { fifaData } from "./fifa.js";
// console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data*/

const newfifaData = fifaData.filter(function (item) {
  return item.Year === 2014 && item.Stage === "Final";
});
console.log({ newfifaData });

// (a) Home Team name for 2014 world cup final
console.log(newfifaData[0]["Home Team Name"]);
// (b) Away Team name for 2014 world cup final
console.log(newfifaData[0]["Away Team Name"]);
// (c) Home Team goals for 2014 world cup final
console.log(newfifaData[0]["Home Team Goals"]);
// (d) Away Team goals for 2014 world cup final
console.log(newfifaData[0]["Away Team Goals"]);

// (e) Winner of 2014 world cup final
let Winner = [];
const fifaWinner = () => {
  if (newfifaData[0]["Home Team Goals"] > newfifaData[0]["Away Team Goals"]) {

    Winner = newfifaData[0]["Home Team Name"];
    console.log("Winner:", Winner) // Winner: Germany
  } else {
    Winner = newfifaData[0]["Away Team Name"];
    console.log("Winner:", Winner)
  }
    return Winner;
};
fifaWinner();
console.log("fifaWinner -> Winner", Winner)  // index.js:38 Uncaught ReferenceError: Winner is not defined at index.js:38 (anonymous) @ index.js:38


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(da){
  const na = da.filter(da.Stage==="Final")
  return na
}
console.log("getFinals(da)", getFinals({da}))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
  /* code here */
}

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(/* code here */) {
  /* code here */
}

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {}

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {
  /* code here */
}

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
