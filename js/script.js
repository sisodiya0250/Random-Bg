let btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
})

function generateBg(){
    let box=document.querySelector('.box');
    let codebox=document.querySelector('#codebox');
    let randomBgc=Math.floor(Math.random() * 16777215);
    let randomCode='#' + randomBgc.toString(16);
    document.body.style.background=randomCode;
    box.style.background=randomCode;
    codebox.innerHTML=randomCode;
    console.log(randomBgc,randomCode + '<hr>');
}