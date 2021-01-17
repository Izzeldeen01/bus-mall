'use strict'; 
// console.log ('test');

var firstimg = document.getElementById('first-img');
console.log(firstimg);
var secondimg = document.getElementById('second-img');

var theirdimg = document.getElementById ('theird-img'); 

var minattempt =25;
var userattempt = 0;  

var firstimgindex; 
var secondimgindex;
var theirdimgindex; 

function product (name , sourse ){
    this.name = name ;
    this.sourse = sourse;
    this.vote = 0;
    this.timeofrender=0; 
    product.prototype.allImg.push(this); 

}

product.prototype.allImg = []; 

new product ('bag', '../img/bag.jpg');
new product ('banana', '../img/banana.jpg');
new product ('bathroom', '../img/bathroom.jpg');
new product ('boots', '../img/boots.jpg');
new product ('breakfast', '../img/breakfast.jpg');
new product ('bubblegum', '../img/bubblegum.jpg');
new product ('chair', '../img/chair.jpg');
new product ('cthulhu', '../img/cthulhu.jpg');
new product ('dog-duck', '../img/dog-duck.jpg');
new product ('dragon', '../img/dragon.jpg');
new product ('pen', '../img/pen.jpg');
new product ('pet-sweep', '../img/pet-sweep.jpg');
new product ('scissors', '../img/scissors.jpg');
new product ('shark', '../img/shark.jpg');
new product ('sweep', '../img/sweep.png');
new product ('tauntaun', '../img/tauntaun.jpg');
new product ('unicorn', '../img/unicorn.jpg');
new product ('usb', '../img/usb.gif');
new product ('water-can', '../img/water-can.jpg');
new product ('wine-glass', '../img/wine-glass.jpg');

// console.log(product.prototype.allImg.length)

function RandomIndex (){
    return Math.floor(Math.random()*product.prototype.allImg.length );
}
// console.log(RandomIndex());

// console.log(generatThreeRandomNumbers());

 function renderingThreeImg(){

    firstimgindex = RandomIndex();
    
    // do{
        
    // }while (firstimgindex === secondimgindex);

    do {
        secondimgindex = RandomIndex();
        theirdimgindex = RandomIndex();
    }while (theirdimgindex === secondimgindex || theirdimgindex === firstimgindex || firstimgindex === secondimgindex); 

    firstimg.src = product.prototype.allImg[firstimgindex].sourse ; 
    secondimg.src = product.prototype.allImg[secondimgindex].sourse ;
    theirdimg.src = product.prototype.allImg[theirdimgindex].sourse ;

    product.prototype.allImg[firstimgindex].timeofrender++;

    product.prototype.allImg[secondimgindex].timeofrender++;
    product.prototype.allImg[theirdimgindex].timeofrender++;
 }

renderingThreeImg();

firstimg.addEventListener('click' , userchoise);
secondimg.addEventListener('click' , userchoise);
theirdimg.addEventListener('click', userchoise); 

function userchoise (event){
userattempt++ ; 

if (userattempt<=minattempt){

    if (event.target.id === 'first-img'){
        product.prototype.allImg[firstimgindex].vote++;
    }else if (event.target.id === 'second-img' ){
product.prototype.allImg[secondimgindex].vote++;
    }else if (event.target.id === 'theird-img') {
        product.prototype.allImg[theirdimgindex].vote++; 
    }
    console.log(event.target.id)
        renderingThreeImg();
    
}else {

 var resultList = document.getElementById('result-list');
 var result;
for (var i = 0 ; i <product.prototype.allImg.length ; i++){
    result = document.createElement ('li'); 
    result.textContent = product.prototype.allImg[i].name + ' had ' + product.prototype.allImg[i].vote + ' votes,and was seen ' + product.prototype.allImg[i].timeofrender + ' times';
    resultList.appendChild(result);  
}
firstimg.removeEventListener('click' , userchoise);
secondimg.removeEventListener('click' , userchoise);
theirdimg.removeEventListener('click', userchoise);

} 
console.log(product.prototype.allImg);
}

