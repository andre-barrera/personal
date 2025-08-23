
function updateHouse() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const parts = [
document.querySelector('.foundation'),
document.querySelector('.walls'),
document.querySelector('.roof'),
document.querySelector('.door'),
document.querySelector('.window.left'),
document.querySelector('.window.right')
  ];

  checkboxes.forEach((box, i) => {
if (box.checked) {
  parts[i].style.display = 'block';
} else {
  parts[i].style.display = 'none';
}
  });
}
