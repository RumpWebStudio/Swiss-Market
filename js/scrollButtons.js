const scrollButtons = document.querySelectorAll(".scroll");
const scrollBlock = document.querySelector(".contacts");

scrollButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();

        scrollBlock.scrollIntoView({ behavior: "smooth", inline: "start" })
    });
})