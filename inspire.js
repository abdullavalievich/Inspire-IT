let searchBtn = document.getElementById('searchicon');
let searchBlock = document.getElementById('search');

searchBtn.addEventListener('click', ()=>{
    searchBlock.classList.toggle('search-down-block-active');
});

let menu2 = document.getElementById('second-menu');

window.onscroll = function(){
    if(document.documentElement.scrollTop > 45 || document.body.scrollTop > 45){
        menu2.style.position = 'fixed';
    }else{
        menu2.style.position = 'relative';
    }
}

let burgerBtn = document.getElementById('burger-menu-btn');
let burgerBlock = document.getElementById('burger-menu-down-block');

burgerBtn.addEventListener('click', ()=>{
    burgerBlock.classList.toggle('down-burger-menu-active');
});

let titlesBtn = document.getElementById('titles-btn');
let titlesBlock = document.getElementById('titles-down-block');

titlesBtn.addEventListener('click', ()=>{
    titlesBlock.classList.toggle('titles-down-block-active');
});


