'use strict';

let error = document.getElementsByClassName('error')[0];
let signup = document.forms.signUp;
let signout = document.forms.signOut;

window.onresize = () => {
    // error.style.display = 'none';
    error.style.left = signup.offsetLeft - 5 + 'px';
}

let checkParam = () => {
    let email = signup.e_mail.value;
    error.style.left = signup.offsetLeft - 5 + 'px';
    if (signup.f_name.value.length < 1 || signup.s_name.value.length < 1 || email.length < 3) error.innerText = 'Заповніть всі поля !!!'
    else if (email[0] == '@' || !email.includes('@')) error.innerText = 'Заповніть вірно поле Email !!!'
    else if (signup.pos.value == 'Choose...') error.innerText = 'Зробіть вибір в полі Position !!!'
    else error.innerText = ''
}


signup.addEventListener('click', () => {
    error.style.display = 'none';
})

signup.check.addEventListener('click', (e) => {
    e.stopPropagation();
    if (signup.check.checked) {
        checkParam();
        if (error.innerText != '') {
            error.style.display = 'block';
            signup.check.checked = false;
        }
        else {
            signup.signButt.disabled = false;
            signup.signButt.style.backgroundColor = 'rgb(49, 163, 112)';
            signup.signButt.style.cursor = 'pointer';
        }

    }
    else {
        signup.signButt.disabled = true;
        signup.signButt.style.backgroundColor = 'rgb(125, 165, 147)';
        signup.signButt.style.cursor = 'default';
    }
})
signup.signButt.addEventListener('click', (e) => {
    signout.style.display = 'block';
    document.getElementById('ffssname').innerText = signup.f_name.value + ' ' + signup.s_name.value;
    document.getElementById('eemail').innerText = signup.e_mail.value;
    document.getElementById('ppos').innerText = signup.pos.value;
    if (signup.sex[0].checked) signout.logo.src = 'img/man.jpg'
    else signout.logo.src = 'img/woman.jpg';
    signup.style.display = 'none';
})