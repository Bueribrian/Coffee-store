'use strict'
window.onload = function(){
    //PRELOADER
    var preoloader = document.querySelector('.box-preloader')
        preoloader.classList.add('hidden')
        


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
    var pointsActive = true
    document.addEventListener('scroll',function(){
        
        if(window.pageYOffset > 200){
            navbar.style.position='fixed'
            navbar.style.top='0'
            navbar.style.background='rgba(0,0,0,1)'
            navbar.style.height='50px'
            navbar.style.lineHeight='50px'
            document.querySelector('#navbarSuple').style.display='block'
        }else{
            navbar.style.position='static'
            navbar.style.background='transparent'
            document.querySelector('#navbarSuple').style.display='none'
        }
        if(window.pageYOffset > 4150 && pointsActive){
            points()
        }
        
    })



    //MODAL
    var images =Array.from(document.querySelectorAll('.img-galery')) 
    var modal = document.querySelector('#modal')
    var modalImg = document.querySelector('#modal-image')
    var modalExit = document.querySelector('#exit-modal')
    var leftImg,rightImg;
    leftImg = document.querySelector('#left-img')
    rightImg = document.querySelector('#right-img')

    images.map(function(img){
        img.addEventListener('click',function(){
            modal.style.display='block'
            modalImg.src = img.src
        })
        modalExit.addEventListener('click',function(){
            modal.style.display='none'
        })
    })


   //POINST
   var points = function (){
    var pointsA = document.querySelector('#points-a')
    var pointsB = document.querySelector('#points-b')
    var pointsC = document.querySelector('#points-c')
    var pointsD = document.querySelector('#points-d')
    var valorA = 1301
    var valorB = 1740
    var valorC = 2256
    var valorD = 1089
 
    
    var myTimerA = setInterval(function(){
        valorA++
         pointsA.innerHTML=valorA
         if(valorA ===1735){
         clearInterval(myTimerA)
         }
 
    },1)
    var myTimerB = setInterval(function(){
         valorB++
         pointsB.innerHTML=valorB
         if(valorB ===2320){
         clearInterval(myTimerB)
         }
 
     },1)
 
     var myTimerC = setInterval(function(){
         valorC++
         pointsC.innerHTML=valorC
         if(valorC ===2742){
         clearInterval(myTimerC)
         }
     
         },1)
 
     var myTimerD = setInterval(function(){
         valorD++
         pointsD.innerHTML=valorD
         if(valorD ===1452){
         clearInterval(myTimerD)
         }
     
         },1)
    pointsActive=false
   }
   

}