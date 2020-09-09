const soccerClubs = [
    {id: 0, name: "Manchester United FC", city: "Manchester", country: "England", league:"EPL", titles: 20 },
    {id: 1, name: "Juventus", city: "Turin", country: "Italy", league: "Serie A", titles: 35},
    {id: 2, name: "FC Schalke 04", city: "Schalke", country: "Germany", league: "Bundesliga", titles: 7},
    {id: 3, name: "LA Galaxy", city: "Los Angeles" , country: "United States", league: "MLS", titles: 5},
    {id: 4, name: "Real Madrid", city: "Madrid", country: "Spain", league: "La Liga", titles: 33},
    {id: 5, name: "PSG", city: "Paris", country: "France", league: "Ligue 1", titles: 8},
    {id: 6, name: "Bayen Muich", city: "Munich", country: "Germany", league: "Bundesliga", titles: 29},
    {id: 7, name: "Toronto FC", city: "Toronto", country: "Canada", league: "MLS", titles: 1},
    {id: 8, name: "Club America", city: "Mexico City", country: "Mexico", league: "Liga MX", titles: 13},
    {id: 9, name: "Boca Juniors", city: "Buenos Aires", country: "Argentina", league: "Copa Libertadores", titles: 6},
    {id: 10, name: "Arsenal FC", city: "London", country: "England", league: "EPL", titles: 13},
    {id: 11, name: "Real Salt Lake", city: "Salt Lake City", country: "United States", league: "MLS", titles: 1},
    {id: 12, name: "Valencia CF", city: "Valencia", country: "Spain", league: "La Liga", titles: 6},
    {id: 13, name: "AFC Ajax", city: "Amsterdam", country: "Netherlands", league: "Eredivisie", titles: 25},
    {id: 14, name: "FC Porto", city: "Porto", country: "Portugal", league: "Primeira Liga", titles: 28},
]

// Refactor the following functions into arrow syntax
// A)
function sayHello(){
    return "Greetings my friend"
}
// This took many tries over an hour.
// - Didnt need to declare as a variable with var, const, let.
// - Did need to make equal to empty fn keyhole thing - ()
// - Didnt need to put "Hello" in keyhole.
sayHello = () => "Hello"  //  It runs the last instance !
console.log("sayHello", sayHello)   // sayHello () => "Hello".   This method prints the fn.
console.log("sayHello", sayHello()) // sayHello Hello.          This method prints the return value.
// B)
function multiply(a, b){
    return a * b
}
// This took a minute.
// - Needed two arguments, values or parameters. I dont know the terms.
// - The name of the value is called a parameter.
// - The actual value itself is called an argument.  Now I know. Its...
// - The function accepted two parameters, so it got two values: argument one and argument two.
multiply = (a, b) => a * b
console.log("multiply", multiply(2,3))
// C)
// function scoreKeeper(){
//     let score = 0

//     return function(){
//         score++
//         return score
//     }
// }
// This is nested but I dont know if its closure.
// - I dont know where to begin.
// - Inside is an annonymous function.
// - I dont know how to return. If it has {} its needed.
// - If multiple lines the c.brackets and return come back.
// - 30 mins later I dont know how to treat the second return.
// - scoreKeeper -> scoreKeeper () => score++
let scoreKeeper = () => {
    let score = 0 ;
      {() => score++};  // Same without these c.brackets.
        return score  // unreachable code.
    }  // ASK BARBARA HOW TO DO THIS ONE
console.log("scoreKeeper -> scoreKeeper", scoreKeeper())

// Use a combination of array methods and arrow functions to solve the following tasks


// Task 1

/*
Create a function `teamCities` that prints out the following for each team in the array
`${team} is located in ${city} and has won $${titles} ${league} titles`
*/
//  I dont know what Im doing.  This is just sad.

teamCities = (arr) => {
  arr.forEach(element => {
        return `${team} is located in ${city} and has won ${titles} ${league} titles`
})};
teamCities(soccerClubs)

// Task 2

/*
Create a new array `bestTeams` that contains all teams that have won over 20 titles
*/


// Task 3

/*
Create a new array `teamCountries` that contains a team's name and country
Example: `Manchester United is located in England`
*/


// Task 4

/*
Print the total number of titles win by teams in Germany and the Netherlands
*/


// Task 5

/*
Create a new array of each team's name sorted in alphabetical order
*/

