import { fifaData } from "./fifa.js";
console.log(":  : :: Task 1 :: :  :");
// ⚽️ M V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// Woon with index method
let final2014 = fifaData.filter((item, index) => {
  // this index plays what part in this function?

  if (item.Year === 2014 && item.Stage === "Final") {
    console.log({ index }); // {index: 828}
  }
  return item.Year === 2014 && item.Stage === "Final"; // is this return applying the value of fifaData[828] to final2014? It means that the return essentially means "assign" this value to the variable.  But i thought return command wasn't neccessary.
});
final2014[0].index = 828; // is this pushing to the new array without a implicit .push?

console.log({ final2014 }); //{final2014: Array(1)}

// Original!!
// const final2014 = fifaData.filter((game) => (game.Year === 2014) && (game.Stage === "Final"))
// Woon short method
// let final2014 = fifaData.filter((item, index) =>
// (item.Year===2014 && item.Stage==="Final"))

// console.log({final2014}) // {final2014: Array(1)}
// console.log(final2014) // [{...}]
f
// (a) Home Team name for 2014 world cup final
console.log("2014 Finals Home Team :", final2014[0]["Home Team Name"]);
// (b) Away Team name for 2014 world cup final
console.log("2014 Finals Away Team :", final2014[0]["Away Team Name"]);
// (c) Home Team goals for 2014 world cup final
console.log("Home Team Goals", final2014[0]["Home Team Goals"]);
// (d) Away Team goals for 2014 world cup final
console.log("Away Team Goals", final2014[0]["Away Team Goals"]);
// (e) Winner of 2014 world cup final
if (final2014[0]["Home Team Goals"] > final2014[0]["Away Team Goals"]) {
  console.log("Winner: " + final2014[0]["Home Team Name"]);
} else {
  console.log("Winner: " + final2014[0]["Away Team Name"]);
}
// in the case of a tie then other rules needed like if !===
