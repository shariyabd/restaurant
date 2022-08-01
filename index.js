$(document).ready(function(){

    //navbar for mobile view
    $('.side-bar').click(function(){
        $('nav .nav-item').toggleClass('active')
        $('.side-bar i').toggleClass('active')
    });


    // corner bottom up-btn 
   $(window).scroll(function(){
       if($(this).scrollTop()>80){
           $('.up-btn').fadeIn();
       }else{
           $('.up-btn').fadeOut();
       };return 0;
   })
   $('.up-btn').click(function(){
       $('html ,body').animate({scrollTop:0},800);
   })

    // counter 
    $('.count').counterUp({
        time:2000,
    })
})


