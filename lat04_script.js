// LATIHAN ANGKOT - FOR-ElseIF
let jumAngkot = 10;
var angkotBaik = 6;
let noAngkot = 1;
let lemburAngkot = [];
function inputLembur() {
  let lagi = true;
  while (lagi) {
    let Input = prompt("Angkot Ke-Berapa yang LEMBUR?");
    let Angka = Number(Input);
    if (Angka > jumAngkot) {
      alert("Maaf, Nomor Angkot Tidak Terdaftar!");
    } else if (isNaN(Angka)) {
      alert("Maaf, Input Bukan Angka!");
    } else {
      lemburAngkot.push(Angka);
    }
    lagi = confirm("Ingin Input Lagi?");
  }
  // console.log("Data Lembur = ", lemburAngkot);
}
inputLembur();
for (noAngkot; noAngkot <= jumAngkot; noAngkot++) {
  if (lemburAngkot.includes(noAngkot)) {
    console.log("Angkot No. " + noAngkot + " status LEMBUR");
  } else if (noAngkot <= angkotBaik) {
    console.log("Angkot No. " + noAngkot + " status beroperasi baik");
  } else {
    console.log("Angkot No. " + noAngkot + " status tidak beroperasi/rusak");
  }
}
