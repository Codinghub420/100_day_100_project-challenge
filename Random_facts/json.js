const myfun=  async ()=>{
    let response= await fetch('app.json');
    let data= await response.json();
    let rand=Math.floor(Math.random()*data.facts.length);
    document.querySelector('#demo').innerHTML=`${data.facts[rand].fact}`;
   
}
