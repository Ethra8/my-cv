
function sendEmail(contactForm) {
    emailjs.send("service_ybrj39d", "template_y1hw4k6", {
        "user_name": contactForm.user_name.value,
        "user_email": contactForm.user_email.value,
        "project_summary": contactForm.project_summary.value
    })
    .then(
        function(response){
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}