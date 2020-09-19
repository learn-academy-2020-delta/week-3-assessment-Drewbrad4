// ASSESSMENT 3: Coding Practical Questions

// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log("1:");

const fibnachoSequence = (n) => {
    // initializing an array to hold the beginning values of the sequence
    let fibonacciArray = [1, 1]
    // For loop that pushes back to the array and adds the numbers according to the algorithm: X(n) = X(n-1) + X(n-2)
    for(let i = 2; i < n; i++){
        fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1])
    }
    //return new array
    return fibonacciArray
}

console.log(fibnachoSequence(10), "\n")

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
console.log("2:");

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const numSortLowHigh = (array) => {
    // filters for number types and odd numbers and then sorts the filtered values using sort with the added method for numbers.
    return array.filter(x => typeof x === "number" && x % 2 !== 0).sort((a, b) => a - b)
}

console.log(numSortLowHigh(fullArr1))
console.log(numSortLowHigh(fullArr2), "\n")

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
console.log("3:");

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

const middleLetter = (string) => {
    // If statement to determine if string length is even or odd
    if(string.length % 2 === 0){
        // returns the two middle characters
        return string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
    } else if (string.length % 2 !== 0){
        // returns the single middle character
        return string.charAt(string.length / 2)
    }
}

console.log(middleLetter(middleLetters1))
console.log(middleLetter(middleLetters2), "\n")

// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
console.log("4:");

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }
    // method for area calc
    calcArea() {
        return (4 * Math.PI * this.radius ** 2).toFixed(2)
    }
    // getter for method
    get area() {
        return this.calcArea()
    }
}

var sphere1 = new Sphere(5)
var sphere2 = new Sphere(10)
var sphere3 = new Sphere(6)

console.log(sphere1.area)
console.log(sphere2.area)
console.log(sphere3.area, "\n")

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
console.log("5:");

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const addUpArrays = (arr) => {
    // If checking that the arr has values in it
   if(arr.length > 0){
        return arr.map((num, index) => {
            // adding up numbers in the array
            if(index !== 0){
                return num = num + arr[index - 1]
            // else so that the first number in the array is returned as well
            } else {
                return num
            }
        })
    // else returning the empty arr
    } else {
        return arr
   }
}


console.log(addUpArrays(numbersToAdd1));
console.log(addUpArrays(numbersToAdd2));
console.log(addUpArrays(numbersToAdd3));
