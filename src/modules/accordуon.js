const chavo = () => {
    const accordeon = document.querySelector('.accordeon')
    const elementAccordeon = accordeon.querySelectorAll('.element');
    const active = accordeon.querySelector('.element.active')
    const content = accordeon.querySelectorAll('.element-content')
    content.forEach(item => {
        item.style.display = 'none';
        active.querySelector('.title').style.background = 'green'
    })

    elementAccordeon.forEach(element => {
        element.addEventListener('click', () => {
            let elementActive = document.querySelectorAll('.element.active');
            elementActive.forEach(active=>{
                active.querySelector('.title').style.background = 'green'
                console.log(active.querySelector('.element-content.active'))
                if(active.querySelector('.element-content.active') !== null){
                    active.querySelector('.element-content.active').style.display = 'none'
                }
                //active.querySelector('.element-content.active').style.display = 'none'
                active.classList.remove('active');
            })
    
            let contentBlock = element.querySelector('.element-content')
    
            if(contentBlock.classList.contains("active")) {
                contentBlock.style.display = 'none'
                element.querySelector('.title').style.background = 'green'
                //element.querySelector('.title').textContent.color = 'black'
                contentBlock.classList.remove('active');
                //contentBlock.style.display = 'none'
                //element.querySelector('.title').style.background = 'white'
            }
            else {
                element.classList.add('active');
                contentBlock.classList.add('active');
                contentBlock.style.display = 'block';
                element.querySelector('.title').style.background = 'orange';
            }
        })
    })
}

export default chavo