const inputData = () => {
    const name = document.querySelector('.form-control');
    const phone = document.querySelector('.form-control.tel');
    
    name.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я]/g, "");
    })
    
    phone.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^0-9-()+]/g, "");
    })
}

export default inputData