

const tempID = "template_n0ia8wc";
const emailServiceID = "service_siop4fc";
const userID = "vPUYLH0HXqgdhzl7W";

const modal = document.querySelector(".modal");
const modalAbout = document.querySelector('.modal__about');
const modalContact = document.querySelector('.modal__contact');
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

const scaleFactor = 1/10;

let contrastToggle = true;



function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++){
        if(i === 0 || i % 2 === 0){
            shapes[i].style.transform = `translate(${x}%, ${y}%)`;
        }
        else{
            shapes[i].style.transform = `translate(-${x}%, -${y}%)`;
        }
    }
}

function toggleContrast(){
    console.log(contrastToggle)
    if (contrastToggle){
        document.body.classList += " dark-theme";
    } else{
        document.body.classList.remove("dark-theme");
    }
    contrastToggle = !contrastToggle
}

async function contact(event){
    event.preventDefault();
    

    loading.classList += " modal__overlay--visible";

    try{
        // throw new Error("email error");
        await emailjs.sendForm(
            emailServiceID,
            tempID,
            event.target,
            userID
        );
    
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    
    } catch{
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable on this website. Please send me an email at somayabdin@gmail.com"
        )
    }

}

// console.log(modal.style)

function toggleModal(){
    console.log(`TOGGLING ${getComputedStyle(modal).visibility}`)
    if (getComputedStyle(modal).visibility == "hidden"){
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        modal.style.zIndex = "5";
        modalAbout.style.transform = "translateX(0)";
        modalContact.style.transform = "translateX(0)";
        nav.style.visibility = "hidden"
        nav.style.opacity = "0"
        header.style.visibility = "hidden"
        header.style.opacity = "0"

    }else{
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        modal.style.zIndex = "-10";
        modalAbout.style.transform = "translateX(-110%)";
        modalContact.style.transform = "translateX(110%)";
        success.classList.remove("modal__overlay--visible");
        nav.style.visibility = "visible"
        nav.style.opacity = "1"
        header.style.visibility = "visible"
        header.style.opacity = "1"
    }
}