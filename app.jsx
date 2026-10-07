const { useState, useEffect } = React;

// 1. DATA MASTER PORTOFOLIO & KAJIAN KEBIJAKAN
const PORTFOLIO_DATA = [
  {
    id: 'sample-brief-1',
    category: 'policy',
    tag: 'Policy Brief',
    title: 'Optimalisasi SPBE: Mengatasi Dampak Inefisiensi "Silo Sistem" Aplikasi Pelayanan Publik Daerah',
    date: 'Oktober 2024 • Kajian Kebijakan Mandiri',
    excerpt: 'Menganalisis fragmentasi 14+ aplikasi sektoral daerah dan merumuskan regulasi interoperabilitas data satu pintu serta arsitektur Single Sign-On (SSO).',
    highlights: ['Interoperabilitas Data SPBE', 'Efisiensi Anggaran APBD 28%'],
    fullContent: {
      tag: 'Policy Brief • SPBE & Digital Governance',
      author: 'Fresh Graduate Ilmu Pemerintahan (S.IP)',
      date: 'Oktober 2024',
      background: 'Berdasarkan telaah lapangan, terdapat lebih dari 14 aplikasi sektoral pada 8 OPD daerah yang tidak saling terintegrasi (data silo). Hal ini menyebabkan beban administrasi ganda pada masyarakat dan inefisiensi belanja server tahunan.',
      analysis: 'Metode analisis menggunakan Regulatory Impact Assessment (RIA) sederhana dan evaluasi arsitektur SPBE KemenPAN-RB. Ditemukan ketiadaan regulasi turunan level kabupaten tentang standar API terbuka.',
      recommendations: [
        'Penerbitan Peraturan Bupati terkait Standar Interoperabilitas Data dan Satu Data Daerah.',
        'Konsolidasi sistem pelayanan ke dalam portal Single Sign-On (SSO) terpadu.',
        'Moratorium pembuatan aplikasi baru yang bersifat sektoral sebelum integrasi API diselesaikan.'
      ]
    }
  },
  {
    id: 'sample-brief-2',
    category: 'research',
    tag: 'Skripsi / Jurnal Ilmiah',
    title: 'Evaluasi Implementasi Kebijakan Pengelolaan Dana Desa Berbasis Partisipasi Inklusif',
    date: 'Juli 2024 • Nilai A (Skripsi)',
    excerpt: 'Riset kualitatif di 3 desa menggunakan model Mazmanian & Sabatier. Mengidentifikasi hambatan pelibatan kelompok perempuan dan disabilitas dalam forum Musrenbangdes.',
    highlights: ['25+ Informan Kunci', 'Koding Tematik NVivo 12'],
    fullContent: {
      tag: 'Skripsi / Riset Empiris Tata Kelola Desa',
      author: 'Sarjana Ilmu Pemerintahan',
      date: 'Juli 2024',
      background: 'Penelitian kualitatif mendalam mengenai efektivitas Permendes PDTT dalam menjamin partisipasi kelompok rentan pada forum perencanaan anggaran desa (APBDes).',
      analysis: 'Menggunakan triangulasi data wawancara mendalam, observasi forum desa, dan analisis koding NVivo. Temuan riset menunjukkan adanya fenomena kuasi-partisipasi (hanya pemenuhan kuorum daftar hadir).',
      recommendations: [
        'Penyusunan Petunjuk Teknis (Juknis) kuota minimum keterwakilan perempuan di tim 11 perumus APBDes.',
        'Pelatihan kapasitas legal drafting dan budgeting bagi anggota Badan Permusyawaratan Desa (BPD).',
        'Penyediaan kanal pengaduan dan transparansi digital berbasis WhatsApp warga.'
      ]
    }
  },
  {
    id: 'sample-brief-3',
    category: 'community',
    tag: 'Program Aksi & KKN',
    title: 'Digitalisasi Persuratan Desa & Pemetaan Potensi UMKM Berbasis WebGIS',
    date: 'Februari 2024 • Koordinator Unit KKN',
    excerpt: 'Menginisiasi sistem administrasi persuratan digital berbasis Google Workspace untuk aparatur desa serta memetakan 45 UMKM lokal ke Google Maps terverifikasi.',
    highlights: ['Pelatihan 15 Aparatur Desa', 'Pemangkasan Waktu Layanan 60%'],
    fullContent: {
      tag: 'Program Aksi Publik / KKN Tematik',
      author: 'Koordinator Tim Mahasiswa FISIP',
      date: 'Februari 2024',
      background: 'Warga desa rata-rata menghabiskan waktu 2-3 hari hanya untuk mengurus surat pengantar karena sistem arsip manual dan ketidakhadiran fisik pejabat desa.',
      analysis: 'Merancang alur SOP baru berbantuan template digital terotomatisasi yang memangkas waktu proses menjadi kurang dari 2 jam.',
      recommendations: [
        'Pemberlakuan form digital terstandar yang dapat diisi warga melalui smartphone.',
        'Pembaruan database direktori UMKM desa pada platform Google Maps untuk promosi pariwisata.'
      ]
    }
  },
  {
    id: 'sample-brief-4',
    category: 'policy',
    tag: 'Policy Memo',
    title: 'Strategi Konvergensi Lintas Sektor dalam Akselerasi Penurunan Stunting Daerah',
    date: 'Mei 2024 • Studi Kasus Regional',
    excerpt: 'Merancang mekanisme sinkronisasi program intervensi spesifik (Dinkes) dan intervensi sensitif (Dinsos, PUPR) untuk mengoptimalkan alokasi bansos gizi.',
    highlights: ['Koordinasi Antar-OPD', 'Stakeholder Matrix Mapping'],
    fullContent: {
      tag: 'Policy Memo • Kolaborasi Kebijakan Publik',
      author: 'Analis Muda Kebijakan',
      date: 'Mei 2024',
      background: 'Fragmentasi anggaran dan duplikasi data keluarga penerima manfaat gizi antara instansi kesehatan dan dinas sosial daerah.',
      analysis: 'Analisis kelembagaan dan pemetaan gap komunikasi lintas dinas teknis.',
      recommendations: [
        'Pembentukan Gugus Tugas Konvergensi yang bertanggung jawab langsung kepada Wakil Kepala Daerah.',
        'Penyatuan basis data sasaran keluarga risiko stunting ke dalam dashboard terpadu Bappeda.'
      ]
    }
  },
  {
    id: 'sample-brief-5',
    category: 'research',
    tag: 'Opini Publik & Regulasi',
    title: 'Tantangan Netralitas ASN di Era Algoritma Media Sosial dan Polarisasi Digital',
    date: 'Maret 2024 • Publikasi Media Opini',
    excerpt: 'Menelaah batasan hukum UU ASN vs kebebasan berekspresi di ruang digital, serta rekomendasi pencegahan pelanggaran etika bagi aparatur muda.',
    highlights: ['Analisis UU No. 20/2023 ASN', '3.500+ Readers'],
    fullContent: {
      tag: 'Opini Publik & Etika Birokrasi',
      author: 'Penulis Opini Soshum',
      date: 'Maret 2024',
      background: 'Tingginya potensi pelanggaran netralitas digital pegawai negeri sipil menjelang kontestasi pilkada/pemilu nasional.',
      analysis: 'Bedah komparatif regulasi disiplin ASN dan implementasi Surat Keputusan Bersama (SKB) 5 Lembaga.',
      recommendations: [
        'Sosialisasi berkala mengenai digital footprint dan etika bermedia sosial.',
        'Penyusunan buku panduan praktis (Do & Don\'t) aktivitas online bagi ASN muda.'
      ]
    }
  },
  {
    id: 'sample-brief-6',
    category: 'community',
    tag: 'Legislative Simulation',
    title: 'Simulasi Parlemen: Naskah Akademik Raperda Perlindungan Ruang Terbuka Hijau (RTH)',
    date: 'Desember 2023 • Parlemen Mahasiswa',
    excerpt: 'Menyusun naskah akademik hukum dan klausul pasal perlindungan zonasi 30% RTH perkotaan dari alih fungsi lahan komersial.',
    highlights: ['Legal Drafting Raperda', 'Best Delegate Forum'],
    fullContent: {
      tag: 'Legal Drafting & Naskah Akademik',
      author: 'Komisi Legislasi Mahasiswa',
      date: 'Desember 2023',
      background: 'Penyusutan luasan ruang terbuka hijau kota akibat ekspansi kawasan ruko dan lemahnya sanksi perizinan.',
      analysis: 'Telaah yuridis normatif dan analisis komparasi peraturan daerah penataan ruang kota metropolitan.',
      recommendations: [
        'Skema insentif pajak bumi bagi pengembang swasta yang melestarikan RTH di atas standar minimal.',
        'Penerapan sanksi administratif dan denda pemulihan lingkungan secara bertahap.'
      ]
    }
  }
];

// 2. MAIN REACT APPLICATION COMPONENT
function App() {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [perspective, setPerspective] = useState('default'); // 'default', 'communicator', 'ngo', 'govtech'
  const [formFeedback, setFormFeedback] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('gov_theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('gov_theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const filteredPortfolio = activeFilter === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === activeFilter);

  // Perspective content dynamic switch
  const getHeroContent = () => {
    switch(perspective) {
      case 'communicator':
        return {
          badge: 'Mode Aktif: Public PR & Governance Communicator',
          title: 'Menerjemahkan Kebijakan Publik Kompleks Menjadi Komunikasi Terbuka & Edukatif.',
          subtitle: 'Lulusan Ilmu Pemerintahan (S.IP) dengan keahlian dalam Hubungan Masyarakat Pemerintahan, Press Release, Infografis Edukasi Regulasi, & Manajemen Reputasi Lembaga Publik.'
        };
      case 'ngo':
        return {
          badge: 'Mode Aktif: Civic Action & NGO / Development Specialist',
          title: 'Mendorong Pemberdayaan Masyarakat & Akuntabilitas Tata Kelola dari Akar Rumput.',
          subtitle: 'Lulusan Ilmu Pemerintahan (S.IP) dengan fokus pada Advokasi Komunitas Marjinal, Fasilitator Musyawarah Partisipatif, Monitoring Proyek Sosial, & Riset Lapangan.'
        };
      case 'govtech':
        return {
          badge: 'Mode Aktif: Digital Gov & GovTech Innovator',
          title: 'Mengakselerasi Modernisasi Birokrasi Melalui Arsitektur SPBE & Data Terintegrasi.',
          subtitle: 'Lulusan Ilmu Pemerintahan (S.IP) yang memadukan Analisis Kebijakan, Perbaikan Alur Layanan Publik, Standar Interoperabilitas Data, & Evaluasi Kepuasan Pengguna.'
        };
      default:
        return {
          badge: 'Siap Berkontribusi • Fresh Graduate Ilmu Pemerintahan (S.IP)',
          title: 'Menghubungkan Kebijakan Publik, Riset Empiris, dan Transformasi Tata Kelola Pemerintahan.',
          subtitle: 'Lulusan Sarjana Ilmu Pemerintahan dengan fokus pada Analisis Kebijakan Publik, Tata Kelola Pemerintahan (Good Governance), Riset Sosial, serta Komunikasi Kebijakan & Advokasi.'
        };
    }
  };

  const heroContent = getHeroContent();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setFormFeedback(`Terima kasih Bapak/Ibu ${name}! Pesan Anda telah diterima (simulasi formulir React). Anda juga dapat menghubungi via WhatsApp/Email langsung.`);
    e.target.reset();
    setTimeout(() => setFormFeedback(null), 6000);
  };

  return (
    <div className="react-portfolio-app">
      {/* Ambient Glow */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-brand">
            <span className="brand-badge">React S.IP</span>
            <span className="brand-text">Portfolio<strong>Gov</strong></span>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}><i className="fa-regular fa-user"></i> Profil</a>
            <a href="#competencies" className="nav-link" onClick={() => setMobileMenuOpen(false)}><i className="fa-solid fa-chart-pie"></i> Kompetensi</a>
            <a href="#portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}><i className="fa-solid fa-book-bookmark"></i> Karya & Riset</a>
            <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}><i className="fa-solid fa-timeline"></i> Riwayat</a>
            <a href="#archetypes" className="nav-link badge-highlight" onClick={() => setMobileMenuOpen(false)}><i className="fa-solid fa-compass"></i> Opsi Format</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}><i className="fa-regular fa-envelope"></i> Kontak</a>
          </nav>

          <div className="nav-actions">
            <button onClick={toggleTheme} className="btn-icon" title="Ganti Tema (Gelap/Terang)">
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button onClick={() => window.print()} className="btn btn-outline" title="Cetak / Export PDF CV">
              <i className="fa-solid fa-print"></i> <span>Export PDF</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="btn-icon mobile-menu-btn" aria-label="Toggle Menu">
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="hero-container">
            <div className="hero-badge">
              <span className="pulse-dot"></span> {heroContent.badge}
            </div>

            <h1 className="hero-title">
              {heroContent.title.split('Kebijakan Publik').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && heroContent.title.includes('Kebijakan Publik') && <span className="gradient-text">Kebijakan Publik</span>}
                </React.Fragment>
              ))}
            </h1>

            <p className="hero-subtitle">{heroContent.subtitle}</p>

            <div className="hero-cta-group">
              <a href="#portfolio" className="btn btn-primary">
                <i className="fa-solid fa-briefcase"></i> Eksplorasi Portofolio
              </a>
              <a href="#contact" className="btn btn-glass">
                <i className="fa-solid fa-paper-plane"></i> Hubungi Saya
              </a>
              <button className="btn btn-secondary" onClick={() => setSelectedBrief(PORTFOLIO_DATA[0].fullContent)}>
                <i className="fa-solid fa-file-contract"></i> Contoh Policy Brief
              </button>
            </div>

            {/* Quick Stats Banner */}
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon"><i className="fa-solid fa-scroll"></i></div>
                <div className="stat-info">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Policy Brief & Riset</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fa-solid fa-building-columns"></i></div>
                <div className="stat-info">
                  <span className="stat-num">3.85<small>/4.00</small></span>
                  <span className="stat-label">IPK (Cumlaude)</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fa-solid fa-users-viewfinder"></i></div>
                <div className="stat-info">
                  <span className="stat-num">4+</span>
                  <span className="stat-label">Magang & Organisasi</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><i className="fa-solid fa-certificate"></i></div>
                <div className="stat-info">
                  <span className="stat-num">6+</span>
                  <span className="stat-label">Sertifikasi & Pelatihan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Executive Summary</span>
              <h2 className="section-title">Tentang Saya & Nilai Tambah</h2>
              <p className="section-desc">Kombinasi ketajaman analisis soshum, metodologi riset ilmiah, dan pemahaman regulasi birokrasi pemerintahan.</p>
            </div>

            <div className="about-grid">
              <div className="about-card profile-card">
                <div className="profile-avatar-wrapper">
                  <div className="avatar-box">
                    <i className="fa-solid fa-user-tie avatar-placeholder-icon"></i>
                  </div>
                  <div className="profile-meta">
                    <h3 className="profile-name">Nama Lengkap, S.IP</h3>
                    <p className="profile-role">Bachelor of Government Affairs</p>
                    <div className="profile-location"><i className="fa-solid fa-location-dot"></i> Jakarta / Yogyakarta, Indonesia</div>
                  </div>
                </div>

                <div className="profile-bio">
                  <p>
                    Memiliki pemahaman mendalam tentang siklus kebijakan publik (formulasi, implementasi, evaluasi), tata kelola birokrasi daerah/nasional, serta pemanfaatan data kualitatif dan kuantitatif dalam penyusunan rekomendasi strategis.
                  </p>
                </div>

                <div className="profile-quick-details">
                  <div className="detail-row">
                    <span className="detail-key"><i className="fa-solid fa-graduation-cap"></i> Universitas</span>
                    <span className="detail-val">Universitas Terkemuka (2020 - 2024)</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-key"><i className="fa-solid fa-award"></i> Peminatan</span>
                    <span className="detail-val">Kebijakan Publik & Smart Governance</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-key"><i className="fa-solid fa-language"></i> Bahasa</span>
                    <span className="detail-val">Indonesia (Native), English (TOEFL 580)</span>
                  </div>
                </div>

                <div className="profile-actions">
                  <a href="mailto:emailanda@gmail.com" className="btn btn-sm btn-outline"><i className="fa-solid fa-envelope"></i> Kirim Email</a>
                  <a href="https://linkedin.com" target="_blank" className="btn btn-sm btn-outline"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </div>
              </div>

              <div className="about-card-group">
                <div className="pillar-card">
                  <div className="pillar-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                  <div className="pillar-body">
                    <h4>Analisis Kebijakan & Regulatory Impact</h4>
                    <p>Mampu menganalisis naskah akademik, peraturan daerah (Perda), dan dampak kebijakan terhadap stakeholder menggunakan metode SWOT, Stakeholder Mapping, dan Cost-Benefit Analysis.</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon"><i className="fa-solid fa-network-wired"></i></div>
                  <div className="pillar-body">
                    <h4>E-Government & Inovasi Layanan Publik</h4>
                    <p>Memahami arsitektur Sistem Pemerintahan Berbasis Elektronik (SPBE), transformasi birokrasi digital, serta evaluasi kepuasan masyarakat (IKM).</p>
                  </div>
                </div>

                <div className="pillar-card">
                  <div className="pillar-icon"><i className="fa-solid fa-handshake-angle"></i></div>
                  <div className="pillar-body">
                    <h4>Advokasi Kebijakan & Manajemen Stakeholder</h4>
                    <p>Pengalaman berkoordinasi dengan perangkat desa, instansi kedinasan, CSO/NGO, serta masyarakat akar rumput dalam program partisipatif.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPETENCIES SECTION */}
        <section id="competencies" className="section bg-surface">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Core Competencies</span>
              <h2 className="section-title">Matriks Keahlian & Perangkat Kerja</h2>
              <p className="section-desc">Keahlian metodologis, instrumen penelitian, dan perangkat digital pendukung riset kebijakan.</p>
            </div>

            <div className="skills-grid">
              <div className="skill-category-card">
                <div className="category-header">
                  <i className="fa-solid fa-scale-balanced category-icon"></i>
                  <h3>Keahlian Ilmu Pemerintahan</h3>
                </div>
                <ul className="skill-list">
                  <li>
                    <div className="skill-item-header">
                      <span>Policy Analysis & Policy Brief Drafting</span>
                      <span className="skill-level">Mahir (92%)</span>
                    </div>
                    <div className="skill-bar"><div className="skill-fill" style={{width: '92%'}}></div></div>
                  </li>
                  <li>
                    <div className="skill-item-header">
                      <span>Riset Kualitatif (Interview, FGD, Etnografi)</span>
                      <span className="skill-level">Mahir (90%)</span>
                    </div>
                    <div className="skill-bar"><div className="skill-fill" style={{width: '90%'}}></div></div>
                  </li>
                  <li>
                    <div className="skill-item-header">
                      <span>Penyusunan Standar Pelayanan Publik & IKM</span>
                      <span className="skill-level">Menengah-Atas (85%)</span>
                    </div>
                    <div className="skill-bar"><div className="skill-fill" style={{width: '85%'}}></div></div>
                  </li>
                  <li>
                    <div className="skill-item-header">
                      <span>Perencanaan Pembangunan Daerah (Musrenbang)</span>
                      <span className="skill-level">Menengah (80%)</span>
                    </div>
                    <div className="skill-bar"><div className="skill-fill" style={{width: '80%'}}></div></div>
                  </li>
                </ul>
              </div>

              <div className="skill-category-card">
                <div className="category-header">
                  <i className="fa-solid fa-laptop-code category-icon"></i>
                  <h3>Perangkat Analisis & Data</h3>
                </div>
                <div className="tools-badges">
                  <div className="tool-pill"><i className="fa-solid fa-chart-simple"></i> SPSS / JASP <span>(Kuantitatif)</span></div>
                  <div className="tool-pill"><i className="fa-solid fa-project-diagram"></i> NVivo / Atlas.ti <span>(Kualitatif)</span></div>
                  <div className="tool-pill"><i className="fa-solid fa-table"></i> Microsoft Excel Advance <span>(Pivot/Formula)</span></div>
                  <div className="tool-pill"><i className="fa-solid fa-map-location-dot"></i> QGIS Basic <span>(Pemetaan Spasial)</span></div>
                  <div className="tool-pill"><i className="fa-brands fa-figma"></i> Canva & Figma <span>(Visualisasi Kebijakan)</span></div>
                  <div className="tool-pill"><i className="fa-solid fa-database"></i> Mendeley / Zotero <span>(Sitasi Ilmiah)</span></div>
                </div>
              </div>

              <div className="skill-category-card">
                <div className="category-header">
                  <i className="fa-solid fa-users category-icon"></i>
                  <h3>Interpersonal & Leadership</h3>
                </div>
                <div className="soft-skills-grid">
                  <div className="soft-card">
                    <i className="fa-solid fa-bullhorn"></i>
                    <h5>Public Speaking & Fasilitator FGD</h5>
                    <p>Memimpin forum diskusi warga dan presentasi di hadapan pejabat dinas.</p>
                  </div>
                  <div className="soft-card">
                    <i className="fa-solid fa-pen-nib"></i>
                    <h5>Editorial & Academic Writing</h5>
                    <p>Menulis opini publik, artikel jurnal, dan laporan evaluasi formal.</p>
                  </div>
                  <div className="soft-card">
                    <i className="fa-solid fa-brain"></i>
                    <h5>Critical Thinking & Problem Framing</h5>
                    <p>Mengurai akar permasalahan sosial menjadi solusi kebijakan yang dapat dieksekusi.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Portofolio & Karya Nyata</span>
              <h2 className="section-title">Katalog Hasil Riset & Proyek Kebijakan</h2>
              <p className="section-desc">Bukti konkret kapabilitas analitis, dokumen policy brief, riset skripsi, dan proyek advokasi masyarakat.</p>
            </div>

            {/* Filter Buttons */}
            <div className="portfolio-filters">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                Semua Karya ({PORTFOLIO_DATA.length})
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'policy' ? 'active' : ''}`}
                onClick={() => setActiveFilter('policy')}
              >
                Policy Brief & Analisis ({PORTFOLIO_DATA.filter(i => i.category === 'policy').length})
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
                onClick={() => setActiveFilter('research')}
              >
                Riset & Jurnal ({PORTFOLIO_DATA.filter(i => i.category === 'research').length})
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'community' ? 'active' : ''}`}
                onClick={() => setActiveFilter('community')}
              >
                Program Publik & KKN ({PORTFOLIO_DATA.filter(i => i.category === 'community').length})
              </button>
            </div>

            {/* Grid */}
            <div className="portfolio-grid">
              {filteredPortfolio.map(item => (
                <div className="portfolio-card" key={item.id}>
                  <div className={`card-tag ${item.category}-tag`}>
                    <i className={item.category === 'policy' ? 'fa-solid fa-file-lines' : item.category === 'research' ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-hands-holding-circle'}></i> {item.tag}
                  </div>
                  <div className="card-header">
                    <h3>{item.title}</h3>
                    <p className="card-date">{item.date}</p>
                  </div>
                  <p className="card-excerpt">{item.excerpt}</p>
                  <div className="card-highlights">
                    {item.highlights.map((hl, idx) => (
                      <span className="highlight-chip" key={idx}>
                        <i className="fa-solid fa-check"></i> {hl}
                      </span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-sm btn-primary" onClick={() => setSelectedBrief(item.fullContent)}>
                      <i className="fa-solid fa-eye"></i> Baca Executive Summary
                    </button>
                    <button className="btn btn-sm btn-ghost" onClick={() => alert('Simulasi unduh PDF lengkap karya')}>
                      <i className="fa-solid fa-download"></i> PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section id="experience" className="section bg-surface">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Jejak Langkah</span>
              <h2 className="section-title">Pengalaman Magang, Riset, & Kepemimpinan</h2>
              <p className="section-desc">Rekam jejak praktis di lembaga pemerintah, organisasi nirlaba, dan lingkungan akademik.</p>
            </div>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-time">Februari 2024 - Mei 2024</div>
                  <h3 className="timeline-role">Intern - Asisten Analis Kebijakan</h3>
                  <div className="timeline-place"><i className="fa-solid fa-building"></i> Badan Perencanaan Pembangunan Daerah (BAPPEDA)</div>
                  <ul className="timeline-bullets">
                    <li>Membantu verifikasi usulan program musrenbang tingkat kecamatan ke dalam SIPD (Sistem Informasi Pemerintahan Daerah).</li>
                    <li>Menyusun draft awal Bab II Laporan Kinerja Instansi Pemerintah (LKjIP) bidang pembangunan manusia.</li>
                    <li>Menyiapkan data tabular dan infografis untuk materi paparan Kepala Bappeda dalam forum koordinasi tahunan.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-time">Agustus 2023 - Desember 2023</div>
                  <h3 className="timeline-role">Research Assistant (Asisten Peneliti Dosen)</h3>
                  <div className="timeline-place"><i className="fa-solid fa-school"></i> Laboratorium Tata Kelola & Kebijakan Publik Universitas</div>
                  <ul className="timeline-bullets">
                    <li>Melakukan transkripsi dan koding data 18 rekaman wawancara mendalam dengan narasumber pejabat dinas.</li>
                    <li>Melakukan telaah pustaka sistematik (Systematic Literature Review) terkait tema <em>Smart Village</em> di Asia Tenggara.</li>
                    <li>Membantu submit dan revisi peer-review artikel jurnal nasional terakreditasi SINTA 2.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-time">2022 - 2023</div>
                  <h3 className="timeline-role">Ketua Divisi Kajian & Aksi Strategis (Kastrat)</h3>
                  <div className="timeline-place"><i className="fa-solid fa-users"></i> Himpunan Mahasiswa Ilmu Pemerintahan (HIMAGOV)</div>
                  <ul className="timeline-bullets">
                    <li>Memimpin 12 anggota divisi dalam memproduksi 8 kajian kritis isu-isu kebijakan publik regional dan nasional.</li>
                    <li>Menginisiasi program podcast "Bicara Kebijakan" dengan total audiens lebih dari 4.000 pendengar.</li>
                    <li>Menjadi koordinator audiensi resmi perwakilan mahasiswa dengan DPRD Provinsi terkait Raperda Kepemudaan.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item education-special">
                <div className="timeline-dot education-dot"><i className="fa-solid fa-graduation-cap"></i></div>
                <div className="timeline-content">
                  <div className="timeline-time">2020 - 2024</div>
                  <h3 className="timeline-role">Sarjana Ilmu Pemerintahan (S.IP)</h3>
                  <div className="timeline-place"><i className="fa-solid fa-university"></i> Fakultas Ilmu Sosial dan Ilmu Politik (FISIP)</div>
                  <p className="timeline-desc"><strong>IPK: 3.85 / 4.00 (Dengan Pujian / Cumlaude)</strong></p>
                  <div className="timeline-tags">
                    <span>Juara 2 Lomba Karya Tulis Ilmiah Nasional Kebijakan Publik 2023</span>
                    <span>Penerima Beasiswa Prestasi Akademik</span>
                    <span>Delegasi Forum Komunikasi Mahasiswa Ilmu Pemerintahan se-Indonesia (FOKMIND)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHETYPES SECTION */}
        <section id="archetypes" className="section">
          <div className="section-container">
            <div className="section-header">
              <span className="section-tag">Inspirasi & Variasi Portofolio</span>
              <h2 className="section-title">4 Opsi Tipe Website Portofolio Soshum / Ilmu Pemerintahan</h2>
              <p className="section-desc">Pilihan model portofolio yang disesuaikan dengan arah karir spesifik Anda.</p>
            </div>

            <div className="archetypes-grid">
              <div className="archetype-card">
                <div className="archetype-badge">Tipe 01 • Rekomendasi Utama</div>
                <div className="archetype-icon"><i className="fa-solid fa-chart-line"></i></div>
                <h3 className="archetype-title">The Policy Analyst & Researcher</h3>
                <p className="archetype-role"><strong>Target:</strong> Think-Tank (CSIS, SMERU), Bappeda/Kementerian, Analis Kebijakan (PNS/PPPK).</p>
                <div className="archetype-features">
                  <h6>Karakteristik Kunci:</h6>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> Halaman depan fokus pada <em>Policy Briefs</em>.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Menampilkan metodologi (SPSS, NVivo, survey).</li>
                    <li><i className="fa-solid fa-circle-check"></i> Desain berwibawa editorial Navy-Gold.</li>
                  </ul>
                </div>
                <div className="archetype-action">
                  <button className="btn btn-sm btn-outline w-100" onClick={() => { setPerspective('default'); document.getElementById('hero').scrollIntoView({behavior: 'smooth'}); }}>
                    <i className="fa-solid fa-check"></i> Aktifkan Sudut Pandang Ini
                  </button>
                </div>
              </div>

              <div className="archetype-card">
                <div className="archetype-badge">Tipe 02</div>
                <div className="archetype-icon"><i className="fa-solid fa-bullhorn"></i></div>
                <h3 className="archetype-title">The Public PR & Governance Communicator</h3>
                <p className="archetype-role"><strong>Target:</strong> Pranata Humas Pemerintah, Media Komunikasi Publik, Strategic Communication Agency.</p>
                <div className="archetype-features">
                  <h6>Karakteristik Kunci:</h6>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> Infografis penyederhanaan regulasi rumit.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Dokumentasi press release & kampanye sosial.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Tampilan dinamis dan galeri visual.</li>
                  </ul>
                </div>
                <div className="archetype-action">
                  <button className="btn btn-sm btn-outline w-100" onClick={() => { setPerspective('communicator'); document.getElementById('hero').scrollIntoView({behavior: 'smooth'}); }}>
                    <i className="fa-solid fa-sliders"></i> Simulasi Sudut Pandang Humas
                  </button>
                </div>
              </div>

              <div className="archetype-card">
                <div className="archetype-badge">Tipe 03</div>
                <div className="archetype-icon"><i className="fa-solid fa-hand-holding-heart"></i></div>
                <h3 className="archetype-title">The Civic Action & NGO Specialist</h3>
                <p className="archetype-role"><strong>Target:</strong> NGO/LSM Internasional (USAID, UNDP), CSR BUMN, Program Officer Desa.</p>
                <div className="archetype-features">
                  <h6>Karakteristik Kunci:</h6>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> Menitikberatkan pada <em>Project Impact</em> warga.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Galeri foto aksi lapangan dan advokasi.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Studi kasus naratif (Story of Change).</li>
                  </ul>
                </div>
                <div className="archetype-action">
                  <button className="btn btn-sm btn-outline w-100" onClick={() => { setPerspective('ngo'); document.getElementById('hero').scrollIntoView({behavior: 'smooth'}); }}>
                    <i className="fa-solid fa-sliders"></i> Simulasi Sudut Pandang NGO
                  </button>
                </div>
              </div>

              <div className="archetype-card">
                <div className="archetype-badge">Tipe 04</div>
                <div className="archetype-icon"><i className="fa-solid fa-laptop-file"></i></div>
                <h3 className="archetype-title">The Digital Gov & GovTech Innovator</h3>
                <p className="archetype-role"><strong>Target:</strong> Startup GovTech, Konsultan SPBE/Smart City, Business Analyst Sektor Publik.</p>
                <div className="archetype-features">
                  <h6>Karakteristik Kunci:</h6>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i> Arsitektur sistem informasi pelayanan publik.</li>
                    <li><i className="fa-solid fa-circle-check"></i> UI/UX simulasi portal perizinan terpadu.</li>
                    <li><i className="fa-solid fa-circle-check"></i> Tech-forward aesthetic & badge digital.</li>
                  </ul>
                </div>
                <div className="archetype-action">
                  <button className="btn btn-sm btn-outline w-100" onClick={() => { setPerspective('govtech'); document.getElementById('hero').scrollIntoView({behavior: 'smooth'}); }}>
                    <i className="fa-solid fa-sliders"></i> Simulasi Sudut Pandang GovTech
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section bg-surface">
          <div className="section-container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <span className="section-tag">Siap Kolaborasi</span>
                <h2 className="section-title">Mari Terhubung & Berdiskusi</h2>
                <p className="section-desc">
                  Saya terbuka untuk peluang kerja full-time, fellowship riset, posisi Management Trainee (MT), konsultan junior, ataupun kolaborasi proyek kebijakan publik.
                </p>

                <div className="contact-cards">
                  <a href="mailto:emailanda@domain.com" className="contact-card">
                    <div className="contact-card-icon"><i className="fa-solid fa-envelope"></i></div>
                    <div>
                      <div className="contact-card-label">Email Langsung</div>
                      <div className="contact-card-value">email.anda@gmail.com</div>
                    </div>
                  </a>

                  <a href="https://wa.me/6281234567890" target="_blank" className="contact-card">
                    <div className="contact-card-icon"><i className="fa-brands fa-whatsapp"></i></div>
                    <div>
                      <div className="contact-card-label">WhatsApp</div>
                      <div className="contact-card-value">+62 812-3456-7890</div>
                    </div>
                  </a>

                  <a href="https://linkedin.com/in/username" target="_blank" className="contact-card">
                    <div className="contact-card-icon"><i className="fa-brands fa-linkedin"></i></div>
                    <div>
                      <div className="contact-card-label">LinkedIn Profile</div>
                      <div className="contact-card-value">linkedin.com/in/profil-anda</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-form-card">
                <h3>Kirim Pesan / Undangan Wawancara</h3>
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="form-name">Nama / Instansi Pengirim</label>
                    <input type="text" id="form-name" name="name" placeholder="Misal: HR Bappeda / Tim Riset CSIS" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-email">Alamat Email</label>
                    <input type="email" id="form-email" name="email" placeholder="nama@instansi.go.id atau email kantor" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-topic">Topik Peluang</label>
                    <select id="form-topic" name="topic" className="form-select">
                      <option value="rekrutmen">Peluang Karir / Rekrutmen Full-Time</option>
                      <option value="research">Kolaborasi Riset & Penulisan</option>
                      <option value="consulting">Konsultasi / Asistensi Program Daerah</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form-message">Pesan Anda</label>
                    <textarea id="form-message" name="message" rows="4" placeholder="Tuliskan gambaran posisi atau peluang yang ingin didiskusikan..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    <i className="fa-solid fa-paper-plane"></i> Kirim Pesan Sekarang
                  </button>

                  {formFeedback && (
                    <div className="form-feedback" style={{display: 'block', color: '#10b981'}}>
                      <i className="fa-solid fa-circle-check"></i> {formFeedback}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* POLICY BRIEF MODAL VIEWER */}
      {selectedBrief && (
        <div className="modal-backdrop active" onClick={(e) => { if (e.target.classList.contains('modal-backdrop')) setSelectedBrief(null); }}>
          <div className="modal-dialog">
            <button className="modal-close" onClick={() => setSelectedBrief(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-body">
              <div className="modal-brief-header">
                <span className="modal-brief-tag"><i className="fa-solid fa-scroll"></i> {selectedBrief.tag}</span>
                <h2 className="modal-brief-title">{selectedBrief.title || 'Policy Document'}</h2>
                <div className="modal-brief-meta">
                  <span><i className="fa-regular fa-user"></i> {selectedBrief.author}</span> • 
                  <span><i className="fa-regular fa-calendar"></i> {selectedBrief.date}</span>
                </div>
              </div>

              <div className="modal-section-title"><i className="fa-solid fa-circle-exclamation"></i> Latar Belakang Masalah (Policy Problem)</div>
              <p className="modal-section-body">{selectedBrief.background}</p>

              <div className="modal-section-title"><i className="fa-solid fa-chart-column"></i> Analisis & Temuan Bukti Empiris</div>
              <p className="modal-section-body">{selectedBrief.analysis}</p>

              <div className="recommendations-box">
                <h5><i className="fa-solid fa-bullseye"></i> Rekomendasi Kebijakan Strategis:</h5>
                <ol>
                  {selectedBrief.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ol>
              </div>

              <div style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.8rem'}}>
                <button className="btn btn-sm btn-outline" onClick={() => setSelectedBrief(null)}>Tutup</button>
                <button className="btn btn-sm btn-primary" onClick={() => alert('File PDF lengkap disimulasikan siap unduh.')}>
                  <i className="fa-solid fa-file-pdf"></i> Unduh Naskah Lengkap
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>© 2024-2026 Portofolio Digital React.js Sarjana Ilmu Pemerintahan. Dirancang dengan standar profesional soshum & birokrasi modern.</p>
          </div>
          <div className="footer-right">
            <a href="#hero">Kembali ke Atas <i className="fa-solid fa-arrow-up"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 3. RENDER TO DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
