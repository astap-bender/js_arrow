document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');

    function rotateArrow() {
        // Получаем текущий угол поворота
        const currentRotation = arrow.style.transform;
        let newRotation = 45; // По умолчанию вращаем на 45 градусов

        if (currentRotation) {
            // Извлекаем текущий угол из строки, если он есть
            const match = currentRotation.match(/rotate\((.*?)deg\)/);
            if (match) {
                const currentAngle = parseFloat(match[1]);
                newRotation = currentAngle + 45; // Добавляем 45 градусов к текущему
            }
        }

        arrow.style.transform = `rotate(${newRotation}deg)`;
    }

    arrow.addEventListener('click', () => {
        rotateArrow();
    });
});
