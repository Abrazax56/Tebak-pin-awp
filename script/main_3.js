function randomAngka() {
  return Math.floor(Math.random() * arguments.length + 1);
}
alert('MENEBAK PIN 8 DIGIT BY AODRA WATTPAD!');

var repeat = true;
while(repeat) {
  
  
  var UI_1 = true;
  while(UI_1 <= 3) {
    var computerInput1 = randomAngka(1,2,3,4,5,6,7,8,9);
    var userInput1 = prompt('MASUKAN ANGKA PIN PERTAMA (angka 1-9)\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput2 = prompt('MASUKAN ANGKA PIN KEDUA (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput3 = prompt('MASUKAN ANGKA PIN KETIGA (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput4 = prompt('MASUKAN ANGKA PIN KEEMPAT (1-9)\n\nNOTE : MASUKAN HANYA ANGKA!  & Kamu punya 3 kesempatan');
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
    var userInput5 = prompt('MASUKAN ANGKA PIN KELIMA (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput6 = prompt('MASUKAN ANGKA PIN KEENAM (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput7 = prompt('MASUKAN ANGKA PIN KETUJUH (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
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
    var userInput8 = prompt('MASUKAN ANGKA PIN TERAKHIR (1-9)\n\nNOTE : MASUKAN HANYA ANGKA! & Kamu punya 3 kesempatan');
    if (userInput8 == computerInput8) {
      UI_8 = alert('JAWABAN KAMU BENAR!');
    } else if (userInput8 != computerInput8) {
      alert('JAWABAN KAMU SALAH!');
    }
    UI_8++;
  }
  var penilaian1 = (userInput1 == computerInput1) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian2 = (userInput2 == computerInput2) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian3 = (userInput3 == computerInput3) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian4 = (userInput4 == computerInput4) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian5 = (userInput5 == computerInput5) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian6 = (userInput6 == computerInput6) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian7 = (userInput7 == computerInput7) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  var penilaian8 = (userInput8 == computerInput8) ? ' Benar (10 poin)' : ' Salah (0 poin)';
  repeat = alert('KAMU TELAH MENYELESAIKAN SEMUA STAGE\nPenilaian Jawaban : \n\nAngka PIN 1 : ' + penilaian1 + '\n' + 'Angka PIN 2 : ' + penilaian2 + '\n' + 'Angka PIN 3 : ' + penilaian3 + '\n' + 'Angka PIN 4 : ' + penilaian4 + '\n' + 'Angka PIN 5 : ' + penilaian5 + '\n' + 'Angka PIN 6 : ' + penilaian6 + '\n' + 'Angka PIN 7 : ' + penilaian7 + '\n' + 'Angka PIN 8 : ' + penilaian8 + '\n' + '\n\nSCREENSHOT HASIL INI LALU KIRIM KE 6288216018165');
}
alert('terimakasih sudah bermain semoga nggak pusing');