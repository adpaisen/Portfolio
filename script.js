//
// Typing Animation
//

const roles = [
    "Software Engineer",
    "QA Automation Engineer",
    "Java Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typingEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentRole.length){

            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }

    }else{

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


//
// Mobile Navigation Menu
//

const menuButton = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener(
    "click",
    ()=>{
        navLinks.classList.toggle("active");
    }
);


//
// Close Mobile Menu When Clicking Link
//

document
.querySelectorAll("nav a")
.forEach(link=>{

    link.addEventListener(
        "click",
        ()=>{
            navLinks.classList.remove("active");
        }
    );

});


//
// Scroll Reveal Animation
//

const revealElements =
document.querySelectorAll(
    "section, .project, .skill-card, .card, .timeline-item"
);

const observer =
new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold:0.15
    }
);


revealElements.forEach(element=>{

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all .8s ease";

    observer.observe(element);

});


//
// Active Navbar Highlight
//

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll("nav a");


window.addEventListener(
    "scroll",
    ()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop =
                section.offsetTop - 150;

            if(window.scrollY >= sectionTop){

                current = section.id;
            }

        });


        navItems.forEach(link=>{

            link.style.color = "";

            if(
                link.getAttribute("href")
                === "#" + current
            ){

                link.style.color =
                    "#38bdf8";
            }

        });

    }
);


//
// Button Hover Glow Effect
//

const buttons =
document.querySelectorAll(".btn");


buttons.forEach(button=>{

    button.addEventListener(
        "mouseenter",
        ()=>{

            button.style.boxShadow =
                "0 0 20px rgba(56,189,248,.5)";

        }
    );


    button.addEventListener(
        "mouseleave",
        ()=>{

            button.style.boxShadow =
                "none";

        }
    );

});
