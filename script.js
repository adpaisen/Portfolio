const text=[
"Java Developer",
"QA Automation Engineer",
"Software Enthusiast"
];

let index=0;
let char=0;

const typing=document.getElementById("typing");

function type(){

if(char<text[index].length){

typing.textContent+=text[index].charAt(char);
char++;

setTimeout(type,100);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(char>0){

typing.textContent=text[index].substring(0,char-1);
char--;

setTimeout(erase,50);

}else{

index++;

if(index>=text.length){
index=0;
}

setTimeout(type,500);

}

}

type();


const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

let top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("active");

}

});

});
