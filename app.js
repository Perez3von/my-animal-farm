// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
const myTrollSound = document.getElementById('my-troll-sound');
const horse = document.getElementById('horse-image');
const myCatSound = document.getElementById('cat-sound');
const cat = document.getElementById('cat-image');
const myDogSound = document.getElementById('dog-sound');
const dog = document.getElementById('dog-image');
const myTrollHorse = document.getElementById('troll-horse-image');

horse.addEventListener('click', ()=>{

    myTrollSound.play();
    myTrollHorse.classList.toggle('active');
    //myTrollHorse.style.removeProperty('display');
    myCatSound.pause();
    myDogSound.pause();


});

cat.addEventListener('click', ()=>{


    myCatSound.play();
    myTrollHorse.classList.remove('active');
    myDogSound.pause();
    myTrollSound.pause();
  
  
});
  

dog.addEventListener('click', ()=>{


    myDogSound.play();
    myTrollHorse.classList.remove('active');
    myTrollSound.pause();
    myCatSound.pause();
    
    
});
   

document.addEventListener('keyup', (event)=>{

    if (event.keyCode === 69){

        myDogSound.play();
        myTrollHorse.classList.remove('active');
        myTrollSound.pause();
        myCatSound.pause();
    }

    if (event.keyCode === 81){

        myTrollSound.play();
        myTrollHorse.classList.toggle('active');
        myCatSound.pause();
        myDogSound.pause();
    }

    if (event.keyCode === 87){

        myCatSound.play();
        myTrollHorse.classList.remove('active');
        myDogSound.pause();
        myTrollSound.pause();

    
    }


});
    
    


