


My earlier personal attempts
```js
let index2014=[]
index2014 = fifaData.map(function(e) { return (e.Year===2014) && (e.Stage==="Final"); }).indexOf("2014");
console.log("index2014", index2014)

"Year": 1930,
"Datetime": "13 Jul 1930 - 15:00",
"Stage": "Group 1",

const final2014 = fifaData.filter((game) => {  // The thing in parenthesis is the fifaData.filter.  And then the arrow is saying ...
   return (game.Year === 2014) && (game.Stage === "Final")
   })
console.log(final2014[0]["Home Team Name"])
```
___
Joo Woon did this!!
```js
let final2014 = fifaData.filter((item, index) =>{

    if (item.Year===2014 && item.Stage==="Final"){
console.log({index})

    } return (item.Year===2014 && item.Stage==="Final")
})
final2014[0].index = 828

console.log({final2014})
```
___
More notes from before
```js
for (let i =0; i < fifaData.length; i++){
    let index = 0;
if (fifaData[i].Year === 2014 && fifaData[i].Stage ==="Final"){
index = i
console.log(index)
}
}
```
I Think this is one from chat.
```js
const final2014 = fifaData.filter((item, index) => {
    if(item.Year === 2014 || item.Stage === "Final){
        console.log({index})
       }
return if(item.Year === 2014 || item.Stage === "Final)
})
```

Always use () when more than one arguments
{ } make console.log an object so its clear


More notes from when I was backing up and lost everything.
```js
let final2014 = fifaData.filter((item, index) =>{
    (item.Year===2014) && (item.Stage==="Final");

})
-----------------------------------------------
// for (let i =0; i < fifaData.length; i++){
//     let index = 0;
// if (fifaData[i].Year === 2014 && fifaData[i].Stage ==="Final"){
// index = i
// console.log(index)
// }
// Always use () when more than one arguments
// { } make console.log an object so its clear
// }
--------------------------------------
let final2014 = fifaData.filter((item, index) =>{
    (item.Year===2014) && (item.Stage==="Final");

})

// console.log(final2014)
-------------------------------------------
let final2014 = fifaData.filter((item, index) =>{
    (item.Year===2014) && (item.Stage==="Final");

    if (item.Year===2014 && item.Stage==="Final"){
console.log({index})

    } return (item.Year===2014 && item.Stage==="Final")
})
final2014[0].index = 828
------------------------------------
___


let final2014 = fifaData.filter((item, index) =>{

    if (item.Year===2014 && item.Stage==="Final"){
console.log({index})

    } return (item.Year===2014 && item.Stage==="Final")
})
final2014[0].index = 828

console.log({final2014})
```
```js
let final2014 = fifaData.filter((item, index) =>{
    if ((item.Year===2014) && (item.Stage==="Final"));
    console.log({index});

})
```

let numbers = [4,2,6];

numbers.sort = ((a,b) => b-a);

console.log(numbers); // [6,4,2]
