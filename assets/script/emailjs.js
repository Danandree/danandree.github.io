(function() {
    emailjs.init('ZrPlbdzShu1cC5p-q');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_9u3weid', 'template_woa39wh', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('msg-grazie').style.display = "flex";
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}