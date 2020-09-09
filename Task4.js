import { fifaData } from './fifa.js';
console.log(':  : :: Task 3 :: :  :');

function getFinals(d){  // fifaData becomes d
    const a = d.filter(d => d.Stage === "Final");  // a is d after processed

    return a  // now processed a is the output of the getFinals fn
  }
  console.log("Global - Task - getFinals:", [getFinals(fifaData)])  // by putting in brackets it becomes an array output

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */
const winners = []
function getWinners(cb) {
}
console.log("Task 4 - getWinners:", getWinners(getFinals));
