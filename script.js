const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"

})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"

})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
swiperAnimation()

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }else{
        ull.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
    
})


var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)

var des = document.querySelector("#des");
var pro = document.querySelector("#pro");
var exe = document.querySelector("#exe");

var desImg = document.querySelector("#desImg");
var proImg = document.querySelector("#proImg");
var exeImg = document.querySelector("#exeImg");

var desTxt = document.querySelector("#desTxt");
var proTxt = document.querySelector("#proTxt");
var exeTxt = document.querySelector("#exeTxt");

desImg.style.display = "block";
desTxt.style.display="block";

des.addEventListener("click",function(){
    desImg.style.display = "block";
    proImg.style.display = "none";
    exeImg.style.display = "none";
    des.style.marginLeft = "5vw";
    des.style.color = "#EFEAE3";
    pro.style.color = "#504A45";
    pro.style.marginLeft="7vw";
    exe.style.color = "#504A45";
    exe.style.marginLeft="7vw";
    desTxt.style.display="block";
    proTxt.style.display = "none";
    exeTxt.style.display = "none";
})

pro.addEventListener("click",function(){
    desImg.style.display = "none";
    proImg.style.display = "block";
    exeImg.style.display = "none";
    pro.style.marginLeft = "5vw";
    pro.style.color = "#EFEAE3";
    des.style.color = "#504A45";
    des.style.marginLeft="7vw";
    exe.style.color = "#504A45";
    exe.style.marginLeft="7vw";
    proTxt.style.display="block";
    desTxt.style.display = "none";
    exeTxt.style.display = "none";
})

exe.addEventListener("click",function(){
    desImg.style.display = "none";
    proImg.style.display = "none";
    exeImg.style.display = "block";
    exe.style.marginLeft = "5vw";
    exe.style.color = "#EFEAE3";
    des.style.color = "#504A45";
    des.style.marginLeft="7vw";
    pro.style.color = "#504A45";
    pro.style.marginLeft="7vw";
    exeTxt.style.display="block";
    proTxt.style.display = "none";
    desTxt.style.display = "none";
})