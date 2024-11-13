/*
Soal 3. Sort Berdasarkan Frekuensi
Masalah:
Diberikan sebuah string s, urutkan string tersebut dalam urutan menurun berdasarkan frekuensi kemunculan setiap karakter. Frekuensi karakter adalah jumlah kemunculan karakter tersebut dalam string.

Kembalikan string yang sudah diurutkan. Jika ada beberapa jawaban yang memungkinkan, kembalikan salah satu di antaranya.

Contoh 1:
Input: s = "tree"
Output: "eert"
Penjelasan: Huruf 'e' muncul dua kali, sementara 'r' dan 't' masing-masing muncul sekali. Jadi 'e' harus muncul sebelum 'r' dan 't'. Oleh karena itu, "eetr" juga merupakan jawaban yang valid.

Contoh 2:
Input: s = "cccaaa"
Output: "aaaccc"
Penjelasan: Baik 'c' maupun 'a' muncul tiga kali, jadi "cccaaa" dan "aaaccc" adalah jawaban yang valid. Perhatikan bahwa "cacaca" salah karena karakter yang sama harus dikelompokkan bersama.

Contoh 3:
Input: s = "Aabb"
Output: "bbAa"
Penjelasan: "bbaA" juga merupakan jawaban yang valid, tetapi "Aabb" salah. Perhatikan bahwa 'A' dan 'a' dianggap sebagai dua karakter yang berbeda.

Batasan:
1 <= panjang s <= 5 * 10^5
s terdiri dari huruf besar dan kecil alphabet serta angka.
*/

module.exports = {
    frequencySort: (nums) => {
        // 1. Hitung frekuensi kemunculan setiap karakter
        const frequencyMap = new Map();
        for (const char of nums) {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }

        // 2. Urutkan karakter berdasarkan frekuensi (turun)
        const sortedChars = [...frequencyMap.entries()].sort((a, b) => {
            return b[1] - a[1]; // Urutkan berdasarkan frekuensi
        });

        // 3. Bentuk string baru berdasarkan urutan yang telah diurutkan
        let result = '';
        for (const [char, count] of sortedChars) {
            result += char.repeat(count); // Tambahkan karakter sebanyak frekuensinya
        }

        return result;
    }
}