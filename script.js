const container = document.querySelector('.container');
container.style.height = '100vh';
container.style.width = '100%';
container.style.display = 'flex';
container.style.justifyContent = 'center'
container.style.gap = '5px'

for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.style.display = 'flex';
    row.style.flexDirection = 'column';
    row.style.justifyContent = 'center';
    row.style.gap = '5px';

    for (let j = 1; j < 16; j++) {
        const div = document.createElement('div');
        div.style.border = 'solid black 2px';
        div.style.height = '50px';
        div.style.width = '50px';
        row.appendChild(div);
    }
}