document.querySelector('.cat').addEventListener('mouseover', function() {
  this.classList.remove('sleep');
  this.classList.add('wake');
});

document.querySelector('.cat').addEventListener('mouseleave', function() {
  this.classList.remove('wake');
  this.classList.add('sleep');
});