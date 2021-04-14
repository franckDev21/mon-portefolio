let btn      = document.querySelector("#toggle-btn-setting"),
    settings = document.querySelector("#toggle-settings")

btn.addEventListener('click',()=>settings.classList.toggle('active'))