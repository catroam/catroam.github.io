const mainImage = document.getElementById('main-image');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const music = document.getElementById('music');

// Открываем попап и включаем музыку при клике на изображение
mainImage.addEventListener('click', () => {
    popup.style.display = 'flex'; // Показываем попап
    music.play(); // Воспроизводим музыку
});

// Закрываем попап и останавливаем музыку при клике на кнопку закрытия
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Скрываем попап
    music.pause(); // Останавливаем музыку
    music.currentTime = 0; // Сбрасываем воспроизведение в начало
});

// Закрываем попап при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        music.pause();
        music.currentTime = 0;
    }
});