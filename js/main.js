function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_XufgNZrdHpOvCKiFai3ss');
}();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', this);
        const form = document.getElementById('contact-form');
        form.reset();
        const messageEl = document.getElementById('message');
        messageEl.innerText = 'Your message was successfully sent.'
        setTimeout(() => {messageEl.className = 'hidden'}, 2000)
    });
}



