# Notes - Project Arrays, Methods, & Callbacks
## The **forEach()** method executes a provided function once for each array element.
```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
### Syntax
```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```
## <u>Parameters</u>
## callback
Function to execute on each element. It accepts between one and three arguments:\
## currentValue
The current element being processed in the array.\
### index <sup>*--Optional*
The index of currentValue in the array.\
### array <sup>*--Optional*
The array forEach() was called upon.\
### thisArg <sup>*--Optional*
Value to use as this when executing callback.\
___
## The **map()** method creates a new array populated with the results of calling a provided function on every element in the calling array.
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
### Syntax
```js
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```
## <u>Parameters</u>
## callback
Function that is called for every element of arr. Each time callback executes, the returned value is added to new_array.

## The callback function accepts the following arguments:

## currentValue
The current element being processed in the array.\
### index <sup>*--Optional*
The index of the current element being processed in the array.
### array <sup>*--Optional*
The array map was called upon.
### thisArg <sup>*--Optional*
Value to use as this when executing callback.
___
## The **filter()** method creates a new array with all elements that pass the test implemented by the provided function.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```
## Syntax
```js
let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
```
## <u>Parameters</u>
## callback
# Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise.

## It accepts three arguments:

## element
The current element being processed in the array.
### index <sup>*--Optional*
The index of the current element being processed in the array.
### array <sup>*--Optional*
The array filter was called upon.
### thisArg <sup>*--Optional*
Value to use as this when executing callback.
___