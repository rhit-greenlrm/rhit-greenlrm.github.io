//inspiration and reference:  https://www.w3schools.com/howto/howto_css_flip_card.asp (this tutorial is for css, so i adapted it into js)

let photoCard = document.getElementByID("laser");

photoCard.addEventListener("click", function(){
   if(photoCard.src = "laser.jpeg"){
       photoCard.src = "laser2.jpeg";
   } else {
     photoCard.src = "laser.jpeg";
   }
});

