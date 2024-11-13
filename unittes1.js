const { longestCommonPrefix } = require('./1');

const testCases = [
    ["flower", "flow", "flight"], // Output: "fl"
    ["dog", "racecar", "car"],     // Output: ""
    ["interspecies", "interstellar", "interstate"], // Output: "inters"
    [],                             // Output: ""
    ["a"],                          // Output: "a"
];

testCases.forEach((testCase, index) => {
    const result = longestCommonPrefix(testCase);
    console.log(`Test Case ${index + 1}: Input: ${JSON.stringify(testCase)} | Output: "${result}"`);
});