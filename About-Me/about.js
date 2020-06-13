const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
   // for stoping scrolling while humburger clicked
    scrollTop =  
    window.pageYOffset || document.documentElement.scrollTop; 
  scrollLeft =  
    window.pageXOffset || document.documentElement.scrollLeft, 

      // if any scroll is attempted, 
      // set this to the previous value 
      window.onscroll = function() { 
          window.scrollTo(scrollLeft, scrollTop); 
      };
});


