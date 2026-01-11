const accordions = document.querySelectorAll('.faq__item');
const accordionsContent = document.querySelectorAll('.faq__main');
const accordionsIcons = document.querySelectorAll('.faq__icon');

let currentElement

accordions.forEach(item => item.addEventListener('click', (e) => {
    currentElement = item;
    
    if (item.classList.contains("active")) {
        item.classList.remove("active")
    } else {
        accordions.forEach(el => {
            el.classList.remove("active")
        })
        item.classList.add("active")
    }
}))