window.addEventListener('DOMContentLoaded', (event) => {
  const menuCheckbox = document.getElementById('menu-bar');
  const menuItems = document.querySelectorAll('.menu a');
  let activeMenuItem = null; 

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
     
      if (activeMenuItem) {
        activeMenuItem.classList.remove('active');
      }

      
      if (activeMenuItem !== item) {
        item.classList.add('active');
        activeMenuItem = item; 
      } else {
        
        activeMenuItem = null;
      }

     
      menuCheckbox.checked = false;
    });
  });

  const images = document.querySelectorAll('#blog article img');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      if (image.classList.contains('selected')) {
        image.classList.remove('selected');
      } else {
        images.forEach((img) => img.classList.remove('selected'));
        image.classList.add('selected');
      }
    });
  });
});