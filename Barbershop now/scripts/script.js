var mainNav = document.querySelector('.mainNav');
var mainNav__toggle = document.querySelector('.mainNav__toggle');

mainNav.classList.remove('mainNav--nojs');

mainNav__toggle.addEventListener('click', function(){
  if (mainNav.classList.contains('mainNav--closed')) {
    mainNav.classList.remove('mainNav--closed');
    mainNav.classList.add('mainNav--opened');
  } else {
    mainNav.classList.add('mainNav--closed');
    mainNav.classList.remove('mainNav--opened');
  }
});
