function loadNavbar(){
  const navContainer = document.getElementById('navbar');

  if(navContainer){
    fetch('nav.html').then(response => {
      if(!response.ok) throw new Error('Network response was not ok');
      return response.text();
    }).catch(error => console.error('Error loading navbar:', error));
  }
}
window.addEventListener('DOMContentLoaded', loadNavbar);
  
