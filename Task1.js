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

// for (let i =0; i < fifaData.length; i++){
//     let index = 0;
// if (fifaData[i].Year === 2014 && fifaData[i].Stage ==="Final"){
// index = i
// console.log(index)
// }
// Always use () when more than one arguments
// { } make console.log an object so its clear
// }

let final2014 = fifaData.filter((item, index) =>{

    if (item.Year===2014 && item.Stage==="Final"){
console.log({index})

    } return (item.Year===2014 && item.Stage==="Final")
})
final2014[0].index = 828

console.log({final2014})
// console.log(final2014)

// let index2014=[]
// index2014 = fifaData.map(function(e) { return (e.Year===2014) && (e.Stage==="Final"); }).indexOf("2014");
// console.log("index2014", index2014)

// "Year": 1930,
// "Datetime": "13 Jul 1930 - 15:00",
// "Stage": "Group 1",

// const final2014 = fifaData.filter((game) => {  // The thing in parenthesis is the fifaData.filter.  And then the arrow is saying ...
//     return (game.Year === 2014) && (game.Stage === "Final")
// })
// console.log(final2014[0]["Home Team Name"])



// Task 1: Investigate the data above. Practice accessing data by console.logging the following pieces of data

// // (a) Home Team name for 2014 world cup final
// const final2014 = fifaData.filter((game) => (game.Year === 2014) && (game.Stage === "Final"))
// console.log("2014 Finals : ", final2014[0]["Home Team Name"])

// // (b) Away Team name for 2014 world cup final
// console.log(final2014[0]["Away Team Name"])
// // (c) Home Team goals for 2014 world cup final
// console.log(final2014[0]["Home Team Goals"])
// // (d) Away Team goals for 2014 world cup final
// console.log(final2014[0]["Away Team Goals"])
// // (e) Winner of 2014 world cup final
// if (final2014[0]["Home Team Goals"] > final2014[0]["Away Team Goals"]){
// console.log("Winner: "+ final2014[0]["Home Team Name"])
// } else {
//     console.log("Winner: "+ final2014[0]["Away Team Name"])
// }
