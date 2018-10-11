console.log('Proxytia');
var nama = 'nina'
var peran = 'ksatria'

if (nama == 'ade' && peran == ''){
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game');
}else if (nama == 'nina' && peran == 'ksatria') {
  console.log('selamat datang didunia Proxytia, ' + nama);
  console.log('halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu');
}else if (nama == 'danu' && peran == 'tabib') {
  console.log('selamat datang didunia Proxytia, ' + nama);
  console.log('halo ' + peran + ' ' + nama + ' kamu akan membantu temanmu yang terluka');
}else if (nama == 'zero' && peran == 'penyihir') {
  console.log('selamat datang didunia Proxytia, ' + nama);
  console.log('halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu');
}else{
  console.log('nama harus di isi');
}
