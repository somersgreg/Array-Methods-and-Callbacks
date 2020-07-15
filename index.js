import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
// let year=[]
// let data=[]
var yearData=prompt("Enter the Year , Data sought","2014,Home Team Name"), targetYear=yearData.split(",")[0],data=yearData.split(",")[1];
console.log('data: ', data);
console.log('targetYear: ', targetYear);
console.log('yearData: ', yearData);
// >  A BAD CONSOLE LOG HERE WAS STOPPING THE REST OF MY CODE FROM RUNNING
// >  FOR THIS STUPID REASON I DELETED ALL MY WORK.
// <  I NEED A WAY TO WRITE A LOT OF CODE THATS ONLY FOR TESTING BUT NOT DELETE THAT CODE WHEN I FINALLY DECIDE WHICH TO GO WITH. 
// <  I NEED TO KNOW HOW TO WATCH THE CODE RUN IN CONSOLE AND STEP SO I CAN DEBUG BETTER
// <  I NEED TO HAVE A METHOD FOR DOING SURE INTERVAL CHACKS TO MAKE SURE MY CODE IS RUNNING
// <  I COULD ANNOUNCE LINE NUMBERS SOMEHOW MAYBE IF I KNOW HOW TO ACCESS THAT INFORMATION

// <  Now i want to search for the index matching the year but not with a loop (although it the same 'under the hood)
// <  P$UEDOCODEING: I WANT TO FIND FIFADATA[I#] FOR THE USER DEFINED YEAR AND THEN APPLY THAT IN A SIMPLE CONSOLE LOG TO POP OFF ALL THE DESIRED INFO.

// NOTES: forEach is the "loop through them all" function, but ES5 defined several other useful "work your way through the array and do things" functions, including:
// every (stops looping the first time the callback returns false or something falsey)
// some (stops looping the first time the callback returns true or something truthy)
// filter (creates a new array including elements where the filter function returns true and omitting the ones where it returns false)
// map (creates a new array from the values returned by the callback)
// reduce (builds up a value by repeatedly calling the callback, passing in previous values; see the spec for the details; useful for summing the contents of an array and many other things)
// reduceRight (like reduce, but works in descending rather than ascending order)

// < For some.year === year then console log i.
function fifaParse(targetYear){
    for(let i=0; i<fifaData.length; i++) {
      if (fifaData[i].year === targetYear) { 
        return(fifaData[i]);  // <  HOW DO I GET THE INDEX # FROM THIS?
      }
    }
}
console.log('fifaData[i]: ', targetYear);
fifaParse(targetYear)
// (b) Away Team name for 2014 world cup final
// (c) Home Team goals for 2014 world cup final
// (d) Away Team goals for 2014 world cup final
// (e) Winner of 2014 world cup final


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(/* code here */) {

    /* code here */

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {

    /* code here */

};

getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
