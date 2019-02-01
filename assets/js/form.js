document.addEventListener('DOMContentLoaded', function () {
    const email = 'diep.christopher@gmail.com';
    const emailForm = document.querySelector('#email-form');
    emailForm.addEventListener('submit', function(e){
        e.preventDefault();

        let subject = document.querySelector('#subject').value;
        let message = document.querySelector('#message').value;
        let mailTo = document.createElement('a');

        mailTo.setAttribute('href', `mailto:${email}?subject=${subject}&body=${message}`);
        mailTo.click();
    });
})