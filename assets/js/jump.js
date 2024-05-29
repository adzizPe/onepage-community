const scareButton = document.getElementById('scareButton');
const scareImage = document.getElementById('scareImage');

scareButton.addEventListener('click', function() {
  scareImage.style.display = 'block';
  setTimeout(function() {
    scareImage.style.display = 'none';
  }, 3000); // Menghilangkan gambar setelah 3 detik
});