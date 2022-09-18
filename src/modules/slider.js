const slider = () => {
    const topSlider = document.querySelector('.top-slider');
    const sliders = topSlider.querySelectorAll('.item.relative');
    const h1 = document.querySelectorAll('.big');
    const text = document.querySelectorAll('.text')
    let currentSlide = 0;
    let interval;

    console.log(h1)
    console.log(text)

    const nextSliders = () => {
        h1[currentSlide].style.textAlign = 'centre'
        h1[currentSlide].style.color = 'white'
        sliders[currentSlide].append(h1[currentSlide])
        h1[currentSlide].append(text[currentSlide])
        sliders[currentSlide].className = 'item relative';
        sliders[currentSlide].style.display = 'none'
        currentSlide = (currentSlide + 1) % sliders.length;
        sliders[currentSlide].className = 'item relative active';
        sliders[currentSlide].style.display = 'flex'
    }

    interval = setInterval(nextSliders, 3000);

}

export default slider