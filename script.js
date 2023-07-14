var tl = gsap.timeline();


tl.from("#nav img",{
    y:-100,
    duration:0.3,
    delay:0.4,
    stagger:0.5,
})

tl.from("#nav-mid h2",{
    y:-100,
    duration:0.3,
    delay:0.4,
    stagger:0.5,
})

tl.from("#nav-right h2,#nav-right button",{
    y:-100,
    duration:0.3,
    delay:0.4,
    stagger:0.5,
})

tl.from("#section1 h1",{
    x:-100,
    opacity:0,
    duration:1,
})

tl.from("#img1 img,#img2 img,#img3 img,#img4 img",{
    opacity:0,
    duration:0.5,

})

tl.from("#img1b img,#img2b img,#img3b img,#img4b img",{
    opacity:0,
    duration:0.8,
})

tl.from("h5",{
    y:25,
    repeat:-1,
    yoyo:true,
})
