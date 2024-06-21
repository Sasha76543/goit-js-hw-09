function createBoxes() {
    const amount = document.getElementById('amountInput').value;
    const boxesContainer = document.getElementById('boxes');

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = getRandomColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxesContainer.appendChild(box);
    }
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = "";
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}