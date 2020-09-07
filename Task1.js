import { fifaData } from './fifa.js';
console.log(':  : :: Task 1 :: :  :');
// ⚽️ M V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
console.log the Home Team name from the 2014 final.
Since this is all for 2014 I can pull out just 2014 and then log from there by using which methode?

(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
let element = []
let final2014 = fifaData.filter(element => "Year"===2014 && "Stage"==="Final")
console.log("element", element)
console.log(final2014)


// "Year": 1930,
// "Datetime": "13 Jul 1930 - 15:00",
// "Stage": "Group 1",