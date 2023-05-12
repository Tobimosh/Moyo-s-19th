const infoElement = document.querySelector('.info');
const text = infoElement.dataset.text;

function typeText(element, text) {
  let i = 0;
  const typingInterval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
    }
  }, 50);
}

typeText(infoElement, text);
