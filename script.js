const nav = document.querySelector('#navbar');
let topOfNav = nav.offsetTop;
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
window.addEventListener('scroll', fixNav);


function scrol(cardId) {
    
    const elem= document.getElementById(cardId)
    console.log(elem.id)
        elem.scrollIntoView({
            behavior:"smooth",
        })

}  
$(document).ready(function(){
    $('#about').addClass('active')
    $('li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')       
    })


})