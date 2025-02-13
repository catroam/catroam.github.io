document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const music = document.getElementById('music');

    if (mainImage && popup && closeBtn && music) {
        mainImage.addEventListener('click', () => {
            popup.style.display = 'flex';
            music.volume = 0.3;
            music.play().catch(error => {
                console.error("Ошибка воспроизведения аудио:", error);
            });
        });

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
            music.pause();
            music.currentTime = 0;
        });

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
                music.pause();
                music.currentTime = 0;
            }
        });
    } else {
        console.error("Один из элементов не найден!");
    }
});
