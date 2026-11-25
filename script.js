// Fungsi pindah halaman (tab bawah)
function pindahTab(idHalaman, tombol) {
  // Sembunyikan semua halaman
  const semuaHalaman = document.querySelectorAll('.page');
  semuaHalaman.forEach(page => page.classList.remove('active'));

  // Matikan status aktif di semua tombol nav
  const semuaTombol = document.querySelectorAll('.nav-btn');
  semuaTombol.forEach(btn => btn.classList.remove('active'));

  // Tampilkan halaman yang dipilih
  document.getElementById(idHalaman).classList.add('active');
  tombol.classList.add('active');

  // Scroll ke atas otomatis
  window.scrollTo(0, 0);
}

// Data untuk simulasi kerusakan organ
const dataOrgan = {
  otak: {
    judul: "Kerusakan Otak & Sistem Saraf",
    deskripsi: "Zat stimulan seperti sabu-sabu memaksa otak melepas dopamin secara berlebihan. Jangka panjangnya, sel reseptor saraf mati permanen, memicu halusinasi, paranoid, hingga gangguan jiwa berat.",
    gejala: "Sulit tidur (insomnia), gemetar (tremor), emosi tidak stabil, dan hilangnya daya ingat jangka pendek."
  },
  jantung: {
    judul: "Gangguan Jantung & Pembuluh Darah",
    deskripsi: "Narkotika jenis stimulan (kokain, ekstasi) memacu detak jantung jauh di atas batas normal dan menyempitkan pembuluh darah, yang berisiko menyebabkan serangan jantung mendadak di usia muda.",
    gejala: "Nyeri dada, jantung berdebar kencang (aritmia), tekanan darah melonjak drastis, hingga risiko stroke."
  },
  paru: {
    judul: "Kerusakan Saluran Pernapasan",
    deskripsi: "Zat yang dihisap seperti ganja, tembakau sintetis, atau uap zat kimia merusak jaringan halus paru-paru (alveolus) serta melumpuhkan fungsi silia penyaring kotoran.",
    gejala: "Sesak napas kronis, batuk berkepanjangan, nyeri saat menarik napas, dan rentan terkena infeksi paru."
  },
  hati: {
    judul: "Gagal Fungsi Hati & Ginjal",
    deskripsi: "Hati dan ginjal bekerja keras menyaring racun kimia dari obat-obatan terlarang. Paparan terus-menerus memicu peradangan hati (hepatitis toksik) dan kerusakan penyaring ginjal.",
    gejala: "Kulit dan mata menguning, nyeri pada perut bagian kanan atas, urin berwarna gelap, hingga tubuh mudah lemas."
  }
};

function pilihOrgan(kunci, elemen) {
  // Ubah tampilan kartu yang aktif
  document.querySelectorAll('.organ-item').forEach(item => item.classList.remove('active'));
  elemen.classList.add('active');

  // Update teks penjelasan
  const info = dataOrgan[kunci];
  document.getElementById('judul-organ').innerText = info.judul;
  document.getElementById('deskripsi-organ').innerText = info.deskripsi;
  document.getElementById('gejala-organ').innerText = info.gejala;
}

// Fitur pencarian artikel sederhana
function filterArtikel() {
  const kataKunci = document.getElementById('cariArtikel').value.toLowerCase();
  const daftar = document.querySelectorAll('.artikel-item');

  daftar.forEach(artikel => {
    const teks = artikel.innerText.toLowerCase();
    if (teks.includes(kataKunci)) {
      artikel.style.display = 'block';
    } else {
      artikel.style.display = 'none';
    }
  });
}

// Data isi artikel lengkap untuk modal
const isiArtikelLengkap = [
  {
    judul: "Kronologi Kerusakan Sel Saraf Akibat Metamfetamin",
    konten: "<p>Metamfetamin atau sabu-sabu bekerja langsung pada sistem saraf pusat. Saat dikonsumsi, zat ini membanjiri otak dengan dopamin hingga 10 kali lipat dari kondisi normal.</p><br><p>Akibatnya, pengguna merasakan energi semu yang berlebihan. Namun setelah efeknya habis, otak mengalami kekurangan dopamin ekstrem yang memicu depresi berat, kecemasan, dan kerusakan struktur otak bagian depan yang mengatur pengambilan keputusan.</p>"
  },
  {
    judul: "Ancaman Nyata Asap Ganja dan Vape Terlarang",
    konten: "<p>Banyak remaja menganggap mengisap ganja atau liquid vape berbahan sintetis lebih aman daripada rokok biasa. Faktanya, suhu pembakaran yang tinggi menghasilkan senyawa karsinogenik yang mengendap di paru-paru.</p><br><p>Pada usia remaja, paru-paru masih dalam tahap perkembangan. Paparan zat kimia tersebut menghambat kapasitas oksigen dan memicu kerusakan jaringan paru permanen.</p>"
  },
  {
    judul: "Cara Menolak Ajakan Teman Sebaya",
    konten: "<p>1. <strong>Katakan Tidak dengan Tegas:</strong> Gunakan bahasa tubuh yang santai namun yakin tanpa perlu mencari-cari alasan rumit.<br>2. <strong>Alihkan Topik:</strong> Ajak teman membahas hal lain seperti game, olahraga, atau rencana kegiatan lain.<br>3. <strong>Tinggalkan Lokasi:</strong> Jika situasi mulai memaksa, segera pamit pulang atau menjauh dari lingkaran tersebut.</p>"
  }
];

function bukaArtikel(index) {
  const data = isiArtikelLengkap[index];
  document.getElementById('modalJudul').innerText = data.judul;
  document.getElementById('modalIsi').innerHTML = data.konten;
  document.getElementById('modalInfo').style.display = 'flex';
}

function bukaModalHukum() {
  document.getElementById('modalJudul').innerText = "UU No. 35 Tahun 2009 tentang Narkotika";
  document.getElementById('modalIsi').innerHTML = `
    <p>Undang-undang ini mengatur pengawasan ketat terhadap peredaran narkotika di Indonesia:</p><br>
    <ul>
      <li><strong>Pasal 111 & 112:</strong> Kepemilikan atau penguasaan narkotika tanpa hak dipidana penjara minimal 4 tahun.</li>
      <li><strong>Pasal 114:</strong> Pengedar atau perantara jual beli narkotika diancam pidana penjara seumur hidup atau hukuman mati.</li>
      <li><strong>Pasal 54:</strong> Pecandu narkotika dan korban penyalahgunaan wajib menjalani rehabilitasi medis dan rehabilitasi sosial.</li>
    </ul>
  `;
  document.getElementById('modalInfo').style.display = 'flex';
}

function tutupModal() {
  document.getElementById('modalInfo').style.display = 'none';
}

// Fitur Tanya Jawab Sederhana (tanpa embel-embel AI)
function kirimPertanyaan(e) {
  e.preventDefault();
  const input = document.getElementById('inputPertanyaan');
  const tanya = input.value.toLowerCase();
  const boxJawaban = document.getElementById('chat-output');

  let jawaban = "Terima kasih sudah bertanya. Secara umum, semua jenis narkotika yang disalahgunakan merusak saraf dan organ vital. Jika butuh konsultasi lebih lanjut, silakan hubungi layanan konselor BNN di menu bawah.";

  if (tanya.includes("ganja")) {
    jawaban = "<strong>Info Ganja:</strong> Ganja masuk Narkotika Golongan I. Kandungan THC di dalamnya mengganggu konsentrasi, daya ingat, serta merusak fungsi paru-paru dan kesehatan mental.";
  } else if (tanya.includes("sabu")) {
    jawaban = "<strong>Info Sabu-sabu:</strong> Sabu bersifat stimulan kuat yang merusak sel saraf otak, memicu detak jantung berlebih, paranoia, dan penurunan berat badan drastis.";
  } else if (tanya.includes("rehab") || tanya.includes("sembuh")) {
    jawaban = "<strong>Info Rehabilitasi:</strong> Korban penyalahgunaan narkoba bisa pulih melalui rehabilitasi medis dan sosial. Pengguna yang melapor diri untuk rehabilitasi tidak dipidana sesuai aturan BNN.";
  } else if (tanya.includes("hukum") || tanya.includes("penjara")) {
    jawaban = "<strong>Info Hukum:</strong> Berdasarkan UU No. 35 Tahun 2009, menyimpan, membeli, atau mengedarkan narkotika tanpa izin medis diancam hukuman penjara minimal 4 tahun hingga seumur hidup.";
  }

  boxJawaban.innerHTML = jawaban;
  boxJawaban.classList.remove('hidden');
  input.value = "";
}