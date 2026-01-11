gsap.registerPlugin(ScrollTrigger)

const animationTexts = gsap.utils.toArray(".animation-text")

animationTexts.forEach((section, index) => {
    const text = section.querySelectorAll(".animation-word")
    let animation = gsap.from(text, { y: 100, opacity: 0, stagger: 0.2 })

    ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
        animation: animation,
        markers: false
    })
})


const image1 = document.querySelector(".image-1")
let animation1 = gsap.from(image1, { x: 300, opacity: 0, stagger: 0.4 })

ScrollTrigger.create({
    trigger: image1,
    start: "top 70%",
    toggleActions: "play none none reverse",
    animation: animation1,
    markers: false
})

const image2 = document.querySelector(".image-2")
let animation2 = gsap.from(image2, { x: -300, opacity: 0, stagger: 0.6 })

ScrollTrigger.create({
    trigger: image2,
    start: "top 70%",
    toggleActions: "play none none reverse",
    animation: animation2,
    markers: false
})