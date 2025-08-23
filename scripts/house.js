function updateHouse() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(box => {
    const selectors = box.dataset.part.split(',').map(s => s.trim());
    selectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        if (box.checked) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
    });
  });
}
