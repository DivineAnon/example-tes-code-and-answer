/*
Soal 5. Temukan Angka yang Hilang
Masalah:
Diberikan sebuah array nums yang berisi n angka unik dalam rentang [0, n], kembalikan satu-satunya angka dalam rentang tersebut yang hilang dari array.

Contoh 1:
Input: nums = [3, 0, 1]
Output: 2
Penjelasan: n = 3 karena ada 3 angka, sehingga semua angka berada dalam rentang [0, 3]. Angka 2 adalah angka yang hilang dari rentang tersebut karena tidak muncul di nums.

Contoh 2:
Input: nums = [0, 1]
Output: 2
Penjelasan: n = 2 karena ada 2 angka, sehingga semua angka berada dalam rentang [0, 2]. Angka 2 adalah angka yang hilang dari rentang tersebut karena tidak muncul di nums.

Contoh 3:
Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8
Penjelasan: n = 9 karena ada 9 angka, sehingga semua angka berada dalam rentang [0, 9]. Angka 8 adalah angka yang hilang dari rentang tersebut karena tidak muncul di nums.

Batasan:
n == panjang nums
1 <= n <= 10⁴
0 <= nums[i] <= n
Semua angka dalam nums adalah unik.
*/

module.exports = {
  findMissingNumber: (nums) => {
    // Length of the input array
    const n = nums.length;

    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of the elements in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
  },
};
