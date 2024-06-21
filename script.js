const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.justifyContent = 'space-evenly'

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.style.display = 'flex';
    row.style.flexDirection = 'column';
    row.style.justifyContent = 'space-evenly';

    for (let j = 1; j < 16; j++) {
        const div = document.createElement('div');
        div.style.border = 'solid black 2px'
        div.style.padding = '5px'
        div.style.margin = '5px'
        div.textContent = 'div';
        row.appendChild(div);
    }
}