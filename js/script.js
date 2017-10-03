 
//for carousel
$(document).ready(function(){
             $("#mycarousel").carousel( { interval: 2000 } );
             $("#carousel-button").click(function(){
if ($("#carousel-button").children("span").hasClass('fa-pause')){
    $("#mycarousel").carousel('pause');
    $("#carousel-button").children("span").removeClass('fa-pause');
    $("#carousel-button").children("span").addClass('fa-play');
}
else if ($("#carousel-button").children("span").hasClass('fa-play')){
    $("#mycarousel").carousel('cycle');
    $("#carousel-button").children("span").removeClass('fa-play');
    $("#carousel-button").children("span").addClass('fa-pause');

}
             });
         });

 //For reserve button
 
 $(document).ready(function(){
$("#reserveButt").click(function(){
$('#myreserve').modal({
    keyboard:false,
    focus:true
});
});

 });
//For login button
 
 $(document).ready(function(){
$("#loginButt").click(function(){
$('#loginModal').modal({
    keyboard:false,
    focus:true
});
});

 });