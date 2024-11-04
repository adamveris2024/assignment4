// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
function smallestNumber(num) {
    console.log(num < 100)
}

smallestNumber(10)
smallestNumber(50)
/*************************************/

function calculateCircumference(rad) {
    console.log(rad * 2 * 3.14)

}

calculateCircumference(5)


/**************************************/
function searchString(char, str) {
    // Ensure the first argument is a single character and the second is a string
    if (typeof char !== 'string' || typeof str !== 'string' || char.length !== 1) {
        throw new Error('First argument must be a single character and the second argument must be a string.');
    }
    
    let count = 0;

    // Loop through the string and count occurrences of the character
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

console.log(searchString("s", "Mississipi"))