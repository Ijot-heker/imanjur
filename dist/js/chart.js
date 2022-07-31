// Status Perkawinan
const dataStatusPerkawinan = {
  labels: [
    'Belum Kawin',
    'Kawin',
    'Cerai Hidup',
    'Cerai Mati'
  ],
  datasets: [{
    label: 'Status Perkawinan',
    data: [481054, 663458, 28287, 59341],
    backgroundColor: [
        'rgb(136, 49, 81)',
        'rgb(210, 104, 147)',
        'rgb(255, 194, 0)',
        'rgb(34, 95, 112)'
    ],
    hoverOffset: 4
  }]
};

const configStatusPerkawinan = {
  type: 'pie',
  data: dataStatusPerkawinan,
};

const statusPerkawinanData = new Chart(
    document.getElementById('statusPerkawinan'),
    configStatusPerkawinan
  );

// Jenjang Pendidikan Tertinggi
const dataPendidikan = {
  labels: [
    'SD/SDLB',
    'Perguruan Tinggi',
    'Paket A',
    'M.Ibtidaiyah',
    'SMP/SMPLB',
    'Paket B',
    'M.Tsanawiyah',
    'SMA/SMK/SMALB',
    'Paket C',
    'M.Aliyah'
  ],
  datasets: [{
    label: 'Data Pendidikan Tertinggi',
    data: [279456, 32598, 0, 0, 128606, 0, 0, 145056, 0, 0],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
};

  const configPendidikan = {
    type: 'doughnut',
    data: dataPendidikan,
    options: {}
  };

  const statusPendidikan = new Chart(
    document.getElementById('pendidikanTertinggi'),
    configPendidikan
  );

// Ijazah Tertinggi
const dataIjazah = {
  labels: [
    'Tidak Punya Ijazah',
    'SD/Sederajat',
    'SMP/Sederajat',
    'SMA/Sederajat',
    'D1/D2/D3',
    'D4/S1',
    'S2/S3'
  ],
  datasets: [{
    label: 'Data Ijazah Tertinggi',
    data: [57966, 251660, 133336, 142537, 9475, 20674, 0],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)',
      'rgb(6, 181, 221)',
      'rgb(0,0,0)'
    ],
    hoverOffset: 4
  }]
};

  const configIjazah = {
    type: 'doughnut',
    data: dataIjazah,
    options: {}
  };

  const statusIjazah = new Chart(
    document.getElementById('ijazahTertinggi'),
    configIjazah
  );

// Status Bangunan
const dataBangunan = {
  labels: [
    'Milik Sendiri',
    'Kontrak/Sewa',
    'Bebas Sewa',
    'Dinas',
    'Lainnya'
  ],
  datasets: [{
    label: 'Status Bangunan',
    data: [291648, 7375, 24663, 834, 22200],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)'
    ],
    hoverOffset: 4
  }]
};

  const configBangunan = {
    type: 'pie',
    data: dataBangunan,
    options: {}
  };

  const statusBangunan = new Chart(
    document.getElementById('statusBangunan'),
    configBangunan
  );

// Data Lantai Terluas
const dataLantai = {
  labels: [
    'Marmer/Granit',
    'Lainnya',
    'Kramik',
    'Parkel',
    'Ubin/Teraso',
    'Kayu/Papan Kualitas Tinggi',
    'Semen'
  ],
  datasets: [{
    label: 'Data Lantai Terluas',
    data: [57966, 251660, 133336, 142537, 9475, 20674, 0],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)',
      'rgb(6, 181, 221)',
      'rgb(0,0,0)'
    ],
    hoverOffset: 4
  }]
};

  const configLantai = {
    type: 'doughnut',
    data: dataLantai,
    options: {}
  };

  const statusLantai = new Chart(
    document.getElementById('lantaiTerluas'),
    configLantai
  );

// Data Dinding Terluas
const dataDinding = {
  labels: [
    'Tembok',
    'Plasteran/Anyaman Bambu/Kawat',
    'Kayu',
    'Anyaman Bambu',
    'Batang Kayu',
    'Bambu',
    'Lainnya'
  ],
  datasets: [{
    label: 'Data Dinding Terluas',
    data: [57966, 251660, 133336, 142537, 9475, 20674, 0],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)',
      'rgb(6, 181, 221)',
      'rgb(0,0,0)'
    ],
    hoverOffset: 4
  }]
};

  const configDinding = {
    type: 'doughnut',
    data: dataDinding,
    options: {}
  };

  const statusDinding = new Chart(
    document.getElementById('dindingTerluas'),
    configDinding
  );

// Sumber Air Minum
const dataMinum = {
  labels: [
    'Air Kemasan Bermerek',
    'Air Sungai/Waduk/Danau',
    'Air Hujan',
    'Air isi Ulang',
    'Ledeng Meteran',
    'Ledeng Eceran',
    'Lainnya'
  ],
  datasets: [{
    label: 'Data Ijazah Tertinggi',
    data: [57966, 251660, 133336, 142537, 9475, 20674, 0],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)',
      'rgb(6, 181, 221)',
      'rgb(0,0,0)'
    ],
    hoverOffset: 4
  }]
};

  const configMinum = {
    type: 'pie',
    data: dataMinum,
    options: {}
  };

  const statusMinum = new Chart(
    document.getElementById('sumberMinum'),
    configMinum
  );

// Sumber Penerangan
const dataPenerangan = {
  labels: [
    'Listrik PLN',
    'Listrik Non PLN',
    'Bukan Listrik'
  ],
  datasets: [{
    label: 'Data Penerangan',
    data: [57966, 251660, 133336],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)'
    ],
    hoverOffset: 4
  }]
};

  const configPenerangan = {
    type: 'pie',
    data: dataPenerangan,
    options: {}
  };

  const statusPenerangan = new Chart(
    document.getElementById('sumberPenerangan'),
    configPenerangan
  );

// Pembuangan Akhir Tinja
const dataPembuangan = {
  labels: [
    'Tangki',
    'SPAL',
    'Lubang Tanah',
    'Kolam/Sawah/Sungai',
    'Pantai/Tanah Lapang/Kebun',
    'Lainnya'
  ],
  datasets: [{
    label: 'Pembuangan Akhir Tinja',
    data: [57966, 251660, 133336, 142537, 9475, 20674],
    backgroundColor: [
      'rgb(136, 49, 81)',
      'rgb(254, 128, 178)',
      'rgb(255, 194, 0)',
      'rgb(34, 95, 112)',
      'rgb(112, 45, 67)',
      'rgb(6, 181, 221)'
    ],
    hoverOffset: 4
  }]
};

  const configPembuangan = {
    type: 'doughnut',
    data: dataIjazah,
    options: {}
  };

  const statusPembuangan = new Chart(
    document.getElementById('pembuanganTinja'),
    configPembuangan
  );