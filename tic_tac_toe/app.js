let x=document.querySelector(".playx");
let o=document.querySelector(".playo");
player_x=true;
let msg=document.querySelector("#msg");
let container=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");
let winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let play_x=prompt("Enter the player X name","Shreyash");
let play_o=prompt("Enter the player o name","harsh");
x.innerHTML=play_x;
o.innerHTML=play_o;
boxes.forEach((box) => {
box.addEventListener("click",()=>{
    if(player_x){
        box.innerHTML="X";
        player_x=false;
     
        x.style.backgroundColor="white";
        x.style.color="lightseagreen";
        o.style.backgroundColor="lightseagreen";
        o.style.color="white";
       
    }
    else{
        x.style.backgroundColor="lightseagreen";
        x.style.color="white";
        o.style.backgroundColor="white";
        o.style.color="lightseagreen";             
        box.innerHTML="O";
        player_x=true;
    }
    box.disabled=true;
    checkwinner();
    

})
});
let checkwinner=()=>{
for(let pattern of winpattern){
    let pos1=boxes[pattern[0]].innerHTML;
    let pos2=boxes[pattern[1]].innerHTML;
    let pos3=boxes[pattern[2]].innerHTML;
    if(pos1!==""&&pos2!==""&&pos3!==""){
    if(pos1===pos2&&pos2===pos3){
       
       if(pos1==="X"){
        msg.style.display="inline flex";
        msg.innerHTML=`${play_x} you are winner`;
       }
       else{
        msg.style.display="inline flex";
        msg.innerHTML=`${play_o} ,you are winner`;
       }

    }
}
}

}
function reset(){
window.location.reload();
}
