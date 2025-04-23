$(function () {
    const menuBtn = document.querySelector('.menu-button');
    const sideMenu = document.querySelector('.side-menu');

    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    const cursor = document.querySelector('.custom-cursor');

    window.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".falling-img", {
        y: 2900,
        scrollTrigger: {
            trigger: ".falling-img",
            start: "top top",
            end: "bottom+=3400 top",
            scrub: true,
        },
    });

    const container = document.getElementById('leaf-container');

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        leaf.style.left = Math.random() * window.innerWidth + 'px';
        leaf.style.animationDuration = 5 + Math.random() * 5 + 's';
        leaf.style.opacity = Math.random();
        container.appendChild(leaf);

        setTimeout(() => {
            container.removeChild(leaf);
        }, 10000);
    }

    // 주기적으로 생성
    setInterval(createLeaf, 900);

});