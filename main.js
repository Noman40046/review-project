/* review data-- */
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web developer',
      img: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];


//select iteams--
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item--
let currentItem = 0;

//load initial item--
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})


//show person based on item
function showPerson(){

    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next item--
nextBtn.addEventListener("click", function(){

    currentItem++;
    if(currentItem > reviews.length-1){

        currentItem = 0;
    }
    showPerson();
});

//show prev item--
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1 ;
    }
    showPerson();
})

//random person--
randomBtn.addEventListener("click", function(){

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();



})