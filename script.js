const box = document.getElementById('box');
const namesContainer = document.getElementById('names');
const button = document.getElementById('openButton');

const namesList = ['R🦊', 'Michell', 'Lua', 'DanielCalle', 'Koyu', 'Fabbio', '+51 915 358 667', '🥸🥸🥸🧐', 'M', 'Samo', 'Joshua', 'jcssantamaria', 'Monse', 'Mons.', 'AwuitaDeFresa', 'Superman', 'Johan'];

function getRandomNames() {
  const shuffled = namesList.sort(() => 0.5 - Math.random());
  return [shuffled[0], shuffled[1]];
}

function openBox() {
  // Animación de abrir la caja
  box.style.transform = 'rotateX(180deg)';

  // Mostrar nombres
  const [name1, name2] = getRandomNames();
  namesContainer.textContent = `🎉 ${name1} y ${name2} 🎉`;
  namesContainer.style.opacity = '1';
}

// Asignar el evento al botón
button.addEventListener('click', openBox);
