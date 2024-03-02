
function sendMail(contactForm) {
    emailjs.send("service_ybrj39d", "template_y1hw4k6", {
        "user_name": document.getElementById("name").value(),
        "user_email": document.getElementById("email").value(),
        "project_summary": document.getElementById("projectsummary").value()
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