$(document).ready(function(){
   $('p span').css({
       "color": "white",
      "font-size": "18px",
      "background": "red"
})
 $('ul.list li:first').css('color','red');
 $('ul.list li:last').css('color','red');
 $('ul.list li:even').css({
    "background": "#333",
    "color":"gold"
});
 $('ul.list li:odd').css({
     "background": "green",
     "color":"white"
 });

 $('ul.list li:nth-child(3n)').css('list-style','none');

});

// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

$('[href]').css('color','red');
$('a[href="http://google.com"]').css({
    "color":"green",
    "font-size":"18px",
    "text-decoretion":"none"
});
// $('*').hide();