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



const hints = {
  ".ground": "A base de tudo é seguir a régua de comunicação corretamente.",
  ".steps": "Use o histórico do cliente para conduzir bem o atendimento.",
  ".left-wall": "Responda dúvidas para evitar recontatos desnecessários.",
  ".right-wall": "Mostre sempre proatividade ao ajudar.",
  ".center-wall": "Demonstre segurança e domínio do assunto.",
  ".center-wallr": "Demonstre segurança e domínio do assunto.",
  ".door": "Compartilhe informações completas e corretas.",
  ".roof-left": "Nunca encerre a interação de forma indevida.",
  ".roof-shadowa": "Nunca encerre a interação de forma indevida.",
  ".roof-shadowb": "Nunca encerre a interação de forma indevida.",
  ".roof-right": "Registre tudo corretamente e de forma completa.",
  ".roof-shadow1": "Registre tudo corretamente e de forma completa.",
  ".chimney": "Use a base de conhecimento como apoio.",
  ".window.left": "Finalize enviando a pesquisa de satisfação.",
  ".window.right": "Finalize enviando a pesquisa de satisfação.",
  ".top-window": "Finalize enviando a pesquisa de satisfação.",
  ".window-bottom1": "Finalize enviando a pesquisa de satisfação.",
  ".window-bottom2": "Finalize enviando a pesquisa de satisfação.",
  ".window-bottom3": "Finalize enviando a pesquisa de satisfação."
};

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

    // show cartoon hint if just checked
    if (box.checked && selectors.length > 0) {
      const bubble = document.getElementById("hintBubble");
      const firstKey = selectors[0];
      bubble.textContent = hints[firstKey] || "Boa escolha!";
      bubble.style.display = "block";

      // auto-hide after 4s
      clearTimeout(bubble.timer);
      bubble.timer = setTimeout(() => {
        bubble.style.display = "none";
      }, 4000);
    }
  });

  // ✅ Trigger confetti if all checked
  const allChecked = Array.from(checkboxes).every(box => box.checked);
  if (allChecked) {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
