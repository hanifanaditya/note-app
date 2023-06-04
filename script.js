const create = document.querySelector('.create');
const section = document.querySelector('section');

create.addEventListener('click',() => {
    section.style.display = 'flex'
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let p = document.createElement('p');
    p.innerHTML = `Diedit ${hours}:${minutes}`;
    let span = document.createElement('span');
    span.innerHTML = '&#129120;'
    span.appendChild(p);
    section.appendChild(span);

    let textarea = document.createElement('textarea');
    section.appendChild(textarea);
    create.style.display = 'none';
})
