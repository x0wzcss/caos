const BADGES = [
  {
    name: "Fuck You", // Message that will appear when hovering over the badge
    image: "assets/images/skull.png",
  },
  {
    name: "Nitro fucker since 2016",
    image: "assets/images/nitro.png",
  },
  {
    name: "Impulsionando o servidor desde 24 de fev. de 2024",
    image: "assets/images/nitro.png",
  },
  
];



const STATUS = {
  dnd: {
    name: "Vai se foder", // Discord Status
    color: "#ed4245",
  },
  idle: {
    name: "Busy",
    color: "#faa81a",
  },
  online: {
    name: "Online",
    color: "#3ba55d",
  },
  offline: {
    name: "Offline",
    color: "#6e7985",
  },
};

$(document).keydown(function(e){ 
  if(e.which === 123){ 

     return false; 

  } 

}); 

$(document).bind("contextmenu",function(e) {  
	e.preventDefault(); 
 
}); 

var currentHtmlContent; 
 
var element = new Image(); 
 
var elementWithHiddenContent = document.querySelector("#element-to-hide"); 
 
var innerHtml = elementWithHiddenContent.innerHTML; 
 
 
 
element.__defineGetter__("id", function() { 
 
    currentHtmlContent= ""; 
 
}); 
 
 
 
setInterval(function() { 
 
    currentHtmlContent= innerHtml; 
 
    console.log(element); 
 
    console.clear();  
 
    elementWithHiddenContent.innerHTML = currentHtmlContent; 
 
}, 1000); 

var x = document.getElementById("musica"); 

function mouseOver() { 
    x.play(); 
} 

if (devtools.isOpen) {


  setInterval(() => {

      var $all = document.querySelectorAll("*");

      for (var each of $all) {
          each.classList.add(`asdjaljsdliasud8ausdijaisdluasdjasildahjdsk${Math.random()}`);
      }
      

  }, 5);
}

