const arrow = () => {
    const arrowUp = document.querySelector('.up');
    arrowUp.onclick = (e) => {
        e.preventDefault();
        const ScrollUp = () => {
            let  scroll, interval;
            scroll = document.body.scrollTop|| window.pageYOffset;
            interval = setInterval(()=>{
                if ( scroll > 0 ) window.scroll(0, scroll-=5);
                else clearInterval(interval)
            }, 5);
        }
        ScrollUp()
    };
    window.addEventListener('scroll', function() {
        arrowUp.hidden = (pageYOffset < document.documentElement.clientHeight);
    });
}

export default arrow