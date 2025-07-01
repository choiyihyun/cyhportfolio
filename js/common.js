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
        y: 1600,
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

    const enterBtn = document.getElementById('enter-btn');
    const intro = document.getElementById('brand-intro');
    const content = document.getElementById('portfolio-content');

    enterBtn.addEventListener('click', () => {
        intro.style.opacity = '0';
        setTimeout(() => {
            intro.style.display = 'none';
            content.style.display = 'block';
            document.querySelector('.menu-button').style.display = 'block'; // 🌟 햄버거 보이기
            document.body.classList.remove('no-scroll'); // 스크롤 다시 허용 ✨
        }, 1000); // fade out 후 실제 콘텐츠 등장
    });

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabItems = document.querySelectorAll(".tab-item");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tab = button.getAttribute("data-tab");

            // 버튼 상태 업데이트
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // 콘텐츠 필터링
            tabItems.forEach(item => {
                const category = item.getAttribute("data-category");
                if (tab === "all" || category === tab) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        });
    });

    $('.projects .re_design_list div').on('click', function () {
        $(this).next('.bg').toggleClass('active');
    });

});