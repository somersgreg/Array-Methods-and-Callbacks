import { fifaData } from './fifa.js';
console.log(':  : :: Task 2 :: :  :');

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

const finalsData = []
function getFinals(data) {
    for (let i=0;i<data.length;i++){
       if ((data[i].Stage === "Final")){
       finalsData.push(data[i])

    }
}}
console.log("getFinals -> finalsData", {finalsData})
getFinals(fifaData)