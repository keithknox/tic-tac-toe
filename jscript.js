$(document).ready(function(){
  var turn = 0;
    $("#board").find("td").click(function(){
      if (turn %2 ===0) {
        $(this).text('X');  
      }
      else {
        $(this).text('O');
      }      
    turn++;
  });  
});