'use strict';




const leftImageElement= document.getElementById('left-image');
console.log(leftImageElement);

const MidImageElement= document.getElementById('Mid-image');

const rightImageElement= document.getElementById('right-image');

 console.log(leftImageElement,MidImageElement,rightImageElement);

let maxAttempts=25;
let userAttemptsCounter=0;


let leftImageIndex;
let MidImageIndex;
let rightImageIndex;
let Products=[];



function Product(name,src) {
  this.name= name;
  this.source=src;
  this.shown=0;
  this.votes=0;
 
Product.all.push(this);

}

Product.all=[];

console.log(Product.all)

new Product('bag','img/bag.jpg');//1
new Product('banana','img/banana.jpg');//2
new Product('bathroom','img/bathroom.jpg');//3
new Product('boots','img/boots.jpg');//4
new Product('breakfast','img/breakfast.jpg');//5
new Product('bubblegum','img/bubblegum.jpg');//6
new Product('chair','img/chair.jpg');//7
new Product('cthulhu','img/cthulhu.jpg');//8
new Product('dog-duck','img/dog-duck.jpg');//9
new Product('pen','img/pen.jpg');//10
new Product('pet-sweep','img/pet-sweep.jpg');//11
new Product('scissors','img/scissors.jpg');//12
new Product('shark','img/shark.jpg');//13
new Product('sweep','img/sweep.png');//14
new Product('tauntaun','img/tauntaun.jpg');//15
new Product('unicorn','img/unicorn.jpg');//16
new Product('water-can','img/water-can.jpg');//17
new Product('wine-glass','img/wine-glass.jpg');//18




// from w3 schools
function getRandomIndex() {
  // 0=>17
  return Math.floor(Math.random() * Product.all.length);
}


function renderthereeImages() {

 
  rightImageIndex=getRandomIndex();
  Product.all[rightImageIndex].shown++;
  do {
    leftImageIndex=getRandomIndex();
    Product.all[leftImageIndex].shown++;
  } while(leftImageIndex=== rightImageIndex);

  do {
    MidImageIndex=getRandomIndex();
    Product.all[ MidImageIndex].shown++;
  } while(MidImageIndex===leftImageIndex || MidImageIndex===rightImageIndex);



  
  
 console.log(leftImageIndex,rightImageIndex,MidImageIndex);

  





leftImageElement.src=Product.all[leftImageIndex].source;
MidImageElement.src=Product.all[MidImageIndex].source;
rightImageElement.src=Product.all[rightImageIndex].source;




}

renderthereeImages();


leftImageElement.addEventListener('click',handleUserClick);
 MidImageElement.addEventListener('click',handleUserClick);
rightImageElement.addEventListener('click',handleUserClick);




function handleUserClick(event) {

  console.log(event.target.id);

  userAttemptsCounter++;



  if (userAttemptsCounter<=maxAttempts) {


    if (event.target.id==='left-image') {

      Product.all[leftImageIndex].votes++;
      console.log(Product.all[leftImageIndex]);

    }else{
      Product.all[rightImageIndex].votes++;
      console.log(Product.all[rightImageIndex]);
    }

    renderthereeImages();

  }else{


    document.getElementById("results-list").addEventListener("click", myFunction);

    function myFunction() {
      let list= document.getElementById('results-list');

    for (let i = 0; i < Product.all.length; i++) {
     
      let listItem=document.createElement('li');

      list.appendChild(listItem);

      listItem.textContent=`${Product.all[i].name} had ${Product.all[i].votes} votes and was seen ${Product.all[i].shown} times `
 
    }
   
 
      
    }

  

    leftImageElement.removeEventListener('click',handleUserClick);
    MidImageElement.removeEventListener('click',handleUserClick);
    rightImageElement.removeEventListener('click',handleUserClick);  

   
  }
  

}






  




    