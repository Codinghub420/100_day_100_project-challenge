let watch=document.querySelector('.time');
let ms=0;
let sec=0;
let min=0;
let stoptime=true;
const startimer=()=>{
    if(stoptime==true){
        stoptime=false;
        timer();
    }
}
const stoptimer=()=>{
    if(stoptime==false){
        stoptime=true;
    }
}
    const timer=()=>{
        if(stoptime==false){
            let millisec=Math.floor(ms/10);
            ms++;
            if(ms==99){
                ms=0;
            
                sec=sec+1;
                ms++;
            }
            if(sec==60){
                sec=0;
                min=min+1;
                sec++;
            }

        }
        watch.innerHTML=(min<10?"0":"")+min+":"+(sec<10?"0":"")+sec+":"+(ms<10?"0":"")+ms;
        console.log(ms);
        setTimeout(timer,10);
    }
 
 let btn=document.querySelector('#btn');
 btn.addEventListener('click',()=>{
    switch(btn.innerHTML.toLowerCase()){
        case "start":
        btn.innerHTML="Stop";
        startimer();
        break;
        case "stop":
        btn.innerHTML="Start";
        stoptimer();
        break;
    }
 });
 function reset(){
    window.location.reload();
 }