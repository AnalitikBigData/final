const arrow = () => {
    const arrowUp = document.querySelector('.up');
    /*item.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = item.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
    })*/
    arrowUp.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('+')
        const ScrollUp = () => {
            let  scroll, interval;
            scroll = document.body.scrollTop||window.pageYOffset;
            interval =setInterval(function(){if(scroll>0)window.scroll(0,scroll-=5);else clearInterval(interval)},5);
        }
        ScrollUp()
    })
}

export default arrow