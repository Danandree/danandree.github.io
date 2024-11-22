const menuButton = document.querySelector(".menu");
const menuLink = document.querySelector(".menu-link");
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const body = document.body;
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#about");
const workSection = document.querySelector("#work");
const experienceSection = document.querySelector("#experience");
const passionSection = document.querySelector("#passion");
const contactSection = document.querySelector("#contact");

(function () {
    emailjs.init({
        publicKey: "ZrPlbdzShu1cC5p-q",
    });
})();

const contactContainer = document.getElementById("form");
contactContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    if (name === "" || email === "" || message === "") { alert("Per favore riempiere tutti i campi"); return; }
    if (!email.includes("@")) { alert("Per favore inserire una mail valida"); return; }
    console.log(name, email, message);
    emailjs.sendForm("service_lpj7aph", "template_woa39wh", contactContainer)
        .then(() => {
            console.log('SUCCESS!');
            alert(`Grazie ${name}, riceverai una risposta nel più breve tempo possibile!`);
            contactContainer.reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert("Qualcosa e' andato storto, riprova piu' tardi");
        });
});

const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");
const workButton = document.querySelector("#workButton");
const contactButton = document.querySelector("#contactButton");
const sections = [{
    name: "homeButton",
    section: homeSection,
    button: homeButton
},
{
    name: "aboutButton",
    section: aboutSection,
    button: aboutButton
},
{
    name: "workButton",
    section: workSection,
    button: workButton
},
{
    name: "contactButton",
    section: contactSection,
    button: contactButton
},
{
    name: "passionButton",
    section: passionSection,
    button: aboutButton
},
{
    name: "experienceButton",
    section: experienceSection,
    button: aboutButton
}];

const backgroundUrl1 = "./assets/img/mountain-background.jpg";
const backgroundUrl2 = "./assets/img/Laptop-Work-Conditionjpg.jpg";

menuButton.addEventListener("click", () => { menuLink.classList.toggle("hide"); });
menuLink.addEventListener("click", () => { menuLink.classList.toggle("hide"); });

homeButton.classList.add("active-button-color");
document.addEventListener("scroll", () => {
    const monitorHeight = window.innerHeight;
    removeActiveButtonColor();
    sections.forEach((section) => {
        const sectionTop = section.section.getBoundingClientRect().top - navbarHeight;
        const sectionBottom = section.section.getBoundingClientRect().bottom - navbarHeight;
        if (sectionTop <= 0 && sectionBottom >= 0) { section.button.classList.add("active-button-color"); }
    });
    if (this.scrollY < monitorHeight + navbarHeight) { body.style.backgroundImage = `url('${backgroundUrl1}')` }
    else { body.style.backgroundImage = `url('${backgroundUrl2}')` }
});

navbar.addEventListener("click", (event) => {
    removeActiveButtonColor();
    sections.forEach((section) => {
        if (event.target.id === section.name) {
            window.scrollTo({ top: section.section.offsetTop - navbarHeight, behavior: "smooth" });
        }
    });
});

function removeActiveButtonColor() {
    sections.forEach((section) => { section.button.classList.remove("active-button-color"); });
}

