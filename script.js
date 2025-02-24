// Smooth Scrolling for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`nav ul li a[href*=${id}]`).classList.add("active");
            });
        }
    });
});

// Dark Mode Toggle Button
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "Dark Mode";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.bottom = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.padding = "10px";
darkModeToggle.style.cursor = "pointer";
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "Light Mode";
    } else {
        darkModeToggle.innerText = "Dark Mode";
    }
});
