// Typing Effect
const words=["Backend Developer","Problem Solver","Java Enthusiast"];
let i=0,j=0,current="",isDeleting=false;

function type(){
  current=words[i];
  if(!isDeleting){
    document.querySelector(".typing").textContent=current.substring(0,j++);
    if(j>current.length){isDeleting=true;setTimeout(type,1000);return;}
  }else{
    document.querySelector(".typing").textContent=current.substring(0,j--);
    if(j===0){isDeleting=false;i=(i+1)%words.length;}
  }
  setTimeout(type,100);
}
type();

// Dark Mode Toggle
function toggleMode(){
  document.body.classList.toggle("light-mode");
}

// Circular Skills
document.querySelectorAll(".circle").forEach(circle=>{
  let degree=circle.getAttribute("data-degree");
  circle.style.background=`conic-gradient(var(--primary) ${degree}deg, var(--card-bg) 0deg)`;
});

// Scroll Button
window.onscroll=function(){
  document.getElementById("topBtn").style.display=
  document.documentElement.scrollTop>200?"block":"none";
}

function scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}
