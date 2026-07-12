const loader=document.querySelector(".loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},800);

});

const progressBar=document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".section-heading,.about-wrapper,.timeline-item,.skill-card,.experience-card,.project-card,.certificate-card,.stats-card,.contact-wrapper"

).forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

const typingElement=document.querySelector(".typing-text");

const words=[

"Computer Science Engineering Student",

"Full Stack Web Developer",

"PHP Developer",

"IoT Enthusiast",

"Open Source Learner"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typingAnimation(){

const currentWord=words[wordIndex];

if(!deleting){

typingElement.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typingAnimation,1500);

return;

}

}else{

typingElement.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typingAnimation,deleting?45:110);

}

typingAnimation();

const scrollTop=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTop.style.display="flex";

}else{

scrollTop.style.display="none";

}

});

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const contactForm=document.getElementById("contactForm");

contactForm.addEventListener("submit",e=>{

e.preventDefault();

alert("Message sent successfully.");

contactForm.reset();

});

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});