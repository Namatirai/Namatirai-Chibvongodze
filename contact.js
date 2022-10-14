$(document).ready(function (){
  $("#submit").click(function(){
    $(this).attr('action','mailto:namajacy@gmail.com?subject=Namatirai Chibvongodze Digital Portfolio' + $("#nameinput").val() +$("#emailinput").val() +$("#nameinput").val());
  })
})
