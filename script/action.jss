$(document).ready(function(){
    $('.lang_box > a').click(function(event){
        event.preventDefault();
        $('.lang').toggle();
    });

$('.gnb li').mouseenter(function(){
    $('.lnb').stop().slideDown();

})
$('.gnb li').mouseleave(function(){
    $('.lnb').stop().slideUp();
})


});