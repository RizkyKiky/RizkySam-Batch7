console.log('JAVASCRIPT BAGIAN 2');

console.log('SOAL NO. 1');

console.log('Hello World! Javascript is Fun!');

console.log('================================');

console.log('SOAL NO. 2');

let nama = 'Rizky';
let age = 22;
let decision;

decision = 1 > 0;

if (decision == true) {
  decision = 'Ya';
} else {
  decision = 'Harus mau!';
}

console.log('Nama anda :', nama);
console.log('Umur anda :', age);
console.log('Apakah anda menyukai Javascript ?', decision);

console.log('================================');

console.log('SOAL NO. 3');

let umur = 22;

function checkAge(hasilUmur) {
  if (umur >= 18) {
    return 'Anda Sudah Dewasa';
  } else if (umur < 18) {
    return 'Anda Masih Remaja';
  }
}

console.log(checkAge(umur));

console.log('================================');

console.log('JAVASCRIPT BAGIAN 3');

console.log('SOAL NO. 1');

const foods = ['Nasi Goreng', 'Mie Ayam', 'Sate', 'Pecel', 'Bakso'];

function listMakanan(listFoods) {
  for (let i = 0; i < listFoods.length; i++) {
    console.log('Makanan favorit ke-' + i + ' adalah : ' + foods[i]);
  }
}

listMakanan(foods);

console.log('================================');

console.log('SOAL NO. 2');

const students = [
  { murid: 'Budi', score: 85 },
  { murid: 'Ani', score: 92 },
  { murid: 'Dedi', score: 77 },
  { murid: 'Siti', score: 65 },
  { murid: 'Rina', score: 90 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 80) {
    console.log(students[i].murid + ' lulus dengan nilai ' + students[i].score);
  }
}
