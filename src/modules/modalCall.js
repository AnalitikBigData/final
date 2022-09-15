const call = ()  => {
    const btnServices = document.querySelector('.button-services');
    const modal = document.querySelector('.modal-callback');
    const overlay = document.querySelector('.modal-overlay');

    btnServices.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display='block';
    })
}

export default call;