gsap.set('.scene', {
  backgroundColor: 'transparent',
  position: 'absolute',
  top: () => {
    gsap.utils.toArray('.scene').forEach((item, i) => {
      gsap.set(item, { top: `${gsap.utils.clamp(0, 1, i) * 100}vh` })
    })
  }
});

gsap.set('.content-wrapper', {
  height: window.innerHeight,
  position: 'fixed',
  backgroundColor: '#1196e8'
});

gsap.set(['#s4 img'], { opacity: 0 })

const stageColors = ['#0a49b3', '#000', '#b7e823', '#eee1df', "#eeeedf", '#6e9a79', '#07143c'];

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#scroll-control',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0,
  }
})

// scene 0
tl.to(['#s0 .content > img', '#s0 .content > h1'], { y: -100, opacity: 0, stagger: 0.1, delay: 1 })
  .to('#s0 .narration', { y: -300, opacity: 1, duration: 2.3 })
  .to('.content-wrapper', { backgroundColor: stageColors[0], duration: 2.3 }, "<")
  .to('#s0 .narration', { y: -500, opacity: 0, duration: 1 }, ">")
  .to('#cloud1', { y: "-30%", x: '-30%', opacity: 0.4, duration: 1 }, "<")
  .to('#cloud2', { y: "-20%", x: '30%', opacity: 0.3, duration: 1 }, "<");

// scene 1
tl.to('#s1', { top: '50%', y: '-50%' })
  .to('.content-wrapper', { backgroundColor: stageColors[1] }, "<")
  .from('#s1-lamp', { '--clip': "0%", duration: 1 }, "<0.5")
  .to('#s1-plant', { x: "-15%", duration: 1 }, "<")
  .from('#s1-speech1', { opacity: 0, top: 20, duration: 2 }, "<")
  .from('#s1-speech2', { opacity: 0, top: 20, duration: 2 }, "<0.5")
  .to('#s1', { y: '-100vh', opacity: 0, delay: 2 })
  .to(['#cloud1', '#cloud2'], { y: "-100%", opacity: 0 }, "<");

// scene 2
tl.to('.content-wrapper', { backgroundColor: stageColors[2] }, "<")
  .to('#s2', { top: '50%', y: '-50%', duration: 0.2 }, "<")
  .to('#s2', { backgroundPositionY: "-260px", duration: 0.3 }, "<0.2")
  .to('#s2', { opacity: 0 }, ">1.5");

// scene 3
tl.to('.content-wrapper', { backgroundColor: stageColors[3] }, ">")
  .to('#s3', { top: '50%', y: "-50%" })
  .to('#s3', { opacity: 0, y: "-100%" }, ">1.5");

// scene 4
tl.to('.content-wrapper', { backgroundColor: stageColors[4] }, ">")
  .to('#s4', { top: '50%', y: '-50%', duration: 0.2 }, "<")
  .to('#s4 img', {
    keyframes: [{ opacity: 1, duration: 1.5 }, { opacity: 0, duration: 0.7 }],
    stagger: 1.5
  }, "<");

// scene 5 - no background color change between s4 & 5
tl.to('#s5', { top: '50%', y: '-50%' }, ">")
  .to('#s5', { opacity: 0, y: "-100%" }, ">2");

// scene 6
tl.to('.content-wrapper', { backgroundColor: stageColors[5] }, ">")
  .to('#s6', { top: '50%', y: '-50%' })
  .from('#s6-speech1', { opacity: 0, top: 20, duration: 2 }, "<")
  .from('#s6-speech2', { opacity: 0, top: 20, duration: 2 }, "<0.5")
  .to('#s6', { opacity: 0, y: '-100%' }, '>2');

// scene 7
tl.to('.content-wrapper', { backgroundColor: stageColors[6] }, ">")
  .set('#s7', { top: '0' }, "<")
  .fromTo('#moon', { opacity: 0, scale: 3.5, '--inset': '0%' },
    { opacity: 1, scale: 1.5, transformOrigin: '50% 50%', '--inset': '30%', duration: 2 }, "<")
  .fromTo('#baby', { bottom: '-800', scale: 0.5, opacity: 0.3 },
    { bottom: 0, scale: 1, opacity: 1, transformOrigin: '50% 100%', duration: 1.2 }, "<0.8")
  .fromTo('#s7 .narration', { opacity: 0, scale: 1 },
    { opacity: 1, scale: 1 }, ">")