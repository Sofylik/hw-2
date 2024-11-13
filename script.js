"use strict"
const range = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
range.addEventListener('input', _.debounce((event) => {
    const size = range.value;
    image.style.width = `${size}px`
}, 300));



document.addEventListener('mousemove', _.debounce((event) => {
    const box = document.querySelector('#box');

    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.width / 2;
    const y = event.clientY - rect.height / 2;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;

}, 100));
