document.addEventListener("DOMContentLoaded", ()=>{
    const open  = document.querySelector('button.msg_btn');
    const modal = document.querySelector('.modal_back');
    const modalText = modal.querySelector('.modal');
    const close = document.querySelector('button.close');
    const next = document.querySelectorAll('input.btn_next');
    const submit = document.querySelector('input.btn_submit');
    const screen = document.querySelector('.form_screen');
    const requairedInput = document.querySelectorAll('input.form_input:required');
    const inputs = document.querySelectorAll('input.form_input');
    const selects = document.querySelectorAll('select.form_input');
    const hobby = document.querySelector('#hobby');
    const step = 100/6;
    var i=0;
    const regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var data = {
            firstName: '',
            surName: '',
            age: '',
            email: '',
            gender: '',
            hobby: []
        }
    
    open.addEventListener('click',()=>{
        modal.classList.toggle('open');
        inputs[0].focus();
    });
    close.addEventListener('click',()=>{
        modal.classList.toggle('open');
    });
    modal.addEventListener('click',()=>{
        modal.classList.toggle('open');
    });
    modalText.addEventListener('click',e=>e.stopPropagation());
    window.addEventListener('keyup',e=>{
        if (e.keyCode == '27') {
            modal.classList.contains('open') ? modal.classList.remove('open') : '';
        }
    });
    
    next.forEach((button)=>{
        button.addEventListener('click',e=>{
            let input = e.target.parentNode.querySelector('.form_input');
            i++;
            screen.style.transform = `translateX(-${step*i}%)`;
            inputs.length > i ? inputs[i].focus() : '';
            data[input.name] = input.value;
        });
    });
    
    requairedInput.forEach((input)=>{
        input.addEventListener('input',e=>{
            let button = e.target.parentNode.querySelector('input.btn_next');
            let input = e.target;
            switch (input.id) {
                case 'name':
                    if (input.value != '' && input.value.length > 1) {
                        button.disabled = false;
                        input.style.borderColor = '';
                    } else {
                        button.disabled = true;
                        input.style.borderColor = 'red';
                    }
                    break; 
                case 'age':
                    if (input.value != '' && input.value > 4 && input.value < 121 && input.value.length < 4) {
                        button.disabled = false;
                        input.style.borderColor = '';
                    } else {
                        button.disabled = true;
                        input.style.borderColor = 'red';
                    }
                    break;
                case 'email':
                    if ( regMail.test(input.value) != false ) {
                        button.disabled = false;
                        input.style.borderColor = '';
                    } else {
                        button.disabled = true;
                        input.style.borderColor = 'red';
                    }
                    break; 
            }
        });
    });
    
    submit.addEventListener('click',e=>{
        e.preventDefault();
        sendJSON();
        clearInput();
        data = {
            firstName: '',
            surName: '',
            age: '',
            email: '',
            gender: '',
            hobby: []
        }
        i=0;
        screen.style.transform = `translateX(0)`;
        modal.classList.toggle('open');
        document.querySelector('#result').classList.toggle('show');
        setTimeout(()=>{
            document.querySelector('#result').classList.toggle('show');
        }, 2000);
    });
    
    hobby.addEventListener('change',(e)=>{
        let length = e.currentTarget.selectedOptions.length;
    
        data.hobby = [];
        for (i=0; i<length; i++) {
            data.hobby[i] = e.currentTarget.selectedOptions[i].text;
        }
    });

    function clearInput() {
        inputs.forEach((input)=>{
            input.value = '';
            input.required ? input.parentNode.querySelector('.btn_next').disabled = true : '';
        });
        selects.forEach((select)=>{
            select.value = '';
        })
    }
    
    function sendJSON(){
        let xhr = new XMLHttpRequest();
        let url = "https://uvenco.ru/api.php?hrqueez";
    
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(this.responseText);
            }
        };
        xhr.send(JSON.stringify(data));
    }

});
