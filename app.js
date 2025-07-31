document.querySelector('.arrow').addEventListener('click', function () {
    // Переключаем между 0 и 45 градусами при каждом клике
    this.style.transform = this.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
});
