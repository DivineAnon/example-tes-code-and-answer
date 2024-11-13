/* Soal 5. Tes Query SQL II 
Tampilkan negara dengan populasi terbanyak di tiap benua pada tahun 2021
Hasil query harus menampilkan minimal kolom `id` dan `name` dari negara, kolom lainnya opsional
*/

module.exports = {
  secondSQLTest: () => {
    // Tambahkan query SQL anda di dalam string SQLQuery
    const SQLQuery = `
    WITH RankedCountries AS (
      SELECT 
          b.id, 
          b.name, 
          b.continent, 
          a.year,
          (a.female + a.male) AS total_population,
          ROW_NUMBER() OVER (PARTITION BY b.continent ORDER BY (a.female + a.male) DESC) AS rank
      FROM 
          population a
          JOIN country b ON a.country_id = b.id 
      WHERE 
          a.year = '2021'
    )
    SELECT 
      id, 
      name, 
      continent,
      total_population
    FROM 
      RankedCountries
    WHERE 
    rank = 1
    `
    return SQLQuery
  }
}