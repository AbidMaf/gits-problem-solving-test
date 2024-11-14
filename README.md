# Kompleksitas Code untuk Soal No. 3

## Kompleksitas Waktu

Terdapat `forEach` pada code tersebut yang dimana fungsi tersebut melakukan iterasi sebanyak `n` kali sehingga menghasilkan kompleksitas waktu sebesar **O(n)**. Lalu, terdapat fungsi `includes` dan `indexOf` yang digunakan untuk memeriksa `element` terhadap `open_brackets` dan `close_brackets`. Namun, karena `open_brackets` dan `close_brackets` bersifat konstan dan hanya terdiri dari tiga elemen, maka dari itu fungsi `includes` dan `indexOf` memiliki kompleksitas **O(1)**.

Selain itu ada fungsi `pop` dan `push` memiliki kompleksitas sebesar **O(1)** karena pada setiap iterasinya hanya memiliki 1 operasi.

Maka dari itu, kompleksitas ruang untuk fungsi `balancedBracket` adalah **O(n)**.

## Kompleksitas Ruang

Ada 3 variable yang dihighlight untuk menghitung kompleksitas ruang: `stacks`, `brackets`, `open_brackets` dan `close_brackets`. Untuk `stacks` dan `brackets`, kedua variable ini memiliki kompleksitas **O(n)** karena kedua variable bergantung dengan besaran input. Lalu, `open_brackets` dan `close_brackets` memiliki kompleksitas **O(1)** karena merupakan variable konstan dan hanya memiliki 3 elemen saja.

Dapat disimpulkan, kompleksitas ruangnya adalah **O(n)**.