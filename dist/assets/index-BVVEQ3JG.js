(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();gsap.registerPlugin(ScrollTrigger);gsap.from(".hero-main-container",{scale:1.45,duration:2.8,ease:"power3.out"});gsap.to(".overlay",{opacity:0,duration:2.8,ease:"power3.out",onComplete:()=>{document.body.style.overflow="visible",document.body.style.overflowX="hidden"}});const c=document.querySelector(".scroll-indicator"),s=gsap.timeline({repeat:-1,yoyo:!0});s.to(c,{y:20,opacity:.6,duration:.8,ease:"power1.inOut"});const e=gsap.timeline({scrollTrigger:{trigger:".container",scrub:2,pin:!0,start:"top top",end:"+=2000",ease:"none"}});e.set(".hero-main-container",{scale:1.25});e.to(".hero-main-container",{scale:1,duration:1});e.to(".hero-main-logo",{opacity:0,duration:.5},"<");e.to(".hero-main-image",{opacity:0,duration:.9},"<+=0.5");e.to(".hero-main-container",{backgroundSize:"28vh",duration:1.5},"<+=0.2");e.fromTo(".hero-text",{backgroundImage:`radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`},{backgroundImage:`radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,duration:3},"<1.2");e.fromTo(".hero-text-logo",{opacity:0,maskImage:"radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)"},{opacity:1,maskImage:`radial-gradient(
    circle at 50% 105.594%,
    rgb(0, 0, 0) 62.9372%,
    rgba(0, 0, 0, 0) 81.4686%
  )`,duration:3},"<0.2");e.set(".hero-main-container",{opacity:0});e.to(".hero-1-container",{scale:.85,duration:3},"<-=3");e.set(".hero-1-container",{maskImage:"radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)"},"<+=2.1");e.to(".hero-1-container",{maskImage:"radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)",duration:2},"<+=0.2");e.to(".hero-text-logo",{opacity:0,duration:2},"<1.5");e.set(".hero-1-container",{opacity:0});e.set(".hero-2-container",{visibility:"visible"});e.to(".hero-2-container",{opacity:1,duration:3},"<+=0.2");e.fromTo(".hero-2-container",{backgroundImage:`radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`},{backgroundImage:`radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
     rgb(247, 77, 82) 50.011vh,
      rgb(145, 42, 105) 90.0183vh,
       rgba(32, 31, 66, 0) 140.599vh)`,duration:3},"<1.2");
