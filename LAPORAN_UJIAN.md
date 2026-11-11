# Laporan UTS Web Software Tools

**Nama:** Akbar Maulana Dewson
**Nomor Induk Mahasiswa:** 12523002
**Kelas:** Teknik Informatika
**Tanggal:** 11 November 2026

## A. Bukti pemeriksaan masalah
| Masalah | Alat yang digunakan | Bukti pemeriksaan | Perkiraan penyebab | Perbaikan | Hasil setelah perbaikan |
|---|---|---|---|---|---|
| Produk | Membandingkan route di `server.mjs` dengan pemanggilan `fetch` di `public/app.js` | Server menyediakan `GET /api/products`, sedangkan frontend sebelumnya meminta `/api/barang`; route API yang tidak dikenal menghasilkan 404. | URL fetch tidak sesuai dengan route server. | Mengubah URL fetch menjadi `/api/products`. | Frontend meminta endpoint yang tersedia sehingga daftar produk dapat dimuat. |
| Tombol keranjang | Memeriksa class tombol hasil render dan selector event di `public/app.js` | Tombol memakai class `.add-button`, tetapi handler sebelumnya memilih `.add-to-cart`, sehingga tidak menemukan tombol untuk memasang event klik. | Selector tidak sama dengan class tombol. | Mengubah selector menjadi `.add-button`. | Event klik terpasang dan memanggil `addProduct` untuk menambahkan produk. |
| Total belanja | Menjalankan `npm run test:once` dan memeriksa `tests/cart.test.mjs` | Sebelum perbaikan, tes kuantitas 2 menghasilkan Rp75.000, padahal diharapkan Rp150.000; tes beberapa barang menghasilkan Rp225.000, padahal diharapkan Rp600.000. | `calculateTotal` menjumlahkan harga per baris tanpa mengalikan kuantitas. | Menghitung setiap baris dengan `item.price * item.quantity`. | Seluruh 7 tes lulus, termasuk tes kuantitas berbeda. |

## B. Hasil pengujian
- Jumlah pengujian sebelum perbaikan:
- Jumlah pengujian berhasil setelah perbaikan:
- Catatan perubahan pada fungsi yang diperiksa:

## C. Kualitas kode
- Temuan sebelum perbaikan:
- Perbaikan yang dilakukan:
- Hasil pemeriksaan ulang:

## D. Git
- Branch (jika membuat):
- Ringkasan commit:
- Hasil pemeriksaan `git status`:

## E. Pemakaian kecerdasan buatan (jika digunakan)
- Nama alat:
- Pertanyaan/instruksi yang diberikan:
- Bagian jawaban yang diterapkan:
- Cara memeriksa apakah saran tersebut benar:

## F. Refleksi singkat
- Satu pelajaran paling penting dari ujian ini:
