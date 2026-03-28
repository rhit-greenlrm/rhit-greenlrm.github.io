function loadNavbar(){
  const navContainer = document.getElementById('navbar');

  if(navContainer){
    fetch('nav.html').then(response => response.text()).then(data => { navContainer.innerHTML = data;  
                                                                     }).catch(error => console.error('Error loading navbar:', error));
  }
}
window.onLoad = loadNavbar;
  
