const chavo = () => {
    const accordeon = document.querySelector('.accordeon')
    const elementAccordeon = accordeon.querySelectorAll('.element');
    const active = accordeon.querySelector('.element.active')
    const content = accordeon.querySelectorAll('.element-content')
    content.forEach(item => {
        item.style.display = 'none';
    })

    /*allElems.forEach((elem)=>{
        elem.addEventListener('click', function(){
            //находим все активные элементы
            let descActive = document.querySelectorAll('.type_3 .descElem.active');
            //прогоняем через цикл и удаляем класс active
            descActive.forEach((elem)=>{
                elem.classList.remove('active');
            })
    
            let parentElem = this.parentNode;
    
            let contentBlock = parentElem.querySelector('.descElem')
    
            if(contentBlock.classList.contains("active")) {
                contentBlock.classList.remove('active');
            }
            else {
                contentBlock.classList.add('active');
            }
        })
    })*/
    elementAccordeon.forEach(element => {
        element.addEventListener('click', () => {
            const activa = () => {
                let elementActive = document.querySelectorAll('.element.active');
                elementActive.forEach(active=>{
                    console.log('+');
                    console.log(active)
                    active.classList.remove('active');
                    element.querySelector('.element-content').style.display = 'none';
                //console.log(active)
                })
            }
            activa();
            
    
            let contentBlock = element.querySelector('.element-content')
    
            if(contentBlock.classList.contains("active")) {
                console.log(contentBlock)
                activa();
                contentBlock.classList.remove('active');
                contentBlock.style.display = 'none'
                element.querySelector('.title').style.background = 'white'
            }
            else {
                contentBlock.classList.add('active');
                contentBlock.style.display = 'block'
                element.querySelector('.title').style.background = 'orange'
            }
            activa();
        })
    })
}

export default chavo