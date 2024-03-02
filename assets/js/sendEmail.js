
function sendEmail(contactForm) {
    emailjs.send("service_ybrj39d", "template_y1hw4k6", {
        "from_name": contactForm.user_name.value,
        "from_email": contactForm.user_email.value,
        "project_request": contactForm.project_summary.value
    })
    .then(
        function(response){
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}