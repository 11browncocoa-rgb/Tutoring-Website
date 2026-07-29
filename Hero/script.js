document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // UPDATE FOOTER YEAR
    // =========================

    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // SMOOTH SCROLL BUTTON
    // =========================

    const startButton = document.querySelector("header button");

if (startButton) {
    startButton.addEventListener("click", () => {

        document.querySelector("#courses")
        .scrollIntoView({
            behavior: "smooth"
        });

    });
}


    // =========================
    // COURSE CARD ANIMATION
    // =========================

    const cards = document.querySelectorAll("article");


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                    "translateY(0)";

                }

            });

        },
        {
            threshold:0.2
        }
    );


    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
        "translateY(40px)";

        card.style.transition =
        "0.6s ease";


        observer.observe(card);

    });



    // =========================
    // CONTACT FORM
    // =========================

    const form = document.querySelector("#contact-form");


form.addEventListener("submit", function(event){

    event.preventDefault();


    emailjs.sendForm(
        "service_72aa0we",
        "template_7zy8lta",
        this
    )
    .then(() => {

        alert(
        "Message sent successfully! We'll contact you soon."
        );

        form.reset();

    })
    .catch((error)=>{

        alert(
        "Something went wrong. Please try again."
        );

        console.log(error);
    });

});

});