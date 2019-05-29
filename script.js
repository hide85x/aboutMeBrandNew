
$(document).ready(function(){
    $('#about').addClass('active')
    $('li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')       
    })


})

function scrol(cardId) {
    
    const elem= document.getElementById(cardId)
    console.log(elem.id)
        elem.scrollIntoView({
            behavior:"smooth",
            block:"start"
           
            
        })

}  