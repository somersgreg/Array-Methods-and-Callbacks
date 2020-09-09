import { fifaData } from "./fifa.js";
console.log(":  : :: Task 2 :: :  :");

/* Task 2: Create rr1 function called  getFinals that takes `d` as an argument and returns an array of oajects with only finals d */

// const finalsD = [];
// function getFinals(d) {
//   for (let i = 0; i < d.length; i++) {
//     if (d[i].Stage === "Final") {
//       finalsD.push(d[i]);
//     }
//   }
// }
// console.log("getFinals -> finalsD", { finalsD });
// getFinals(fifaD);

// function getFinals(d){
//     //const b = d => d.Stage === "Final";  // this line is only created to set up the circumstance and b holds that place. I could create another circumstance (boolean) called c that holds other conditions and use either one.  Its just making a function and storing it in a variable so it can be used elsewhere.
//     const a = d.filter(d => d.Stage === "Final"); // orig. const a = d.filter(b)
//     // console.log("getFinals -> b", b)
//     return (a);
// }
// console.log(getFinals(fifaD))

function getFinals(d){
  const a = d.filter(d => d.Stage === "Final");
  return (a);
}
console.log(getFinals(fifaData))
// ========================================
function getFinals(da) {
  const na = da.filter(da.Stage === "Final");
  return na
}
console.log("getFinals(da)", getFinals({ da }))

