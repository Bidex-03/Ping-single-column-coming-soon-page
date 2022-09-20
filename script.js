const form = document.querySelector('.subs-form');
const validation = document.querySelector('.validation');
const wrapper = document.querySelector('#popup-wrapper');
const backBtn = document.querySelector('.back-btn');
const closeBtn = document.querySelector('.close-btn');
const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;


form.addEventListener('submit', e => {
    e.preventDefault();

    const user = form.email.value;
    const emailField = form.email;

    if (emailRegex.test(user)) {
        console.log('Valid');
        wrapper.style.display = 'block';

    } else {
        console.log('invalid');
        validation.textContent = 'Please provide a valid email address';
    }
});

backBtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    wrapper.style.display = 'none';
});