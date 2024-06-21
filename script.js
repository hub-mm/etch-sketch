const body = document.querySelector('body');
body.style.margin = '0 auto';
body.style.maxWidth = '960px';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.flexDirection = 'column';

const header = document.querySelector('.header');
header.style.height = '4vh';
header.style.minWidth = '100px';
header.style.borderBottom = 'solid black 1px';
header.style.marginBottom = '5px';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';

const title = document.querySelector('.title');
title.textContent = 'painterSqR';

const sizeInput = document.querySelector('.container-input');
sizeInput.style.display = 'flex';
sizeInput.style.gap = '24px';

const inputSlider = document.querySelector('.input-slider');
inputSlider.style.display = 'flex';
inputSlider.style.alignItems = 'center';
inputSlider.style.gap = '5px';

const showSliderValue = document.querySelector('value');
const slider = document.querySelector('.slider');
let sliderValue = slider.value;
showSliderValue.textContent = `${sliderValue}`;

slider.addEventListener('click', () => {
    sliderValue = slider.value
    showSliderValue.textContent = `${sliderValue}`;
    getCanvas(sliderValue);
})

const input = document.querySelector('.input');
input.style.height = '20px';
input.style.width = '48px';

const container = document.querySelector('.container');
container.style.height = '96vh';
container.style.width = '100%';
container.style.display = 'flex';
container.style.justifyContent = 'center'
container.style.gap = '1px'

let sizeOfCanvas = 16;

const submitBtn = document.querySelector('.submit');
submitBtn.style.height = '26px';

submitBtn.addEventListener('click', () => {
    sizeOfCanvas = getValue();
    getCanvas(sizeOfCanvas);
})

function getValue() {
    value = input.value;
    return value;
}

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function getCanvas() {
    clearContainer(container);
    for (let i = 1; i <= sizeOfCanvas; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        row.style.display = 'flex';
        row.style.flexDirection = 'column';
        row.style.justifyContent = 'center';
        row.style.gap = '1px';

        for (let j = 1; j <= sizeOfCanvas; j++) {
            const div = document.createElement('div');
            div.style.border = 'solid black 1px';
            div.style.height = `${sliderValue}px`;
            div.style.width = `${sliderValue}px`;
            div.style.transition = `all 0.25s`;
            row.appendChild(div);


            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        }
    }
}
getCanvas(sizeOfCanvas)
