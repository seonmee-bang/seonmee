$(function(){
  var $duration=300,
      $button=$('#buttons2 button');

  //버튼들의 높이 -40, 0, 40, 80, 120...
  //자바스크립트 요소들마다 할일
  /*
  var $buttons = document.getElementsByTagName('button');
  for(var i=0, i=<$buttosn.length; i++){
    $buttons[i].style.top = i*40 - 40 + 'px';
  }
  */
  $button.each(function(idx){
    // console.log(idx);
    var newTop = idx*40 -40 + 'px';
    $(this).css({top:newTop});
})
.mouseover(function(){
  $(this).stop().animate({backgroundColor:'yellow', color:'#000'}, $duration);
  $(this).find('img:first-child').stop().animate({opacity:0}, $duration);
  $(this).find('img:nth-child(2)').stop().animate({opacity:1}, $duration);
})
.mouseout(function(){
  $(this).stop().animate({backgroundColor:'#fff', color:'#01b169'}, $duration);
  $(this).find('img:first-child').stop().animate({opacity:1}, $duration);
  $(this).find('img:nth-child(2)').stop().animate({opacity:0}, $duration);
});
});
