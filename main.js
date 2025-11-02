let btn=document.querySelectorAll(".btn");
let resbtn=document.getElementById("rebtn");
let cha=["x","o"]
let num=0;
let pos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [1,4,7],
    [0,3,6]
]
let arr=Array.from(btn);
arr.push(resbtn);
arr.forEach(button => button.addEventListener("click",(b)=>{
    if (b.target.innerHTML==="Restart"){
      btn.forEach(b=>b.innerHTML="");
      num=0;
      btn.forEach(b => b.disabled=false);
    }
    else if (b.target.innerHTML=="") {
    if (num%2==0){
        b.target.innerHTML=cha[0]
        num++;
    }
    else{
        b.target.innerHTML=cha[1]
        num++;
    }
    }
    winner()
}));
function winner(){
for (let p of pos){
    let [a,b,c]=p;
   a=btn[a].innerHTML;
   b=btn[b].innerHTML;
   c=btn[c].innerHTML;
 if (a&&a==b&&a==c){
    alert(`${a.toUpperCase()} Wins!`);
    btn.forEach(b=>b.disabled = true);
    return true;
 }
}
return false;
}