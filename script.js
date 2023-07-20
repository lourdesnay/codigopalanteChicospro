
window.addEventListener('DOMContentLoaded', (event) => {
  const menuCheckbox = document.getElementById('menu-bar');
  const menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuCheckbox.checked = false;
    });
  });
});


    window.addEventListener('DOMContentLoaded', (event) => {
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
  