gsap.to("#page1 #abt",{
    y:-910,
    duration:2,
    scrollTrigger:{
        tigger:"#page1",
        start:"top top",
        end:"bottom 50%",
        pin:"#page1",
        markers:false,
        scrub:1
    }
})

gsap.from("#page3 h1",{
   x:-200,
   duration:5,
   scrollTrigger:{
     trigger:"#page3",
     start:"top top",
     end:"bottom 44%",
     scrub:1
   }
})

gsap.from("#page3 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page3",
    start:"top 20%",
    end:"bottom 70%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work2 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top 50%",
    end:"bottom 450%",
    scrub:1
  }
})

gsap.from("#work3 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top -75%",
    end:"bottom 300%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work4 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"top -200%",
    end:"bottom 200%",
    scrub:1,
    markers:false
  }
})

gsap.from("#work5 img",{
  width:"0px",
  duration:5,
  scrollTrigger:{
    trigger:"#page4",
    start:"bottom 170%",
    end:"bottom 80%",
    scrub:1,
    markers:false
  }
})

gsap.to("#page3,#page4",{
  backgroundColor:"black",
  duration:2,
  scrollTrigger:{
    trigger:"#page3",
    start:"top 20%",
    end:"top 14%",
    scrub:1,
    markers:false
  }
})

gsap.from("#page5 h1",{
  y:-500,
  duration:2,
  scrollTrigger:{
    trigger:"#page5",
    start:"top 50%",
    end:"top 0%",
    scrub:2,
    markers:true
  }
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)