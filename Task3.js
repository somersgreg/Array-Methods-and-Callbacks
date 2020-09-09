import { fifaData } from './fifa.js';
console.log(':  : :: Task 3 :: :  :');

function getFinals(d){
    const a = d.filter(d => d.Stage === "Final");
    return (a);
  }
  console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears`
 that accepts the callback function `getFinals`,
 and returns an array called `years`
 containing all of the years in the dataset */

function getYears(cb){
    const y = cb[0].Year

    console.log("getYears -> y", y)

  }
  getYears(getFinals)
