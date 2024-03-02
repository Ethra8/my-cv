
function sendMail(contactForm) {
    emailjs.send("service_ybrj39d", "template_y1hw4k6", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.email.value,
        "project_summary": contactForm.projectsummary.value
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