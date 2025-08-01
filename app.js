document.addEventListener('DOMContentLoaded', () => {
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');

    // Функция для показа arrow1 и скрытия arrow2
    function showArrow1() {
        arrow1.classList.remove('hidden');
        arrow2.classList.add('hidden');
    }

    // Функция для показа arrow2 и скрытия arrow1
    function showArrow2() {
        arrow1.classList.add('hidden');
        arrow2.classList.remove('hidden');
    }

    // Обработчик клика для arrow1
    arrow1.addEventListener('click', () => {
        showArrow2(); // При клике на arrow1, показываем arrow2
    });

    // Обработчик клика для arrow2
    arrow2.addEventListener('click', () => {
        showArrow1(); // При клике на arrow2, показываем arrow1
    });

    // Изначальное состояние: arrow1 виден, arrow2 скрыт (уже задано в HTML, но можно явно вызвать)
    showArrow1();
}); document.addEventListener('DOMContentLoaded', () => {
    const arrow1 = document.getElementById('arrow1');
    const arrow2 = document.getElementById('arrow2');

    // Функция для показа arrow1 и скрытия arrow2
    function showArrow1() {
        arrow1.classList.remove('hidden');
        arrow2.classList.add('hidden');
    }

    // Функция для показа arrow2 и скрытия arrow1
    function showArrow2() {
        arrow1.classList.add('hidden');
        arrow2.classList.remove('hidden');
    }

    // Обработчик клика для arrow1
    arrow1.addEventListener('click', () => {
        showArrow2(); // При клике на arrow1, показываем arrow2
    });

    // Обработчик клика для arrow2
    arrow2.addEventListener('click', () => {
        showArrow1(); // При клике на arrow2, показываем arrow1
    });

    // Изначальное состояние: arrow1 виден, arrow2 скрыт (уже задано в HTML, но можно явно вызвать)
    showArrow1();
});