/* Soal Bonus. Tes Query SQL Bonus
Tampilkan negara dengan: 
1. GDP tertinggi pada tahun 2018
2. GDP terendah pada tahun 2018
3. Populasi terbanyak pada tahun 2018
4. Populasi terkecil pada tahun 2018
5. Persentase kemiskinan tertinggi pada tahun 2018 
6. Persentase kemiskinan terendah pada tahun 2018
Hasil query harus menampilkan minimal kolom `country_id_#` dan `country_name_#` dengan `#` merupakan nomor kategorinya.
Semua jawaban kategori harus ditampilkan dalam satu baris saja. Berikut contoh hasil query.

country_id_1    |country_name_1|kategori_1   |country_id_2    |country_name_2|kategori_2  |country_id_3|
----------------+--------------+-------------+----------------+--------------+------------+------------+
XXXXXXX-XXX-XXXX|Country 1     |GDP Tertinggi|XXXXXXX-XXX-XXXX|Country 2     |GDP Terendah|dst...      |

Kolom lainnya bersifat opsional (cth. total_gdp, total_populasi, persentase_kemiskinan)
*/

module.exports = {
  bonusSQLTest: () => {
    // Tambahkan query SQL anda di dalam string SQLQuery
    const SQLQuery = `
      WITH 
        highest_gdp AS (
          SELECT 
              b.id as country_id_1, 
              b.name as country_name_1
          FROM 
              gdp a
              JOIN country b ON a.country_id = b.id
          WHERE 
              a.year = '2018'
          ORDER BY 
              a.total DESC
        ),
        lowest_gdp AS (   
          SELECT 
              b.id as country_id_2, 
              b.name as country_name_2
          FROM 
              gdp a
              JOIN country b ON a.country_id = b.id
          WHERE 
              a.year = '2018'
          ORDER BY 
              a.total ASC
        ),
        highest_population AS (
          SELECT 
              b.id as country_id_3, 
              b.name as country_name_3
          FROM 
              population a
              JOIN country b ON a.country_id = b.id 
          WHERE 
              a.year = '2018'
          ORDER BY (a.female + a.male) DESC
        ),
        lowest_population AS (     
          SELECT 
              b.id as country_id_4, 
              b.name as country_name_4
          FROM 
              population a
              JOIN country b ON a.country_id = b.id 
          WHERE 
              a.year = '2018'
          ORDER BY (a.female + a.male) ASC
        ),
        highest_poverty AS (
          SELECT 
              b.id as country_id_5, 
              b.name as country_name_5
          FROM 
              poverty a
              JOIN country b ON a.country_id = b.id
          WHERE 
              a.year = '2018'
          ORDER BY 
              a.total DESC
        ),
        lowest_poverty AS (
          SELECT 
              b.id as country_id_6, 
              b.name as country_name_6
          FROM 
              poverty a
              JOIN country b ON a.country_id = b.id
          WHERE 
              a.year = '2018'
          ORDER BY 
              a.total ASC
        )
      SELECT 
        hg.country_id_1, hg.country_name_1, 'GDP Tertinggi' AS kategori_1,
        lg.country_id_2, lg.country_name_2, 'GDP Terendah' AS kategori_2,        
        hp.country_id_3, hp.country_name_3, 'Populasi Tertinggi' AS kategori_3,
        lp.country_id_4, lp.country_name_4, 'Populasi Terendah' AS kategori_4,    
        hy.country_id_5, hy.country_name_5, 'Persentase Kemiskinan Tertinggi' AS kategori_5,
        ly.country_id_6, ly.country_name_6, 'Persentase Kemiskinan Terendah' AS kategori_6
      FROM 
        highest_gdp hg
        JOIN lowest_gdp lg ON 1=1
        JOIN highest_population hp ON 1=1
        JOIN lowest_population lp ON 1=1
        JOIN highest_poverty hy on 1=1
        JOIN lowest_poverty ly on 1=1
    `;

    return SQLQuery;
  },
};
