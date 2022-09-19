const form = document.querySelector('.subs-form');
const validation = document.querySelector('.validation');
const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = form.email.value;
    const emailField = form.email;

    if (emailRegex.test(user)) {
        console.log('Valid');
    } else {
        console.log('invalid');
        validation.textContent = 'Please provide a valid email address';
    }
});