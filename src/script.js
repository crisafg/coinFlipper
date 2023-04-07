let heads= 0;
let tails= 0;
let coin= document.querySelector('.coin');
let flip= document.querySelector('.btn');
let resetBtn= document.querySelector('.reset');
let headsImg= document.querySelector('.heads');
let tailsImg= document.querySelector('.tails');

flip.addEventListener('click', ()=>{
    coin.style.animation='none';
    let i= Math.floor(Math.random() * 2);
    if(i){
        setTimeout(function(){
            coin.style.animation= 'tailsFlip 3s forwards';
        }, 100)
        heads++;
    }else{
        setTimeout(function(){
            coin.style.animation= 'headsFlip 3s forwards';
        })
        tails++;
    }
    setTimeout(result,3000);
    console.log(i);
});

function result(){
    document.querySelector('#countCara').textContent= `Heads: ${heads}`;
    document.querySelector('#countCruz').textContent= `Tails: ${tails}`;
}

resetBtn.addEventListener('click', ()=>{
    heads= 0;
    tails= 0;
    result();
})