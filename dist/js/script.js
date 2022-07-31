// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Klik diluar hamburger
window.addEventListener('click', function (e) {
   if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
   } 
});

//Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Chart JS Status Pemerintahan
const dataPemerintahan = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: dataPemerintahan,
    datasets: [{
      label: 'Status Pemerintahan',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const statusPemerintahan = new Chart(
    document.getElementById('statuspemerintahan'),
    config
);

// Chart JS Status BPD
const dataBPD = {
  labels: [
    'BPD',
    'LMK'
  ],
  datasets: [{
    label: 'Data BPD/LMK',
    data: [300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
};

  const configBPD = {
    type: 'doughnut',
    data: dataBPD,
    options: {}
  };

  const statusBPD = new Chart(
    document.getElementById('statusBPD'),
    configBPD
  );

//Chart JS Penggunaan Listrik
const dataPenggunaanListrik = {
  labels: [
    'Tinggi',
    'Sedang',
    'Rendah'
  ],
  datasets: [{
    label: 'Pagi',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'Malam',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const configPenggunaanListrik = {
  type: 'radar',
  data: dataPenggunaanListrik,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

  const statusPenggunaanListrik = new Chart(
    document.getElementById('penggunaanListrik'),
    configPenggunaanListrik
  );

//Chart JS Sumber Listrik
const dataSumberListrik = {
  datasets: [{
    label: 'Data Sumber Listrik',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const configSumberListrik = {
  type: 'bubble',
  data: dataSumberListrik,
  options: {}
};

const statusSumberListrik = new Chart(
    document.getElementById('sumberListrik'),
    configSumberListrik
  );

//Chart JS Penerangan Jalan
const dataPeneranganJalan = {
  datasets: [{
    label: 'Data Penerangan Jalan',
    data: [{
      x: 20,
      y: 15,
      r: 30
    }, {
      x: 40,
      y: 10,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};

const configPeneranganJalan = {
  type: 'bubble',
  data: dataPeneranganJalan,
  options: {}
};

const statusPeneranganJalan = new Chart(
    document.getElementById('peneranganJalan'),
    configPeneranganJalan
  );

// Chart JS Bahan Bakar Masak
const dataBahanBakarMasak = {
  labels: [
    'Sandang',
    'Pangan',
    'Papan'
  ],
  datasets: [{
    label: 'Data Bahan Bakar Masak',
    data: [50,300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const configBahanBakarMasak = {
  type: 'pie',
  data: dataBahanBakarMasak,
};

const statusBahanBakarMasak = new Chart(
    document.getElementById('bahanBakarMasak'),
    configBahanBakarMasak
  );

// Chart JS Tempat Buang Sampah
const dataBuangSampah = {
  labels: [
    'Kecamatan A',
    'Kecamatan B',
    'Kecamatan C'
  ],
  datasets: [{
    label: 'Data Tempat Buang Sampah',
    data: [50,300,100],
    backgroundColor: [
      'rgb(54, 162, 235)',
      'rgb(255, 99, 132)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const configTempatBuangSampah = {
  type: 'pie',
  data: dataBuangSampah,
};

const statusTempatBuangSampah = new Chart(
    document.getElementById('tempatBuangSampah'),
    configTempatBuangSampah
  );

// Chart JS Fasilitas Buang Air
const dataFasilitasBuangAir = {
  labels: [
    'Kecamatan A',
    'Kecamatan B',
    'Kecamatan C',
    'Kecamatan D',
    'Kecamatan E'
  ],
  datasets: [{
    label: 'Data Fasilitas Buang Air Besar',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};

const configFasilitasBuangAir = {
  type: 'polarArea',
  data: dataFasilitasBuangAir,
  options: {}
};

const statusFasilitasBuangAir = new Chart(
document.getElementById('fasilitasBuangAir'),
    configFasilitasBuangAir
  );

//Chart JS Pembuangan Akhir
const dataPembuanganAkhir = {
  labels: [
    'Kecamatan A',
    'Kecamatan B',
    'Kecamatan C',
    'Kecamatan D',
    'Kecamatan E'
  ],
  datasets: [{
    label: 'Data Pembuangan Akhir Tinja',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};

const configPembuanganAkhir = {
  type: 'polarArea',
  data: dataPembuanganAkhir,
  options: {}
};

const statusPembuanganAkhir = new Chart(
document.getElementById('pembuanganAkhir'),
    configPembuanganAkhir
  );

//Chart JS Bencana Alam 1
const dataBencanaBulan = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const dataBencana1 = {
    labels: dataBencanaBulan,
    datasets: [{
      label: 'Bencana Alam 2021',
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgb(54, 162, 235)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const configBencana1 = {
    type: 'line',
    data: dataBencana1,
    options: {}
};

const statusBencana1 = new Chart(
    document.getElementById('bencana1'),
    configBencana1
);

//Chart JS Bencana 2
const dataBencana2 = {
    labels: dataBencanaBulan,
    datasets: [{
      label: 'Bencana Alam 2022',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const configBencana2 = {
    type: 'line',
    data: dataBencana2,
    options: {}
};

const statusBencana2 = new Chart(
    document.getElementById('bencana2'),
    configBencana2
);
