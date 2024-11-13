/* Soal 4. Tes Query SQL I 
Tampilkan 10 negara dengan GDP terbanyak di benua EROPA pada tahun 2015
Hasil query harus menampilkan minimal kolom `id` dan `name` dari negara, kolom lainnya opsional
*/

module.exports = {
  firstSQLTest: () => {
    // Tambahkan query SQL anda di dalam string SQLQuery
    const SQLQuery = `SELECT 
                          b.id, 
                          b.name
                      FROM 
                          gdp a
                          JOIN country b ON a.country_id = b.id
                      WHERE 
                          b.continent = 'Europe' AND
                          a.year = '2015'
                      ORDER BY 
                          a.total DESC
                      LIMIT 10`
    return SQLQuery.trim()
  }
}