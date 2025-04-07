document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contactButton');
    const contactCard = document.getElementById('contactCard');
    const closeContactCard = document.getElementById('closeContactCard');
  
    contactButton.addEventListener('click', function () {
      contactCard.classList.toggle('show');
    });
  
    closeContactCard.addEventListener('click', function () {
      contactCard.classList.remove('show');
    });
  
    const toggler = document.querySelector('.navbar-toggler');
    const menuIcon = document.getElementById('menu-icon');
  
    toggler.addEventListener('click', function () {
      setTimeout(() => {
        if (toggler.classList.contains('collapsed')) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        } else {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        }
      }, 300);
    });
  });
  