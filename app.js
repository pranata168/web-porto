/* =========================================================
   INTERACTIVE JAVASCRIPT - GOV PORTFOLIO & DIGITAL CV
   ========================================================= */

// Sample Data for Modal Policy Briefs & Research Studies
const policyBriefData = {
  'sample-brief-1': {
    tag: 'Policy Brief • SPBE & Digital Governance',
    title: 'Optimalisasi SPBE: Mengatasi Dampak Inefisiensi "Silo Sistem" Aplikasi Publik Daerah',
    author: 'Fresh Graduate Ilmu Pemerintahan',
    date: 'Oktober 2024',
    background: 'Berdasarkan kajian lapangan, terdapat lebih dari 14 aplikasi sektoral pada 8 OPD yang berjalan terpisah tanpa pertukaran data (data silo). Hal ini menyebabkan beban ganda pada masyarakat saat mengurus administrasi serta pemborosan anggaran pemeliharaan server daerah sebesar 28%.',
    analysis: 'Metode analisis menggunakan Regulatory Impact Assessment (RIA) sederhana dan evaluasi arsitektur Sistem Pemerintahan Berbasis Elektronik (SPBE). Ditemukan ketidaksesuaian standard API antar-vendor pengembang.',
    recommendations: [
      'Penerbitan Peraturan Bupati terkait Standar Interoperabilitas Data dan Satu Data Daerah.',
      'Konsolidasi seluruh sistem ke dalam Single Sign-On (SSO) terintegrasi pada portal pelayanan terpadu.',
      'Moratorium pengembangan aplikasi baru yang bersifat sektoral sebelum integrasi API diselesaikan.'
    ]
  },
  'sample-brief-2': {
    tag: 'Skripsi / Riset Empiris Kebijakan',
    title: 'Evaluasi Implementasi Kebijakan Pengelolaan Dana Desa Berbasis Partisipasi Inklusif',
    author: 'Fresh Graduate S.IP (Skripsi Nilai A)',
    date: 'Juli 2024',
    background: 'Penelitian kualitatif mendalam di 3 desa mengenai efektivitas Permendes PDTT dalam menjamin partisipasi kelompok rentan pada forum Musrenbangdes.',
    analysis: 'Melibatkan 25 informan kunci (Kades, BPD, tokoh perempuan, perwakilan disabilitas) dengan koding tematik menggunakan NVivo 12. Ditemukan bahwa partisipasi masih bersifat kuasi-partisipasi (hanya hadir tanpa hak suara substantif).',
    recommendations: [
      'Penyusunan Petunjuk Teknis (Juknis) kuota minimum 30% keterwakilan perempuan dalam tim perumus APBDes.',
      'Penguatan fungsi pengawasan BPD melalui pelatihan legal drafting dan budgeting desa.',
      'Penyediaan papan transparansi digital berbasis WhatsApp bot desa.'
    ]
  },
  'sample-brief-3': {
    tag: 'Program Aksi Publik / KKN',
    title: 'Digitalisasi Persuratan Desa & Pemetaan Potensi UMKM Berbasis WebGIS',
    author: 'Koordinator Unit Pengabdian Masyarakat',
    date: 'Februari 2024',
    background: 'Proses pengurusan surat pengantar warga desa rata-rata memakan waktu 2-3 hari kerja karena arsip manual dan ketidakhadiran perangkat desa di kantor.',
    analysis: 'Merancang alur SOP baru berbantuan Google Workspace & Spreadsheet otomatis yang memangkas waktu proses menjadi kurang dari 2 jam.',
    recommendations: [
      'Adopsi formulir digital terpusat yang dapat diakses melalui handphone warga.',
      'Pemetaan 45 UMKM lokal ke Google Maps terverifikasi untuk mendongkrak omzet pelaku usaha lokal.'
    ]
  },
  'sample-brief-4': {
    tag: 'Policy Memo • Kolaborasi Antar-OPD',
    title: 'Strategi Konvergensi Antar-OPD dalam Akselerasi Penurunan Stunting Daerah',
    author: 'Kajian Isu Kebijakan Kesehatan Publik',
    date: 'Mei 2024',
    background: 'Tingginya angka stunting disebabkan oleh fragmentasi intervensi spesifik (Dinkes) dan intervensi sensitif (Dinas PUPR, Dinsos, DP3A) yang bergerak sendiri-sendiri.',
    analysis: 'Analisis kelembagaan menunjukkan ketiadaan dashboard bersama untuk melacak penerima manfaat bansos sanitasi dan PMT (Pemberian Makanan Tambahan).',
    recommendations: [
      'Pembentukan Tim Koordinasi Konvergensi yang dipimpin langsung oleh Wakil Kepala Daerah.',
      'Penyatuan data sasaran keluarga rentan (Keluarga Risiko Stunting) dalam database terpadu Bappeda.'
    ]
  },
  'sample-brief-5': {
    tag: 'Opini Publik & Analisis Regulasi',
    title: 'Tantangan Netralitas ASN di Era Algoritma Media Sosial dan Polarisasi Digital',
    author: 'Dipublikasikan di Media Opini Publik',
    date: 'Maret 2024',
    background: 'Membahas batasan etika aparatur sipil negara di media daring menjelang kontestasi Pilkada/Pemilu di tengah masifnya interaksi media sosial.',
    analysis: 'Membedah UU No. 20 Tahun 2023 tentang ASN serta Surat Keputusan Bersama (SKB) 5 Lembaga terkait netralitas pegawai negeri.',
    recommendations: [
      'Sosialisasi berkala literasi jejak digital (digital footprint) bagi birokrat muda.',
      'Klarifikasi pedoman postingan edukatif vs keberpihakan politik praktis.'
    ]
  },
  'sample-brief-6': {
    tag: 'Drafting Regulasi / Simulasi Parlemen',
    title: 'Naskah Akademik Raperda Perlindungan Ruang Terbuka Hijau (RTH) Perkotaan',
    author: 'Simulasi Legislatif Mahasiswa',
    date: 'Desember 2023',
    background: 'Penurunan luasan RTH publik di bawah batas minimum 20% akibat alih fungsi lahan komersial dan lambatnya penegakan sanksi zonasi.',
    analysis: 'Kajian yuridis normatif dan komparasi dengan perda penataan ruang kota metropolitan lain di Indonesia.',
    recommendations: [
      'Pemberian insentif pajak bumi & bangunan bagi pengembang swasta yang menyediakan RTH privat di atas 30%.',
      'Pengenaan sanksi denda progresif dan pemulihan fungsi lingkungan bagi pelanggar alih fungsi lahan.'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initPortfolioFilters();
  initMobileNav();
  initNavScrollActive();
});

// Theme Toggle Functionality
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('gov_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('gov_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (theme === 'light') {
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Portfolio Category Filter
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// Mobile Navigation
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const links = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
    });
  });
}

// Scroll spy for navigation
function initNavScrollActive() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Modal Controller for Policy Briefs
function openPolicyPreviewModal(briefId) {
  const modal = document.getElementById('policy-modal');
  const contentContainer = document.getElementById('modal-content');
  const data = policyBriefData[briefId];

  if (!data) return;

  const recommendationsHtml = data.recommendations
    .map(rec => `<li>${rec}</li>`)
    .join('');

  contentContainer.innerHTML = `
    <div class="modal-brief-header">
      <span class="modal-brief-tag"><i class="fa-solid fa-scroll"></i> ${data.tag}</span>
      <h2 class="modal-brief-title">${data.title}</h2>
      <div class="modal-brief-meta">
        <span><i class="fa-regular fa-user"></i> ${data.author}</span> • 
        <span><i class="fa-regular fa-calendar"></i> ${data.date}</span>
      </div>
    </div>

    <div class="modal-section-title"><i class="fa-solid fa-circle-exclamation"></i> Latar Belakang Masalah (Policy Problem)</div>
    <p class="modal-section-body">${data.background}</p>

    <div class="modal-section-title"><i class="fa-solid fa-chart-column"></i> Analisis & Temuan Bukti Empiris</div>
    <p class="modal-section-body">${data.analysis}</p>

    <div class="recommendations-box">
      <h5><i class="fa-solid fa-bullseye"></i> Rekomendasi Kebijakan Strategis:</h5>
      <ol>${recommendationsHtml}</ol>
    </div>

    <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end; gap: 0.8rem;">
      <button class="btn btn-sm btn-outline" onclick="closePolicyModal()">Tutup</button>
      <button class="btn btn-sm btn-primary" onclick="alert('File PDF lengkap disimulasikan siap unduh.')"><i class="fa-solid fa-file-pdf"></i> Unduh Naskah Lengkap</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePolicyModal() {
  const modal = document.getElementById('policy-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function closeModalOnBackdrop(event) {
  if (event.target.id === 'policy-modal') {
    closePolicyModal();
  }
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const feedback = document.getElementById('form-feedback');
  const name = document.getElementById('form-name').value;
  
  feedback.style.display = 'block';
  feedback.style.color = '#10b981';
  feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Terima kasih <strong>${name}</strong>! Pesan Anda telah terkirim (simulasi). Anda juga dapat menghubungi via WhatsApp atau Email langsung.`;

  document.getElementById('contact-form').reset();
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 6000);
}

// Archetype Perspective Switcher Simulation
function applyPerspective(type) {
  const heroBadge = document.querySelector('.hero-badge');
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');

  if (type === 'communicator') {
    heroBadge.innerHTML = '<span class="pulse-dot"></span> Mode: Public PR & Governance Communicator';
    heroTitle.innerHTML = 'Menerjemahkan <span class="gradient-text">Kebijakan Publik Kompleks</span> Menjadi Komunikasi yang Terbuka & Mengedukasi Warga.';
    heroSubtitle.innerHTML = 'Lulusan Ilmu Pemerintahan dengan keahlian dalam <strong>Humas Pemerintahan, Strategic Communication, Press Release, & Manajemen Isu Publik</strong>.';
  } else if (type === 'ngo') {
    heroBadge.innerHTML = '<span class="pulse-dot"></span> Mode: Civic Action & NGO Specialist';
    heroTitle.innerHTML = 'Mendorong <span class="gradient-text">Pemberdayaan Masyarakat</span> & Akuntabilitas Tata Kelola dari Akar Rumput.';
    heroSubtitle.innerHTML = 'Lulusan Ilmu Pemerintahan dengan fokus pada <strong>Advokasi Partisipatif, Monitoring Proyek Sosial, & Penguatan Komunitas Marjinal</strong>.';
  } else if (type === 'govtech') {
    heroBadge.innerHTML = '<span class="pulse-dot"></span> Mode: Digital Gov & GovTech Innovator';
    heroTitle.innerHTML = 'Mengakselerasi <span class="gradient-text">Modernisasi Birokrasi</span> Melalui Arsitektur SPBE & Data Terintegrasi.';
    heroSubtitle.innerHTML = 'Lulusan Ilmu Pemerintahan yang memadukan <strong>Analisis Kebijakan, Evaluasi SPBE, serta Solusi Layanan Digital Ramah Pengguna</strong>.';
  }

  // Scroll to hero smoothly
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}
