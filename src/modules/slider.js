const slider = () => {
    const topSlider = document.querySelector('.top-slider');
    const sliders = topSlider.querySelectorAll('.item.relative');
    console.dir(sliders);
    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
        elems[index].style.transform = `translateX(${5000})`
    }

    const nextSlide = (elems, index, strClass) => {
        //elems[index].before(document.querySelector('.header-push'));
        //sliders[i].style.transform = `translateX(${5000}px)`
        //elems[index].style.transform = `translateX(${500})`
        elems[index].classList.add(strClass);
        elems[index].style.transform = `translateX(${500})`
        //elems[index].style.display = 'block';
    }

    const autoSlide = () => {
        prevSlide(sliders, currentSlide, 'item.relative-active');
        //prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= sliders.length){
            currentSlide = 0;
        }
        nextSlide(sliders, currentSlide, 'item.relative-active');
        //nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlide = (timer = 1500) => {
        for(let i = 0; i < 3; i++){
            sliders[i].style.transform = `translateX(${5000}px)`
        }
        interval = setInterval(autoSlide, timer);
    }

    topSlider.addEventListener('click', (e) => {
        e.preventDefault();
        /*if(!e.target.matches('.dot, .portfolio-btn')){
            return;
        }*/
        prevSlide(sliders, currentSlide, 'item.relative-active');
        //prevSlide(dots, currentSlide, 'dot-active');
        /*if(e.target.matches('#arrow-right')){
            currentSlide++;
        } else if(e.target.matches('#arrow-left')){
            currentSlide--;
        } else if(e.target.classList.contains('dot')){
            dots.forEach((dot, index) => {
                if(e.target === dot){
                    currentSlide = index;
                }
            })
        }*/
        if(currentSlide >= sliders.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = sliders.length - 1;
        }
        nextSlide(sliders, currentSlide, 'item.relative-active');
        //nextSlide(dots, currentSlide, 'dot-active');
    })
    startSlide(timeInterval)
}

export default slider