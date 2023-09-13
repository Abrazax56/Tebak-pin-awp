function randomAngka() {
  return Math.floor(Math.random() * arguments.length + 1);
}
alert('MENEBAK PIN 8 DIGIT BY AODRA WATTPAD!');


var repeat = true;
while(repeat) {
  
  
  var kelompok = true;
  while (kelompok) {
    var namaGrup = prompt('Masukan Nama Grup/Kelompok');
    if (namaGrup) {
      kelompok = alert('CARA PENGERJAAN\n\nMasukan Angka dari 1-9 dengan yakin karena kesempatan mu hanya 3 kali\nGame terbagi menjadi 8 stage\n\nSelamat Mengerjakan 🥰');
    } else {
      alert('nama Grup/Kelompok tidak boleh kosong!');
    }
  }
  var UI_1 = true;
  while(UI_1 <= 3) {
    var computerInput1 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput1 = prompt('MASUKAN ANGKA PIN KE - 1 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput1 == computerInput1) {
      UI_1 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput1 != computerInput1) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_1++;
  }
  var UI_2 = true;
  while(UI_2 <= 3) {
    var computerInput2 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput2 = prompt('MASUKAN ANGKA PIN KE - 2 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput2 == computerInput2) {
      UI_2 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput2 != computerInput2) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_2++;
  }
  var UI_3 = true;
  while(UI_3 <= 3) {
    var computerInput3 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput3 = prompt('MASUKAN ANGKA PIN KE - 3 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput3 == computerInput3) {
      UI_3 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput3 != computerInput3) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_3++;
  }
  var UI_4 = true;
  while(UI_4 <= 3) {
    var computerInput4 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput4 = prompt('MASUKAN ANGKA PIN KE - 4 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA!  & Kamu punya 3 kesempatan');
    if (userInput4 == computerInput4) {
      UI_4 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput4 != computerInput4) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_4++;
  }
  var UI_5 = true;
  while(UI_5 <= 3) {
    var computerInput5 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput5 = prompt('MASUKAN ANGKA PIN KE - 5 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput5 == computerInput5) {
      UI_5 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput5 != computerInput5) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_5++;
  }
  var UI_6 = true;
  while(UI_6 <= 3) {
    var computerInput6 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput6 = prompt('MASUKAN ANGKA PIN KE - 6 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput6 == computerInput6) {
      UI_6 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput6 != computerInput6) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_6++;
  }
  var UI_7 = true;
  while(UI_7 <= 3) {
    var computerInput7 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput7 = prompt('MASUKAN ANGKA PIN KE - 7 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput7 == computerInput7) {
      UI_7 = alert('JAWABAN KAMU BENAR! Kamu akan lanjut ke stage berikutnya');
    } else if (userInput7 != computerInput7) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_7++;
  }
  var UI_8 = true;
  while(UI_8 <= 3) {
    var computerInput8 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput8 = prompt('MASUKAN ANGKA PIN KE - 8 (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput8 == computerInput8) {
      UI_8 = alert('JAWABAN KAMU BENAR!');
    } else if (userInput8 != computerInput8) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_8++;
  }
  var benar = 10;
  var salah = 0;
  var penilaian1 = (userInput1 == computerInput1) ? benar : salah;
  var penilaian2 = (userInput2 == computerInput2) ? benar : salah;
  var penilaian3 = (userInput3 == computerInput3) ? benar : salah;
  var penilaian4 = (userInput4 == computerInput4) ? benar : salah;
  var penilaian5 = (userInput5 == computerInput5) ? benar : salah;
  var penilaian6 = (userInput6 == computerInput6) ? benar : salah;
  var penilaian7 = (userInput7 == computerInput7) ? benar : salah;
  var penilaian8 = (userInput8 == computerInput8) ? benar : salah;
  var total = penilaian1 + penilaian2 + penilaian3 + penilaian4 + penilaian5 + penilaian6 + penilaian7 + penilaian8;
  repeat = alert('PERWAKILAN GRUP/KELOMPOK : ' + namaGrup + '\n\nPenilaian Jawaban\n\nBENAR = 10 POIN\nSALAH = 0 POIN\n\nAngka PIN 1 = ' + penilaian1 + ' poin\n' + 'Angka PIN 2 = ' + penilaian2 + ' poin\n' + 'Angka PIN 3 = ' + penilaian3 + ' poin\n' + 'Angka PIN 4 = ' + penilaian4 + ' poin\n' + 'Angka PIN 5 = ' + penilaian5 + ' poin\n' + 'Angka PIN 6 = ' + penilaian6 + ' poin\n' + 'Angka PIN 7 = ' + penilaian7 + ' poin\n' + 'Angka PIN 8 = ' + penilaian8 + ' poin\n\n' + 'Total : ' + total + ' poin\n\nSCREENSHOT KIRIM KE wa.me/6288216018165');
}
alert('terimakasih sudah bermain semoga nggak pusing yah kepalanya :v');
