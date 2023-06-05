const create = document.querySelector('.create');
const section = document.querySelector('section');

create.addEventListener('click',() => {
    section.style.display = 'flex'
    let div = document.createElement('div');
    div.classList.add('box');
    let textarea = document.createElement('textarea');
    let span = document.createElement('span');
    span.innerHTML = '&#x1F5D1';
    div.appendChild(textarea);
    div.appendChild(span);
    section.appendChild(div);
});

section.addEventListener('click',(e) => {
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})
