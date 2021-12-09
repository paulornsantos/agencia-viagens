'use strict';

const images = [
    {'id': '1', 'url':'./imagens/saopaulo.jpg'},
    {'id': '2', 'url':'./imagens/santacatarina.jpg'},
    {'id': '3', 'url':'./imagens/riodejaneiro.jpg'},
    {'id': '4', 'url':'./imagens/newyork.jpg'},
    {'id': '5', 'url':'./imagens/dubai.jpg'},
    {'id': '6', 'url':'./imagens/alaska.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
        
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

console.log(items);

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);