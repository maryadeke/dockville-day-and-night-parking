const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (!emailAddress.value) {
        messages.push('Email address is required');
    }
    if (password. value.length <= 8) {
        messages.push('Password must be at least 8 characters');
    }
    if (password. value.length >= 20) {
        messages.push('Password must be at most 20 characters');
    }
    if (password. value === 'password'){
        messages.push('password cannot be password');
    }
    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        e.preventDefault();
    }
});
