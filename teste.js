

let currentIndex = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.slide');  // Todos os slides
const totalSlides = slides.length;  // Total de slides

// Função para mover os slides
function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;  // Volta para o último slide se estiver no primeiro
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;  // Volta para o primeiro slide se estiver no último
    }
    updateSlider();
}

// Função para atualizar o slider com o slide correto
function updateSlider() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;  // Desloca os slides conforme o índice
    slider.style.transform = `translateX(${offset}%)`;  // Aplica o deslocamento
}

// Transição automática a cada 6 segundos
setInterval(() => {
    moveSlide(1);  // Move para o próximo slide
}, 6000);  // Intervalo de 6 segundos

// Inicializa o slider
updateSlider();

// Funções para os botões de navegação manual
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));



// Impede a seleção de texto em toda a página
document.body.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });
  