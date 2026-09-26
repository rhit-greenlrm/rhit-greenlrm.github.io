//inspiration and reference:  https://www.w3schools.com/howto/howto_css_flip_card.asp (this tutorial is for css, so i adapted it into js)
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

let photoCard = document.getElementById("laser");

photoCard.addEventListener("click", function(){
   if(photoCard.src.endsWith("laser.jpeg")){
       photoCard.src = "laser2.jpeg";
   } else {
     photoCard.src = "laser.jpeg";
   }
});

