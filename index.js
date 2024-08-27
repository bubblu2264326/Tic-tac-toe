document.querySelectorAll(".container div").forEach(element=>{
const span=document.createElement("span");





element.appendChild(span);
span.textContent='';

});
let counter=0;
let xplayer=[];
let oplayer=[];
let win=[[1,2,3],
         [1,4,7],
         [1,5,9],
         [4,5,6],
         [7,8,9],
         [2,5,8],
         [3,6,9],
         [7,5,3]

]
document.querySelectorAll(".container div").forEach(element=>{
   
    element.addEventListener("click",(e)=>{
        if(counter % 2 === 0 && counter<9 && element.querySelector("span").textContent!="x" && element.querySelector("span").textContent!="o"){
        element.querySelector("span").textContent="x";
    xplayer.push(e.target.id);
    console.log(element);}
    else if(counter<9 && element.querySelector("span").textContent!="x" && element.querySelector("span").textContent!="o"){
        element.querySelector("span").textContent="o";
        oplayer.push(e.target.id);
        console.log(oplayer);
    }
    counter++;
    
   for(let i=0;i<win.length;i++){
    let cnt=0;
    for(let j=0;j<xplayer.length;j++){
        for(let k=0;k<3;k++){
            if(xplayer[j]==win[i][k]){
              cnt++;
            }
        }
    }
    if(cnt===3){
        console.log("x wins");
        reset("x wins");
        cnt=0;
    }
    else{
        cnt=0;
    }
    for(let j=0;j<oplayer.length;j++){
        for(let k=0;k<3;k++){
            if(oplayer[j]==win[i][k]){
              cnt++;
            }
        }
    }
    if(cnt===3){
        console.log("o wins");
        reset("o wins");
    }
    else{
        cnt=0;
    }
   }

    })
})
function reset(a){
    const wintext=document.createElement("div");
    wintext.textContent=a;
    document.querySelector("body").appendChild(wintext);
    counter=0;
    xplayer=[];
    oplayer=[];
    document.querySelectorAll(".container div").forEach(element=>{
        element.querySelector("span").textContent=" ";
        
    })
  
}
document.querySelector("button").addEventListener("click",()=>{
 
   reset("start");
   location.reload();
})



