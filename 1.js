/*
Soal 1. Longest Common Prefix
Tulis sebuah fungsi untuk menemukan awalan (prefix) terpanjang yang sama di antara sebuah array string.

Jika tidak ada awalan yang sama, kembalikan string kosong "".

Contoh 1:
Input: strs = ["flower", "flow", "flight"]
Output: "fl"

Contoh 2:
Input: strs = ["dog", "racecar", "car"]
Output: ""
Penjelasan: Tidak ada awalan yang sama di antara string input.

Batasan:
1 <= panjang strs <= 200
0 <= panjang strs[i] <= 200
strs[i] hanya terdiri dari huruf kecil alphabet.
*/

module.exports = {
    longestCommonPrefix: (strs) => {
        // Return an empty string if the input array is empty
        if (strs.length === 0) return "";

        // Start with the first string as the initial prefix
        let prefix = strs[0];

        // Compare the prefix with each string in the array
        for (let i = 1; i < strs.length; i++) {
            // Shorten the prefix until it matches the start of the current string
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.slice(0, -1); // Remove the last character
                // If the prefix is empty, return an empty string
                if (prefix === "") return "";
            }
        }

        return prefix; // Return the longest common prefix found
    }
}