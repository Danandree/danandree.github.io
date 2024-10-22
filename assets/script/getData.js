const title = document.querySelectorAll(".home_title");
const projectElementCard = document.querySelectorAll(".project-element-card");
const documentTitle = document.querySelector("title");

const workSection = document.querySelector("#work");

const profileImg = document.querySelector(".profile-image");
const logo = document.querySelector(".logo");
const favicon = document.querySelector("link[rel~='icon']");
const footer = document.querySelector(".footer");


const experienceObjectContainer = document.querySelector(".experience-object-container");
const subtitle = document.querySelector(".subtitle");
console.log("qua")
const json = fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        title.forEach((title) => { title.innerText = data.name })
        documentTitle.innerText = data.title
        subtitle.innerText = data.subtitle
        workSection.innerHTML = "";
        const h2 = document.createElement("h2");
        h2.innerText = "What I've done";
        workSection.appendChild(h2);
        const h4 = document.createElement("h4");
        h4.innerText = "(more coming soon)";
        workSection.appendChild(h4);
        data.projects.forEach((project) => { workSection.appendChild(createProjectCard(project)) });
        experienceObjectContainer.innerHTML = "";
        data.skills.forEach((skill) => {
            let div = document.createElement("div");
            div.setAttribute("class", "experience-object");
            let img = document.createElement("img");
            img.setAttribute("src", skill.img);
            div.appendChild(img);
            experienceObjectContainer.appendChild(div);
        });
        profileImg.innerHTML = `<img src="${data.photo}">`;
        logo.innerHTML = `<img src="${data.logo}">`;
        favicon.setAttribute("href", data.logo);
        footer.innerHTML = `<p>${data.footer}</p>`;
    }).catch(error => console.log(error, "ERROR"));

function createProjectCard(project) {
    let a = document.createElement("a");
    a.setAttribute("href", project.link);
    a.setAttribute("class", "work-object work-object-1 project-element-card");
    a.style.backgroundImage = `url(${project.img})`;
    let div = document.createElement("div");
    div.setAttribute("class", "magnifier-logo");
    let img = document.createElement("img");
    img.setAttribute("src", "./assets/img/magnifying-glass.svg");
    div.appendChild(img);
    a.appendChild(div);
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "work-title");
    h3.innerText = project.title;
    a.appendChild(h3);
    return a;
}
