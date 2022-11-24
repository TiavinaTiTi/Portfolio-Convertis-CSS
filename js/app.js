var btn = document.querySelector(".btn-topbar")

btn.addEventListener("click", function(){
    var navbar = document.querySelector(".topbar-content")

    if (navbar.classList.contains('block') === true){
        navbar.classList.remove('block')
        console.log(navbar)
    }else{
        console.log(navbar)
        navbar.classList.add('block')
    }

})