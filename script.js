document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.service-grid article,.project,.featured-project,.skills-grid,.about-copy').forEach(el=>observer.observe(el));