const modalCall = () => {
    const modal = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const button = document.querySelector('.callback-btn.fancyboxModal.hidden-xs');
    const buttonClose = document.querySelector('.modal-close');

    console.log(buttonClose)
    //<a href="#callback" class="callback-btn fancyboxModal hidden-xs">Заказать звонок</a>
    button.addEventListener('click', (e) => {
        modal.style.display='block';
        modalOverlay.style.display = 'block';
    })

    buttonClose.addEventListener('click', (e) => {
        modal.style.display='none';
        modalOverlay.style.display = 'none';
    })
        
}

export default modalCall