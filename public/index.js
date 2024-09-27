
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loading(){
  var tl=gsap.timeline()


  tl.from(".line h1",{
      y:150,
      stagger:0.3,
      duration:0.5,
      delay:0.9
  })
 
  tl.from("#line1-part1, .line h2",{
      opacity:0,
      onStart:function(){
      let h5timer=document.querySelector("#line1-part1 h5")
      let grow=1;
       setInterval(()=>{
      if(grow<=100){
    h5timer.innerHTML=grow++;
      //console.log(grow);
      }
      
  },45)
   }
  })
  
  tl.to("#loader",{
          opacity:0,
         delay:5,
           display:"none",
          // ease:Power4
  })
  tl.from("#page1",{
    opacity:1,
    y:1200,
    delay:0.2,
     ease:Power4
  })
  tl.from("#nav-part2 h4,#nav svg",{
    y:-100,
    duration:1,
    stagger:0.3
  })
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:100,
    stagger:0.3
  })
  tl.from("#hero1,#page2",{
    opacity:0,
  },"-=1.2")
  
}

function curcorAnimation(){
  document.addEventListener("mousemove",(e)=>{
    // console.log(dets.x);
    gsap.to("#crsr",{
      x:e.x,
      y:e.y,
      ease:"circ"
    })
  })
  
  Shery.makeMagnet("#nav-part2 h4", {
   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
}

function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    // style:5,
    // debug:true,
    config:{"a":{"value":4.12,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7333170572916666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":2.6,"range":[0,10]},"metaball":{"value":0.61,"range":[0,2]},"discard_threshold":{"value":0.17,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
    gooey:true,
  })
}

document.addEventListener("mousemove",(dets)=>{
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y
  })
})
document.querySelector("#hero3").addEventListener("mouseenter",()=>{
  gsap.to("#flag",{
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",()=>{
  gsap.to("#flag",{
    opacity:0
  })
})

loading();
curcorAnimation();
locomotiveAnimation();
sheryAnimation();

 