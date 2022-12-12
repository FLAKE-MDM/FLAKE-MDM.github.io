// menu
$(".btn-menu").click(function(e){
    e.preventDefault();
    $("#nav, body, .btn-menu").toggleClass("show")
})


//animation
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }
    function offset(e) {
        const rect = e.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + screenLeft }
    }
    animOnScroll();
}

// validation
let loginForm = document.querySelector("#login-form");

let login = "admin";
let pass = "12345";

loginForm.addEventListener("submit", function(e){
    for(let input of loginForm){
        if(!validationForm(input)){
            e.preventDefault();
        }
    }
    
    
})

function validationForm(input){
    let errorId = `#${input.id}Error`;
    let errorMess = document.querySelector(errorId);
    if(input.type != "submit"){
        if(!input.value){
            console.log(errorMess);
            errorMess.innerHTML = "Заполите поле";
            $(errorMess).removeClass("collapse");
            $(input).addClass("has-error");
            return false;
        } else {
            $(errorMess).addClass("collapse");
            $(input).removeClass("has-error")
        }
        if(input.id == "login"){
            if(input.value != login){
                console.log(errorMess);
                errorMess.innerHTML = "Неверный логин";
                $(errorMess).removeClass("collapse");
                $(input).addClass("has-error");
                return false;
            } else {
                $(input).removeClass("has-error");
                $(errorMess).addClass("collapse");
            }
        }
        if(input.id == "password"){
            if(input.value != pass){
                console.log(errorMess);
                errorMess.innerHTML = "Неверный пароль";
                $(errorMess).removeClass("collapse");
                $(input).addClass("has-error");
            } else{
                $(input).removeClass("has-error");
                $(errorMess).addClass("collapse");
            }
        }
    }
    return true;
}

$(".pass-view").click(function(e){
    e.preventDefault();
    let inputPass = document.querySelector("#password");;
    if (inputPass.type == "password"){
      inputPass.type = "text"
    } else{
      inputPass.type = "password"
    }
})


$('.noclose').on('click', function(event){
    event.stopPropagation();
});