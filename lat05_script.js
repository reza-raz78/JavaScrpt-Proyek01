var dudukID = [];
var dudukNama = [];
let lagi = true;
let id;
let idCek;
let nama;
let i = 0;
let posisi;
var tom = document.getElementsByClassName("tom");

var tombolTambah = document.createElement("button");
tombolTambah.innerHTML = "Naik-Penumpang";
tombolTambah.addEventListener("click", tambahPenumpang);
tom[0].appendChild(tombolTambah);

var tombolHapus = document.createElement("button");
tombolHapus.innerHTML = "Pulang-Penumpang";
tombolHapus.addEventListener("click", hapusPenumpang);
tom[1].appendChild(tombolHapus);

function tambahPenumpang() {
  while (lagi) {
    id = prompt("Ketiklah No. KTP Anda sesuai format?");
    idCek = Number(id);
    nama = prompt("Ketiklah Nama Singkat Anda?");
    if (id.length > 16 || isNaN(idCek) || id.length < 16) {
      alert("Maaf,No. KTP Anda Tidak Sesuai Format");
    } else if (dudukID.includes(idCek)) {
      alert("Maaf,No. KTP sama dengan KTP Penumpang yang masih naik sekarang!");
    } else if (dudukID.length == 0 && dudukNama.length == 0) {
      dudukID[0] = idCek;
      dudukNama[0] = nama;
    } else if (dudukID.includes(undefined) && dudukNama.includes(undefined)) {
      posisi = dudukID.indexOf(undefined);
      dudukID[posisi] = idCek;
      dudukNama[posisi] = nama;
    } else {
      dudukID.push(idCek);
      dudukNama.push(nama);
    }
    lagi = confirm("Ingin Input Lagi?");
  }
  console.log(dudukID);
  console.log(dudukNama);
  lagi = true;
}

function hapusPenumpang() {
  confirm("Anda Yakin Ingin Keluar dari Angkot ini di sini?");
  id = prompt("Ketiklah No. KTP Sebelum Pulang?");
  idCek = Number(id);
  if (id.length > 16 || isNaN(idCek) || id.length < 16) {
    alert("Maaf,No. KTP Anda Tidak Sesuai Format!");
    history.back();
  } else if (id.length == null) {
    alert("Maaf,Angkot Masih Kosong!");
    history.back();
  } else if (dudukID.includes(idCek)) {
    posisi = dudukID.indexOf(idCek);
    dudukID[posisi] = undefined;
    dudukNama[posisi] = undefined;
    alert("Berhasil Proses, Silahkan Meninggalkan Angkot ini!");
  } else {
    alert("Maaf,No. KTP Tidak Terdaftar Penumpang");
    history.back();
  }
  console.log(dudukID);
  console.log(dudukNama);
}
