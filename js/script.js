'use strict'
window.onload = function(){
    //Navbar
    var btnMenu = document.querySelector('#button-menu')
    var mobileMenu = document.querySelector('#mobile-menu')
    var btnExit = document.querySelector('#exitBtn')
    var navbar = document.querySelector('#navbar')

    btnMenu.addEventListener('click',function(){
        mobileMenu.classList.toggle('ocult')
    })
    btnExit.addEventListener('click',function(){
        mobileMenu.classList.toggle('ocult')
    })


    var sticky = navbar.offsetTop
    document.addEventListener('scroll',function(){
        
        if(window.pageYOffset > 200){
            navbar.style.position='fixed'
            navbar.style.top='0'
            navbar.style.background='rgba(0,0,0,0.8)'
            document.querySelector('#navbarSuple').style.display='block'
        }else{
            navbar.style.position='static'
            navbar.style.background='transparent'
            document.querySelector('#navbarSuple').style.display='none'
        }
    })
    
}