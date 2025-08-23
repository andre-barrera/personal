 function updateHouse() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');

      checkboxes.forEach(box => {
        const selectors = box.dataset.part.split(',').map(s => s.trim());
        selectors.forEach(selector => {
          const element = document.querySelector(selector);
          if (element) {
            element.style.display = box.checked ? 'block' : 'none';
          }
        });
      });
    }