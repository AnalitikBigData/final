const sendForm = () => {
    const form = document.querySelector('.rf>form');
    const btn = document.querySelector('.button.btn.feedback')

    const statusBlock = document.createElement("div");
    const loadText = 'Идёт отправка...';
    const errorText = 'Ошибка...';
    const successText = 'Отправлено!!!';
    
    const validate = (list) => {
        let success = true;
        list.forEach((input, index) => {
            success = (!/[^а-яА-Я]/.test(list[0].value)) && (/[^ ]/.test(list[0].value)) && (!/[^0-9-()+]/.test(list[1].value));
        })
        return success;
    }

    const sendData = (data) => {
        //'https://jsonplaceholder.typicode.com/posts'
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body : JSON.stringify(data),
            headers: { 
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    const submitForm = () => {
        const formElement = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {}

        statusBlock.style.color = 'blue';
        statusBlock.textContent = loadText;
        form.append(statusBlock)
        
        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        console.log(validate(formElement))
        if(validate(formElement)){
            sendData(formBody)
            .then(data =>{
                statusBlock.style.color = 'blue';
                statusBlock.textContent = successText;
                setTimeout(() => {
                    statusBlock.textContent = '';
                }, 3000)
                formElement.forEach (input => {
                    input.value = '';
                })
            })
        }
        else {
            statusBlock.style.color = 'red';
            statusBlock.textContent = errorText;
            form.append(statusBlock)

        }
    }
    try{
        if (!form){
            throw new Error('верните форму на место, пожалуйста');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm();
        })
        
    } catch (err) {
        console.log(err.message)
    }
}

export default sendForm