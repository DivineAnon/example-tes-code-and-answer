const { findMissingNumber } = require('./2');

// Contoh array yang memiliki satu angka yang hilang
const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // 4 hilang

const missingNumber = findMissingNumber(nums);
console.log(`Angka yang hilang adalah: ${missingNumber}`);