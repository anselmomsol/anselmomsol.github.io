/* MENU  */

const mostrarMenu = (toggleId , navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click", ()=>{
            nav.classList.toggle("show")
        })
    }
}

mostrarMenu("nav-toggle","nav-menu");

/* menú */

const navLink = document.querySelectorAll(".nav__link")

function activarLinks(){
    //activar link
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", activarLinks));

/* animaciones */

const animation = ScrollReveal({
    origin:"top",
    distance: "80px",
    duration:2000,
    reset:true
});

animation.reveal(".home__title",{})
animation.reveal(".button",{delay:200})
animation.reveal(".home__img",{delay:400})
animation.reveal(".social__home-icon",{interval:200})

animation.reveal(".about__img",{})
animation.reveal(".about__subtitle",{delay:200})
animation.reveal(".about__text",{delay:400})

animation.reveal(".skills_subtitle",{})
animation.reveal(".skills__text",{delay:200})
animation.reveal(".skills__data",{delay:200})
animation.reveal(".skills__img",{delay:400})

animation.reveal(".work__img",{delay:200})

animation.reveal(".label",{delay:200})
animation.reveal(".contact__input",{delay:300})

/* enviar mail */

const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
   const formulario = new FormData(this)
   const respuesta = await fetch(this.action ,{
        method: this.method,
        body: formulario,
        headers: {
            "Accept" : "application/json"
        }
    })
    if(respuesta.ok){
        this.reset()
        swal("Gracias por contactarme!");
    }
    else{
        this.reset()
        swal("Datos erroneos!");
    }
}
