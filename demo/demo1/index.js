var header=document.getElementById("head");
var pp_p=document.getElementById("pp_p");
var list=document.getElementsByClassName("i");
var i=1;
var arr = new Array();
arr[0]="亚马逊";
arr[1]="静心湖";
arr[2]="天涯海角";
arr[3]="非洲大草原";
arr[4]="雪山";

for(var m=0;m<5;m++){
  list[m].onclick=function(){
    header.style.backgroundImage="url("+this.src+")";
  }
}

function change(){
  i++;
  header.style.backgroundImage="url(images/"+i%5+"e.jpg)";
  pp_p.innerHTML=arr[(i-1)%5];
}

window.onload=function(){
  setInterval('change()',3000);
}
