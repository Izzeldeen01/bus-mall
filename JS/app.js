'use strict'; 
// console.log ('test');

var firstimg = document.getElementById('first-img');
console.log(firstimg);
var secondimg = document.getElementById('second-img');

var theirdimg = document.getElementById ('theird-img'); 
var numberofattempts = document.getElementById('submit')
var resultButton = document.getElementById ('result-button');

var minattempt =25;
var userattempt = 1;  

var firstimgindex; 
var secondimgindex;
var theirdimgindex; 
var x1,x2,x3;
var chartNames = [];
var chartData =[];
var chartTimeOfView=[];

numberofattempts.addEventListener('click',attempts)
 function attempts (event){
    //  console.log('test1');
     event.preventDefault();
    //  console.log(event);
     
    // console.log('test');
     
    minattempt=document.getElementById('number').value;
    // minattempt=parseInt(minattempt);
    // console.log(minattempt);
 }


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

    x1= firstimgindex;
    x2= secondimgindex;
    x3= theirdimgindex; 

    firstimgindex = RandomIndex();
    
    // do{
        
    // }while (firstimgindex === secondimgindex);
    
    do {
        secondimgindex = RandomIndex();
        theirdimgindex = RandomIndex();
    }while (theirdimgindex === secondimgindex || theirdimgindex === firstimgindex || firstimgindex === secondimgindex); 
    
    do {
        firstimgindex = RandomIndex();
        secondimgindex = RandomIndex();
        theirdimgindex = RandomIndex();
    }while ((firstimgindex=== x1 || firstimgindex=== x2 ||firstimgindex=== x3 )||(secondimgindex===x1 ||secondimgindex===x2||secondimgindex===x3)||(theirdimgindex===x1||theirdimgindex===x2||theirdimgindex===x3)||(theirdimgindex === secondimgindex || theirdimgindex === firstimgindex || firstimgindex === secondimgindex));
     console.log ('presentpic1 ',firstimgindex ,'presentpic2 ' ,secondimgindex,'presentpic3 ',theirdimgindex,'previouspic1 ', x1,'previouspic2 ',x2,'previouspic3 ',x3);
    firstimg.src = product.prototype.allImg[firstimgindex].sourse ; 
    secondimg.src = product.prototype.allImg[secondimgindex].sourse ;
    theirdimg.src = product.prototype.allImg[theirdimgindex].sourse ;

   
 }
 

renderingThreeImg();

firstimg.addEventListener('click' , userchoise);
secondimg.addEventListener('click' , userchoise);
theirdimg.addEventListener('click', userchoise); 

function userchoise (event){


// console.log(userattempt , minattempt);

if (userattempt<=minattempt){

    if (event.target.id === 'first-img'){
        product.prototype.allImg[firstimgindex].vote++;

        userattempt++ ; 
    }else if (event.target.id === 'second-img' ){
product.prototype.allImg[secondimgindex].vote++;
userattempt++ ; 
    }else if (event.target.id === 'theird-img') {
        product.prototype.allImg[theirdimgindex].vote++; 
        userattempt++ ; 
    }
    // console.log(event.target.id)
    product.prototype.allImg[firstimgindex].timeofrender++;
    product.prototype.allImg[secondimgindex].timeofrender++;
    product.prototype.allImg[theirdimgindex].timeofrender++;
        renderingThreeImg();
       
}else {
    
firstimg.removeEventListener('click' , userchoise);
secondimg.removeEventListener('click' , userchoise);
theirdimg.removeEventListener('click', userchoise);
resultButton.removeAttribute('disabled');
} 

}
// // console.log(product.prototype.allImg);
// for (var i=0; i<product.prototype.allImg.length;i++){
//     chartNames.push(product.prototype.allImg[i].name);
//     // chartData.push(product.prototype.allImg[i].vote);
//     // console.log(i);
// }

// console.log(chartNames);
// console.log(chartData);
var number ; 

resultButton.addEventListener('click',finalresult)

function finalresult () {
    for (var i=0; i<product.prototype.allImg.length;i++){
        chartNames.push(product.prototype.allImg[i].name);
        chartData.push(product.prototype.allImg[i].vote);
        chartTimeOfView.push(product.prototype.allImg[i].timeofrender);
        
        // console.log(i);
    }
    
    // console.log('chartNames   ', chartNames);
    // console.log('chartData   ',chartData);
    // console.log('chartTimeOfView   ',chartTimeOfView);
    
    var resultList = document.getElementById('result-list');
    var result;
   for (var i = 0 ; i <product.prototype.allImg.length ; i++){
       number = product.prototype.allImg[i].timeofrender;
        if (product.prototype.allImg[i].timeofrender===0){
            number = 1;
        }
       result = document.createElement ('li'); 
       result.textContent = product.prototype.allImg[i].name + ' had ' + product.prototype.allImg[i].vote + 
       ' votes,and was seen ' + product.prototype.allImg[i].timeofrender + ' times' + ' and got a persantage of    '+
       ((product.prototype.allImg[i].vote/number)*100) + '  %';
       resultList.appendChild(result);  
}
// console.log(chartData);
var ctx = document.getElementById('result-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: chartNames,
        datasets: [{
            label: 'Time of Selection',
            backgroundColor: 'gray',
            borderColor: 'rgb(0,0,0)',
            data: chartData 

       
        },{
        label: 'Time of View',
        backgroundColor: 'black',
        borderColor: 'white',
        data: chartTimeOfView 
        }
    ]
    },
   
    

    // Configuration options go here
    options: {}
});
}