document.addEventListener('DOMContentLoaded', () => {
    let linksWithScroll = document.querySelectorAll('.with-scroll');

    linksWithScroll.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            let attr = link.getAttribute('href');
            let section = document.querySelector(attr);

            window.scrollTo({
                behavior: "smooth",
                top: section.offsetTop - 50
            })

        })
    });
});