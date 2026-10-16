// =========================================================
// 1. FUNGSI LUAS & KELILING (MATEMATIKA DASAR)
// =========================================================
function luasPersegi(sisi) {
    return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

function kelilingPersegi(sisi) {
    return 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

function kelilingSegitiga(sisi1, sisi2, sisi3) {
    return sisi1 + sisi2 + sisi3;
}

// =========================================================
// NAVIGASI TAB UTAMA
// =========================================================
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const targetTab = document.getElementById(button.getAttribute('data-tab'));
        targetTab.classList.add('active');
    });
});

// =========================================================
// TAB 1 LOGIKA INTERAKTIF: LUAS & KELILING
// =========================================================
const radioJenisPerhitungan = document.querySelectorAll('input[name="jenisPerhitungan"]');
const selectPilihanBangun = document.getElementById('pilihanBangun');
const labelAngka1 = document.getElementById('labelAngka1');
const labelAngka2 = document.getElementById('labelAngka2');
const labelAngka3 = document.getElementById('labelAngka3');
const groupAngka1 = document.getElementById('groupAngka1');
const groupAngka2 = document.getElementById('groupAngka2');
const groupAngka3 = document.getElementById('groupAngka3');
const inputAngka1 = document.getElementById('angka1');
const inputAngka2 = document.getElementById('angka2');
const inputAngka3 = document.getElementById('angka3');
const tombolHitungGeometri = document.getElementById('tombolHitungGeometri');
const hasilPerhitungan = document.getElementById('hasilPerhitungan');

function updateFormGeometri() {
    const jenis = document.querySelector('input[name="jenisPerhitungan"]:checked').value;
    const bangun = selectPilihanBangun.value;

    groupAngka1.style.display = 'block';
    
    if (bangun === "Persegi") {
        labelAngka1.textContent = "Sisi";
        groupAngka2.style.display = 'none';
        groupAngka3.style.display = 'none';
    } else if (bangun === "Persegi Panjang") {
        labelAngka1.textContent = "Panjang";
        labelAngka2.textContent = "Lebar";
        groupAngka2.style.display = 'block';
        groupAngka3.style.display = 'none';
    } else if (bangun === "Segitiga") {
        if (jenis === "Hitung Luas") {
            labelAngka1.textContent = "Alas";
            labelAngka2.textContent = "Tinggi";
            groupAngka2.style.display = 'block';
            groupAngka3.style.display = 'none';
        } else {
            labelAngka1.textContent = "Sisi 1";
            labelAngka2.textContent = "Sisi 2";
            labelAngka3.textContent = "Sisi 3";
            groupAngka2.style.display = 'block';
            groupAngka3.style.display = 'block';
        }
    }
}

radioJenisPerhitungan.forEach(radio => radio.addEventListener('change', updateFormGeometri));
selectPilihanBangun.addEventListener('change', updateFormGeometri);

tombolHitungGeometri.addEventListener('click', () => {
    const jenis = document.querySelector('input[name="jenisPerhitungan"]:checked').value;
    const bangun = selectPilihanBangun.value;
    const a1 = parseFloat(inputAngka1.value);
    const a2 = parseFloat(inputAngka2.value);
    const a3 = parseFloat(inputAngka3.value);

    if (!bangun) {
        hasilPerhitungan.value = "Silakan pilih bangun terlebih dahulu.";
        return;
    }

    if (jenis === "Hitung Luas") {
        if (bangun === "Persegi") {
            if (isNaN(a1)) { hasilPerhitungan.value = "Masukkan panjang sisi."; return; }
            hasilPerhitungan.value = `Luas persegi = ${luasPersegi(a1)}`;
        } else if (bangun === "Persegi Panjang") {
            if (isNaN(a1) || isNaN(a2)) { hasilPerhitungan.value = "Masukkan panjang dan lebar."; return; }
            hasilPerhitungan.value = `Luas persegi panjang = ${luasPersegiPanjang(a1, a2)}`;
        } else if (bangun === "Segitiga") {
            if (isNaN(a1) || isNaN(a2)) { hasilPerhitungan.value = "Masukkan alas dan tinggi."; return; }
            hasilPerhitungan.value = `Luas segitiga = ${luasSegitiga(a1, a2)}`;
        }
    } else if (jenis === "Hitung Keliling") {
        if (bangun === "Persegi") {
            if (isNaN(a1)) { hasilPerhitungan.value = "Masukkan panjang sisi."; return; }
            hasilPerhitungan.value = `Keliling persegi = ${kelilingPersegi(a1)}`;
        } else if (bangun === "Persegi Panjang") {
            if (isNaN(a1) || isNaN(a2)) { hasilPerhitungan.value = "Masukkan panjang dan lebar."; return; }
            hasilPerhitungan.value = `Keliling persegi panjang = ${kelilingPersegiPanjang(a1, a2)}`;
        } else if (bangun === "Segitiga") {
            if (isNaN(a1) || isNaN(a2) || isNaN(a3)) { hasilPerhitungan.value = "Masukkan sisi 1, sisi 2, dan sisi 3."; return; }
            hasilPerhitungan.value = `Keliling segitiga = ${kelilingSegitiga(a1, a2, a3)}`;
        }
    }
});


// =========================================================
// TAB 2: KATEGORI NILAI
// =========================================================
function kategoriNilai(nilai) {
    if (isNaN(nilai)) return "Masukkan nilai terlebih dahulu.";
    if (nilai >= 90) return "Sangat Baik";
    if (nilai >= 75) return "Baik";
    if (nilai >= 60) return "Cukup";
    return "Perlu Latihan";
}

document.getElementById('tombolKategori').addEventListener('click', () => {
    const nilai = parseFloat(document.getElementById('inputNilaiKategori').value);
    document.getElementById('hasilKategori').value = kategoriNilai(nilai);
});


// =========================================================
// TAB 3: ANALISIS NILAI & PENCARIAN DATA
// =========================================================
function ubahData(teks) {
    try {
        return teks.split(',')
                  .map(x => x.trim())
                  .filter(x => x !== '')
                  .map(Number);
    } catch {
        return [];
    }
}

function analisisData(teks) {
    const data = ubahData(teks);
    if (data.length === 0 || data.some(isNaN)) {
        return "Data tidak valid atau masih kosong.";
    }

    const dataUrut = [...data].sort((a, b) => a - b);
    const nilaiMaksimum = Math.max(...data);
    const nilaiMinimum = Math.min(...data);
    const jumlahData = data.length;
    const rataRata = data.reduce((a, b) => a + b, 0) / jumlahData;

    return `Data asli:\n[${data.join(', ')}]\n\n` +
           `Data setelah diurutkan:\n[${dataUrut.join(', ')}]\n\n` +
           `Nilai maksimum:\n${nilaiMaksimum}\n\n` +
           `Nilai minimum:\n${nilaiMinimum}\n\n` +
           `Jumlah data:\n${jumlahData}\n\n` +
           `Rata-rata:\n${rataRata.toFixed(2)}`;
}

document.getElementById('tombolAnalisis').addEventListener('click', () => {
    const teks = document.getElementById('dataInput').value;
    document.getElementById('hasilAnalisis').value = analisisData(teks);
});

function cariData(teks, target) {
    const data = ubahData(teks);
    if (data.length === 0 || data.some(isNaN)) {
        return "Data tidak valid atau masih kosong.";
    }
    if (isNaN(target)) {
        return "Masukkan nilai yang ingin dicari.";
    }

    const posisi = [];
    data.forEach((nilai, index) => {
        if (nilai === target) {
            posisi.push(index + 1);
        }
    });

    if (posisi.length === 0) {
        return `Nilai ${target} tidak ditemukan dalam data.`;
    } else if (posisi.length === 1) {
        return `Nilai ${target} ditemukan.\nNilai tersebut terdapat pada data ke-${posisi[0]}.`;
    } else {
        const daftarPosisi = posisi.map(p => `data ke-${p}`).join(', ');
        return `Nilai ${target} ditemukan sebanyak ${posisi.length} kali.\nNilai tersebut terdapat pada ${daftarPosisi}.`;
    }
}

document.getElementById('tombolCari').addEventListener('click', () => {
    const teks = document.getElementById('dataInput').value;
    const target = parseFloat(document.getElementById('targetInput').value);
    document.getElementById('hasilPencarian').value = cariData(teks, target);
});


// =========================================================
// TAB 4: FAKTORIAL
// =========================================================
function faktorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * faktorial(n - 1);
}

function hitungFaktorial(n) {
    if (isNaN(n)) return "Masukkan bilangan.";
    if (n < 0) return "Bilangan harus 0 atau lebih.";
    if (n !== Math.floor(n)) return "Masukkan bilangan bulat.";

    const hasil = faktorial(n);
    return `${n}! = ${hasil}`;
}

document.getElementById('tombolFaktorial').addEventListener('click', () => {
    const n = parseFloat(document.getElementById('angkaFaktorial').value);
    document.getElementById('hasilFaktorial').value = hitungFaktorial(n);
});


// =========================================================
// TAB 5: QUIZ INTERAKTIF
// =========================================================
const quizQuestions = [
    {
        question: "Berapakah luas persegi dengan panjang sisi 5 cm?",
        options: ["20 cm²", "25 cm²", "30 cm²", "35 cm²"],
        answer: "25 cm²"
    },
    {
        question: "Berapakah keliling persegi dengan panjang sisi 6 cm?",
        options: ["12 cm", "18 cm", "24 cm", "36 cm"],
        answer: "24 cm"
    },
    {
        question: "Berapakah luas persegi panjang dengan panjang 10 cm dan lebar 5 cm?",
        options: ["15 cm²", "30 cm²", "50 cm²", "100 cm²"],
        answer: "50 cm²"
    },
    {
        question: "Berapakah luas segitiga dengan alas 10 cm dan tinggi 8 cm?",
        options: ["20 cm²", "40 cm²", "80 cm²", "100 cm²"],
        answer: "40 cm²"
    },
    {
        question: "Berapakah hasil dari 5! (5 faktorial)?",
        options: ["25", "60", "100", "120"],
        answer: "120"
    }
];

let quizIndex = 0;
let quizScore = 0;
let sudahDiperiksa = false;

const elNomorSoal = document.getElementById('nomorSoal');
const elPertanyaanSoal = document.getElementById('pertanyaanSoal');
const elQuizOptionsContainer = document.getElementById('quizOptionsContainer');
const elTombolPeriksaQuiz = document.getElementById('tombolPeriksaQuiz');
const elHasilQuiz = document.getElementById('hasilQuiz');
const elTombolBerikutnyaQuiz = document.getElementById('tombolBerikutnyaQuiz');
const elTombolMulaiKembaliQuiz = document.getElementById('tombolMulaiKembaliQuiz');

function renderQuiz() {
    const soal = quizQuestions[quizIndex];
    elNomorSoal.textContent = `Soal ${quizIndex + 1} dari ${quizQuestions.length}`;
    elPertanyaanSoal.textContent = soal.question;
    elHasilQuiz.value = "Belum diperiksa.";
    
    elQuizOptionsContainer.innerHTML = '';
    soal.options.forEach((opt, idx) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="pilihanQuiz" value="${opt}"> ${opt}`;
        elQuizOptionsContainer.appendChild(label);
    });

    elTombolPeriksaQuiz.disabled = false;
    elTombolBerikutnyaQuiz.disabled = true;
    elTombolMulaiKembaliQuiz.style.display = 'none';
    sudahDiperiksa = false;
}

elTombolPeriksaQuiz.addEventListener('click', () => {
    if (sudahDiperiksa) {
        elHasilQuiz.value = "Jawaban sudah diperiksa. Silakan lanjut ke soal berikutnya.";
        return;
    }

    const selectedOption = document.querySelector('input[name="pilihanQuiz"]:checked');
    if (!selectedOption) {
        elHasilQuiz.value = "Silakan pilih jawaban terlebih dahulu.";
        return;
    }

    const jawabanUser = selectedOption.value;
    const soal = quizQuestions[quizIndex];
    sudahDiperiksa = true;

    if (jawabanUser === soal.answer) {
        quizScore += 20;
        elHasilQuiz.value = "✅ Benar!\nKamu mendapatkan 20 poin.";
    } else {
        elHasilQuiz.value = `❌ Jawaban belum tepat.\nJawaban yang benar adalah ${soal.answer}.`;
    }

    elTombolPeriksaQuiz.disabled = true;

    if (quizIndex === quizQuestions.length - 1) {
        elHasilQuiz.value += `\n\n🎉 Quiz selesai!\nTotal skor kamu: ${quizScore} dari 100.`;
        elTombolMulaiKembaliQuiz.style.display = 'inline-block';
        elTombolBerikutnyaQuiz.disabled = true;
    } else {
        elTombolBerikutnyaQuiz.disabled = false;
    }
});

elTombolBerikutnyaQuiz.addEventListener('click', () => {
    if (quizIndex < quizQuestions.length - 1) {
        quizIndex++;
        renderQuiz();
    }
});

elTombolMulaiKembaliQuiz.addEventListener('click', () => {
    quizIndex = 0;
    quizScore = 0;
    renderQuiz();
});

// Inisialisasi Quiz pertama kali
renderQuiz();
updateFormGeometri();
