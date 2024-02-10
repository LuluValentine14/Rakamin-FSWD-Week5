class Pendaftar {
    constructor(nama, umur, uangSangu) {
      this.nama = nama;
      this.umur = umur;
      this.uangSangu = uangSangu;
    }
  }
  
  let pendaftarList = [];
  
  function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uangSangu').value);
  
    if (nama.length >= 10 && umur >= 25 && uangSangu >= 100000 && uangSangu <= 1000000) {
      const pendaftar = new Pendaftar(nama, umur, uangSangu);
      pendaftarList.push(pendaftar);
  
      updateListTable();
      calculateResume();
    } else {
      alert('Harap periksa kembali formulir, pastikan semua kriteria terpenuhi.');
    }
  }
  
  function updateListTable() {
    const table = document.getElementById('pendaftarTable');
    table.innerHTML = '';
  
    const headerRow = table.insertRow(0);
    headerRow.innerHTML = '<th>Nama</th><th>Umur</th><th>Uang Sangu</th>';
  
    pendaftarList.forEach((pendaftar, index) => {
      const row = table.insertRow(index + 1);
      row.innerHTML = `<td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>${pendaftar.uangSangu}</td>`;
    });
  }
  
  function calculateResume() {
    const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
    const rataRataUangSangu = totalUangSangu / pendaftarList.length;
  
    const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    const rataRataUmur = totalUmur / pendaftarList.length;
  
    const resumeDiv = document.getElementById('resume');
    resumeDiv.innerHTML = `Rata rata pendaftar memiliki uang sangu sebesar ${rataRataUangSangu.toFixed(2)} dengan rata rata umur ${rataRataUmur.toFixed(2)}`;
  }
  
  function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
  
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  
  // Default tab
  document.getElementsByClassName('tablinks')[0].click();
  