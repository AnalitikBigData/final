const container = () => {
    //<div class="top-menu visible-md-inline-block visible-lg-inline-block">
    const topMenu = document.querySelector('.top-menu.visible-md-inline-block.visible-lg-inline-block');
    const anchors = topMenu.querySelectorAll('a[href*="#"]')
    anchors.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = item.getAttribute('href').substring(1)
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
        })
    })
}

export default container;