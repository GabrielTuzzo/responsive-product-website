const listMenu = document.querySelector('#ul-list')
const menuDrop = document.querySelector('#dropMenu')

menuDrop.addEventListener('click', () => {
    listMenu.classList.toggle("active")
    menuDrop.classList.toggle("active-x")
})

/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

addEventListener("load", () => {
    const loader =  document.querySelector(".loader")
    
    loader.classList.add("loader-hidden")

    document.querySelector(".loader").addEventListener("transitionend", () => {
        document.body.removeChild(document.querySelector(".loader"))
    })
})