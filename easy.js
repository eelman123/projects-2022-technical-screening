var assert = require("assert")
const { exit } = require("process")
// Given an array of numbers, return a new array so that positive and negative
// numbers alternate. You can assume that 0 is a positive number. Within the
// positive and negative numbers, you must keep their relative order. You are 
// guaranteed the number of positive and negative numbers will not differ by more 
// than 1.

// =====Example 1
// Input: [1, -3, -8, -5, 10]
// Output: [-3, 1, -8, 10, -5]
// Explanation: We have alternated positive and negative numbers. Notice that the
// negative numbers appear in the same relative order (-3, -8, -5) and the positive
// numbers appear in the same order as well (1, 10).

// =====Example 2
// Input: [3, 0, 0, -5, -2]
// Output: [3, -5, 0, -2, 0]
// Explanation: We have alternated positive and negative numbers. Notice they appear
// in the same relative order.

// =====Example 3
// Input: [0, -3, 3, -1, 1, -1]
// Output #1: [0, -3, 3, -1, 1, -1]
// Output #2: [-3, 0, -1, 3, -1, 1]
// Explanation: There are 2 possible answers which satisfy the problem's constraints.
// We can start with either positive or negative

// =====Example 4
// Input numArray: []
// Output numArray: []
// Explanation: Empty array...

const altNumbers = (numArray) => {

    // TODO: COMPLETE THIS FUNCTION

    // Sort numArray into positive array and negative array
    let positive_array = []
    let negative_array = []

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 0) {
            positive_array.push(numArray[i])
        } else {
            negative_array.push(numArray[i])
        }
    }

    if (numArray.length == 0) {
        // Empty array
        return [];
    } else if (numArray.length % 2 == 1) {
        let answer_array = []
        
        // One solution
        if (positive_array.length > negative_array.length) {
            // Start with positive
            for (let i = 0; i < negative_array.length; i++) {
                answer_array.push(positive_array[i])
                answer_array.push(negative_array[i])
            }
            // Add last element
            answer_array.push(positive_array[positive_array.length - 1])
            return answer_array

        } else {
            // Start with negative
            for (let i = 0; i < positive_array.length; i++) {
                answer_array.push(negative_array[i])
                answer_array.push(positive_array[i])
            }
             // Add last element
             answer_array.push(negative_array[negative_array.length - 1])
             return answer_array

        }

    } else {
        let answer_array = []
        // Two solutions
        // Code is hardwired to return array which starts with positive
        for (let i = 0; i < negative_array.length; i++) {
            answer_array.push(positive_array[i])
            answer_array.push(negative_array[i])
        }
        return answer_array
    }
}

module.exports = { altNumbers } // Do not modify this line

// ====================TESTS====================
// Some tests to help you check your progress. Simply run your code with
// node easy.js
// If successful, no output should appear. If unsuccessful, you should see 
// assertion errors being thrown.

let array1 = [1, -3, -8, -5, 10]
array1 = altNumbers(array1)
const answer1 = [-3, 1, -8, 10, -5]
for (let i = 0; i < array1.length; i++) {
    assert(array1[i] === answer1[i])
}

let array2 = [3, 0, 0, -5, -2]
array2 = altNumbers(array2)
const answer2 = [3, -5, 0, -2, 0]
for (let i = 0; i < array2.length; i++) {
    assert(array2[i] === answer2[i])
}

let array3 = [0, -3, 3, -1, 1, -1]
array3 = altNumbers(array3)
const answer3a = [0, -3, 3, -1, 1, -1]
const answer3b = [-3, 0, -1, 3, -1, 1]
if (array3[0] === 0) {
    for (let i = 0; i < array3.length; i++) {
        assert(array3[i] === answer3a[i])
    }
} else if (array3[0] == -3) {
    for (let i = 0; i < array3.length; i++) {
        assert(array3[i] === answer3b[i])
    }
} else {
    assert(false)
}

let array4 = []
array4 = altNumbers(array4)
assert(array4.length === 0)

let array5 = [3,2,1,-1,-2,-3,-4]
array5 = altNumbers(array5)
const answer5 = [-1, 3, -2, 2, -3, 1, -4]
for (let i = 0; i < array5.length; i++) {
    assert(array5[i] === answer5[i])
}

let array6 = [5,-1,-2,-3,-4,0,3]
array6 = altNumbers(array6)
const answer6 = [-1, 5, -2, 0, -3, 3, -4]
for (let i = 0; i < array6.length; i++) {
    assert(array6[i] === answer6[i])
}