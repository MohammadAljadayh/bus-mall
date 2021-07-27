'use strict';




const leftImageElement= document.getElementById('left-image');
console.log(leftImageElement);

const MidImageElement= document.getElementById('Mid-image');

const rightImageElement= document.getElementById('right-image');

 console.log(leftImageElement,MidImageElement,rightImageElement);

let maxAttempts=25;
let userAttemptsCounter=0;

let buttonElement = document.getElementById('button'); 
let leftImageIndex;
let MidImageIndex;
let rightImageIndex;
let Products=[];

let namesArr = [];

let votesArr = [];

let shownArr=[];

let numbers=[];


function Product(name,src) {
  this.name= name;
  this.source=src;
  this.shown=0;
  this.votes=0;
 
Product.all.push(this);
namesArr.push(this.name); 
//Product.V.push(this);

}
//Product.V = [];
Product.all=[];


console.log(Product.all)
//console.log(Product.V)

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


function updateStorage() {
  
 
  console.log(Product.all);

  let stringArr=JSON.stringify(Product.all);
  console.log(stringArr);

  localStorage.setItem('Product',stringArr);

}


function getproductorder() {
  
  let data=localStorage.getItem('Product');
  console.log(data);


  let parsedArr=JSON.parse(data)
  console.log(parsedArr);

  if (parsedArr !==null) {

    Product.all=parsedArr;
  
   
    console.log(Product.all);

  }
  renderthereeImages();
  console.log(Product.all);
}


function renderthereeImages() {

 do {

  rightImageIndex=getRandomIndex();
  
  

 }
 while(includeN(rightImageIndex)); 


  do {
    leftImageIndex=getRandomIndex();
   

    console.log(leftImageIndex,rightImageIndex);
    console.log(numbers);

  } while(leftImageIndex===rightImageIndex||includeN(leftImageIndex)

  );

  do {
    MidImageIndex=getRandomIndex();
   
  } while(MidImageIndex===leftImageIndex ||MidImageIndex===rightImageIndex||includeN(MidImageIndex));



numbers=[leftImageIndex,rightImageIndex,MidImageIndex];
  
 console.log(numbers);

  





leftImageElement.src=Product.all[leftImageIndex].source;

Product.all[leftImageIndex].shown++;
MidImageElement.src=Product.all[MidImageIndex].source;
Product.all[ MidImageIndex].shown++;
rightImageElement.src=Product.all[rightImageIndex].source;
Product.all[rightImageIndex].shown++;




}

renderthereeImages();

function includeN(index)
{
return numbers.includes(index);

}

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

    }else if(event.target.id==='Mid-image')
    {
      Product.all[MidImageIndex].votes++;
      console.log(Product.all[MidImageIndex]);
    }
else {

  Product.all[rightImageIndex].votes++;
  console.log(Product.all[rightImageIndex]);

}
    renderthereeImages();

  }else{


    buttonElement.hidden = false;


    buttonElement.addEventListener('click', myFunction);
  
    function myFunction() {
      let list= document.getElementById('results-list');

    for (let i = 0; i < Product.all.length; i++) {
     
      let listItem=document.createElement('li');

      list.appendChild(listItem);

      listItem.textContent=`${Product.all[i].name} had ${Product.all[i].votes} votes and was seen ${Product.all[i].shown} times `
 
    }
    buttonElement.removeEventListener('click', myFunction);
 
      
    }

    

    for (let i = 0; i < Product.all.length; i++) {
      
      votesArr.push(Product.all[i].votes);
      shownArr.push(Product.all[i].shown);
      
    }
    console.log( votesArr);
    console.log( shownArr);


 


  

    leftImageElement.removeEventListener('click',handleUserClick);
    MidImageElement.removeEventListener('click',handleUserClick);
    rightImageElement.removeEventListener('click',handleUserClick);  
    
    console.log(namesArr);
    updateStorage();
    showChart();

  }

}

getproductorder();



function showChart() {

  const data = {
    labels: namesArr,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shownArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  
  ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}




  




    