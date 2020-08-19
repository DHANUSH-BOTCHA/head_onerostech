let x = [
  {	 title: "WORD CROSS",
     desc: "word searching game" ,
     video: "link will be provided soon", 
     comments: "it will also provided soon", 
     screen: "shots will be programed",
     gameimagesource: "scource will be provided"
  },
  {  title: "CARIBBEAN POKER",
     desc: "card guessing game" ,
     video: "link will be provided soon", 
     comments: "it will also provided soon", 
     screen: "shots will be programed", 
     gameimagesource: "scource will be provided" 
  },
  {  title: "CRAPS", 
     desc: "dice game" ,
     video: "link will be provided soon", 
     comments: "it will also provided soon", 
     screen: "shots will be programed", 
     gameimagesource: "scource will be provided"  
  },
  {  title: "LET IT RIDE",
     desc: "4-cards" ,
     video: "link will be provided soon", 
     comments: "it will also provided soon", 
     screen: "shots will be programed", 
     gameimagesource: "scource will be provided"  
  },
  {  title: "MISSISSIPPI",  
     desc: "shapial cards" ,
     video: "link will be provided soon", 
     comments: "it will also provided soon", 
     screen: "shots will be programed", 
     gameimagesource: "scource will be provided"  
  },
  { title: "PAIGOW", 
    desc: "Professional cars guessing game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  { title: "ROULETTE LIVE",
    desc: "ball game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  { title: "SICBO LIVE",  
    desc: "three dice game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  { title: "THREE CARD POKER", 
    desc: "three card game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  { title: "BACARAT LIVE", 
    desc: "double card game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  { title: "CRAZY 4 POKER",
    desc: "carzy combiantion game" ,
    video: "link will be provided soon", 
    comments: "it will also provided soon", 
    screen: "shots will be programed", 
    gameimagesource: "scource will be provided"  
  },
  

];

var y = document.querySelectorAll(".link-new");
var test = (event) => {
  localStorage.setItem("title", x[Number(event.target.name)].title);
  localStorage.setItem("desc", x[Number(event.target.name)].desc);
  localStorage.setItem("video", x[Number(event.target.name)].video);
  localStorage.setItem("comments", x[Number(event.target.name)].comments);
  localStorage.setItem("screen", x[Number(event.target.name)].screen);
  localStorage.setItem("gameimagesource", x[Number(event.target.name)].gameimagesource);
};

y.forEach((item) => {
  item.addEventListener("click", test);
});