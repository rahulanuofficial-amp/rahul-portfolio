const resumeButton=document.getElementById("downloadResume");

resumeButton.addEventListener("click",()=>{

const element=document.body;

const options={

margin:[8,8,8,8],

filename:"Rahul_Kumar_Resume.pdf",

image:{
type:"jpeg",
quality:1
},

html2canvas:{
scale:2,
useCORS:true,
scrollY:0
},

jsPDF:{
unit:"mm",
format:"a4",
orientation:"portrait"
},

pagebreak:{
mode:["avoid-all","css","legacy"]
}

};

html2pdf().set(options).from(element).save();

});

window.addEventListener("contextmenu",e=>{

e.preventDefault();

});

window.addEventListener("keydown",e=>{

if(

e.key==="F12"||

(e.ctrlKey&&e.shiftKey&&e.key==="I")||

(e.ctrlKey&&e.shiftKey&&e.key==="J")||

(e.ctrlKey&&e.shiftKey&&e.key==="C")||

(e.ctrlKey&&e.key==="U")

){

e.preventDefault();

}

});