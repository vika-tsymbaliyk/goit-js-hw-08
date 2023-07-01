import throttle from 'lodash.throttle';

const pageForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageArea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');

const FEEDBACK_FORM_KEY = 'feedback-form-state';

pageForm.addEventListener('input', throttle(saveData,500));
submitBtn.addEventListener("click", submitForm)

function saveData() {
    try {
        const formData = {
        email: emailInput.value,
        message: messageArea.value
    }

    localStorage.setItem(FEEDBACK_FORM_KEY,JSON.stringify(formData))
    } catch (error) {
        console.log('Error:', error);
    }
    
}

function submitForm(event) {
    event.preventDefault();
    
    if (emailInput.value && messageArea.value) {
    const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY))
    console.log(formData);
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    emailInput.value = "";
    messageArea.value = "";
    } else {
        alert('Заповніть всі поля')
    }
}

if (localStorage.getItem(FEEDBACK_FORM_KEY)) {
    const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
    emailInput.value = formData.email;
    messageArea.value = formData.message
}