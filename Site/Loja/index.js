const carouselDestaques = document.getElementById('carouselDestaques');
const prevBtnDestaques = document.getElementById('prevBtnDestaques');
const nextBtnDestaques = document.getElementById('nextBtnDestaques');

const carouselRoupas = document.getElementById('carouselRoupas');
const prevBtnRoupas = document.getElementById('prevBtnRoupas');
const nextBtnRoupas = document.getElementById('nextBtnRoupas');

const carouselPerfumes = document.getElementById('carouselPerfumes');
const prevBtnPerfumes = document.getElementById('prevBtnPerfumes');
const nextBtnPerfumes = document.getElementById('nextBtnPerfumes');

const carouselBolsas = document.getElementById('carouselBolsas');
const prevBtnBolsas = document.getElementById('prevBtnBolsas');
const nextBtnBolsas = document.getElementById('nextBtnBolsas');

const carouselAcessorios = document.getElementById('carouselAcessorios');
const prevBtnAcessorios = document.getElementById('prevBtnAcessorios');
const nextBtnAcessorios = document.getElementById('nextBtnAcessorios');

// Novas variáveis para o carrossel de Instrumentos
const carouselInstrumentos = document.getElementById('carouselInstrumentos');
const prevBtnInstrumentos = document.getElementById('prevBtnInstrumentos');
const nextBtnInstrumentos = document.getElementById('nextBtnInstrumentos');

function setupCarousel(prevBtn, nextBtn, carousel) {
    const firstItem = carousel.querySelector('li');
    const itemWidth = firstItem ? firstItem.offsetWidth + 20 : 270;
    
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
}

setupCarousel(prevBtnDestaques, nextBtnDestaques, carouselDestaques);
setupCarousel(prevBtnRoupas, nextBtnRoupas, carouselRoupas);
setupCarousel(prevBtnPerfumes, nextBtnPerfumes, carouselPerfumes);
setupCarousel(prevBtnBolsas, nextBtnBolsas, carouselBolsas);
setupCarousel(prevBtnAcessorios, nextBtnAcessorios, carouselAcessorios);
// Configura o novo carrossel de Instrumentos
setupCarousel(prevBtnInstrumentos, nextBtnInstrumentos, carouselInstrumentos);

const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
    document.body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
});