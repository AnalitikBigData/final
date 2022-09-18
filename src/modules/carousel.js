const carousel = () => {

    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');

    let width = 5;
    let count = 3;

    const carousel = document.querySelector('.row.services-carousel');
    const services = carousel.querySelectorAll('.col-sm-6.col-md-4')
    services[3].style.display = 'none'
    services[4].style.display = 'none'
    services[5].style.display = 'none'

    let position = 0;

    document.querySelector('.services-arrow').querySelector('.arrow-left').onclick = ()=> {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        services[0].style.display = 'flex'
        services[1].style.display = 'flex'
        services[2].style.display = 'flex'
        services[3].style.display = 'none'
        services[4].style.display = 'none'
        services[5].style.display = 'none'
        position = Math.min(position, 0)
        carousel.style.marginLeft = position + 'px';
    };

    document.querySelector('.services-arrow').querySelector('.arrow-right').onclick = ()=> {
        // сдвиг вправо
        services[0].style.display = 'none'
        services[1].style.display = 'none'
        services[2].style.display = 'none'
        services[3].style.display = 'flex'
        services[4].style.display = 'flex'
        services[5].style.display = 'flex'
        
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (services.length - count));
        carousel.style.marginLeft = position + 'px';
    };

    services.forEach(button => {
        button.addEventListener('click', (e) => {
            if(e.target.closest('.col-sm-6.col-md-4>.element.relative')){
                modal.style.display = 'block';
                modalOverlay.style.display = 'block';
            }
            
        })
    })
}

export default carousel