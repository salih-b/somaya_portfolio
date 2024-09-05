

const tempID = "template_n0ia8wc";
const emailServiceID = "service_siop4fc";
const userID = "vPUYLH0HXqgdhzl7W";

const modal = document.querySelector(".modal");
const modalExitButton = document.querySelector('.modal__exit');


async function contact(event){
    event.preventDefault();
    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

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


function toggleModal(){
    console.log(`TOGGLING ${getComputedStyle(modal).visibility}`)
    if (getComputedStyle(modal).visibility == "hidden"){
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
    }else{
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    }
}