$(document).ready(function() {

   
   // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
   $('.table-responsive-stack').find("th").each(function (i) {
      
      $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
      $('.table-responsive-stack-thead').hide();
   });

   
   
   
   
$( '.table-responsive-stack' ).each(function() {
  var thCount = $(this).find("th").length; 
   var rowGrow = 100 / thCount + '%';
   //console.log(rowGrow);
   $(this).find("th, td").css('flex-basis', rowGrow);   
});
   
   
   
   
function flexTable(){
   if ($(window).width() < 768) {
      
   $(".table-responsive-stack").each(function (i) {
      $(this).find(".table-responsive-stack-thead").show();
      $(this).find('thead').hide();
   });
      
    
   // window is less than 768px   
   } else {
      
      
   $(".table-responsive-stack").each(function (i) {
      $(this).find(".table-responsive-stack-thead").hide();
      $(this).find('thead').show();
   });
      
      

   }
// flextable   
}      
    
    /*Responsive Table 2*/
    
    $('.table-responsive-stack2').find("th").each(function (i) {
      
      $('.table-responsive-stack2 td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack2-thead">'+ $(this).text() + ':</span> ');
      $('.table-responsive-stack2-thead').hide();
   });

   
   
   
   
$( '.table-responsive-stack2' ).each(function() {
  var thCount = $(this).find("th").length; 
   var rowGrow = 100 / thCount + '%';
   //console.log(rowGrow);
   $(this).find("th, td").css('flex-basis', rowGrow);   
});
   
   
   
   
function flexTable2(){
   if ($(window).width() < 768) {
      
   $(".table-responsive-stack2").each(function (i) {
      $(this).find(".table-responsive-stack2-thead").show();
      $(this).find('thead').hide();
   });
      
    
   // window is less than 768px   
   } else {
      
      
   $(".table-responsive-stack2").each(function (i) {
      $(this).find(".table-responsive-stack2-thead").hide();
      $(this).find('thead').show();
   });
      
      

   }
// flextable   
}      
 
flexTable();
    flexTable2();
   
window.onresize = function(event) {
    flexTable();
    flexTable2();

};
   
   
   
   

  
// document ready  
});