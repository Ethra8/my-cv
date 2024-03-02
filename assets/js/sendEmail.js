
function sendEmail(contactForm) {
    emailjs.send("service_ybrj39d", "template_y1hw4k6", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("success", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}