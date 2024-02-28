const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAni(){
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut,
       
    })
    .to(".boundingelem",{
        y:0,
        duration:1.8,
        ease: Expo.easeInOut,
        stagger: .2 
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut 
    })
}
//jab mouse muve hoga t circle chpta hoga

function circleChpta(){ 

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){ 

        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
  

       xprev = dets.clientX;
       yprev = dets.clientY;

       circleMouseFollower(xscale, yscale);
       
    
   
    });
}



function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
         document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
    }) 
}
circleChpta();
circleMouseFollower();
firstPageAni() 

//now animation of image
// teeno element ko select karo

document.querySelectorAll(".elem").forEach(function(elem){   
   var rotate = 0;
   var diffrot = 0;

   elem.addEventListener("mouseleave",function(dets){
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease: Power3,
        duration: .5, 
    })
   })

    elem.addEventListener("mousemove", function(dets){
   var diff = dets.clientY - elem.getBoundingClientRect().top;
     diffrot = dets.clientX - rotate;
     rotate = dets.clientX;   
    
   gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX, 
        rotate: gsap.utils.clamp(-20,20,diffrot *0.6),
         });
    });
});