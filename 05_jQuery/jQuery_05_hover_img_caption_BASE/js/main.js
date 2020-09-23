// 첫번째이미지
$(function(){
  var $duration = 300,
      $image = $('#images p');
//첫번째 캡선, span animate메서드
/*
  공백이 있으면 = find
  공백이 없으면 = filter
  #image p span {} -> $image.find('span')
  #image p.strong {} -> $image.filter('strong')
  선택자.animate({속성:값, 속성:값},시간, 이징, 다른할일);
*/

  $image.filter(':nth-child(1)').mouseover(function(){
    $(this).find('span, strong').stop().animate({opacity:1},$duration);
  })
  .mouseout(function(){
    $(this).find('span, strong').stop().animate({opacity:0},$duration);
});

//#image p:nth-child(2)
//$image.filter('nth-child(2)')
  $image.filter(':nth-child(2)').mouseover(function(){
    $(this).find('span').stop().animate({opacity:1},$duration);
    $(this).find('strong').stop().animate({opacity:1, left:'0%'},$duration);
  })
  .mouseout(function(){
    $(this).find('span').stop().animate({opacity:0},$duration);
    $(this).find('strong').stop().animate({opacity:0, left:'-200%'},$duration);
  });

  $image.filter(':nth-child(3)').mouseover(function(){
    $(this).find('span').stop().animate({opacity:1},$duration);
    $(this).find('strong').stop().animate({opacity:1, bottom:0},$duration);
    $(this).find('img').stop().animate({opacity:1, top:'-40px'},$duration);
  })
  .mouseout(function(){
    $(this).find('span').stop().animate({opacity:0},$duration);
    $(this).find('strong').stop().animate({opacity:1, bottom:'-80px'},$duration);
    $(this).find('img').stop().animate({top:'-0px'},$duration);
    });
  });










/*
$(function(){
  var $duration = 300,
      $image = $('#images p');

  $image.filter(':nth-child(1)').mouseover(function(){
    $(this).find('span, strong').stop().animate({opacity:1}, $duration);
  })
  .mouseout(function(){
    $(this).find('span, strong').stop().animate({opacity:0}, $duration);
  });

// 두번째이미지
  $image.filter(':nth-child(2)').mouseover(function(){
    $(this).find('span').stop().animate({opacity:1}, $duration);
    $(this).find('strong').stop().animate({opacity:1, left:'0%'}, $duration);
  })
  .mouseout(function(){
    $(this).find('span').stop().animate({opacity:0}, $duration);
    $(this).find('strong').stop().animate({opacity:0, left:'-200%'}, $duration);
  });

// 세번째이미지
  $image.filter(':nth-child(3)').mouseover(function(){
    $(this).find('span, strong').stop().animate({opacity:1, bottom:0}, $duration);
    $(this).find('img').stop().animate({top:'-40px'}, $duration);
  })
  .mouseout(function(){
    $(this).find('span, strong').stop().animate({opacity:0, bottom:'-40px'}, $duration);
    $(this).find('img').stop().animate({top:'0px'}, $duration);
  });

  //accordion
  $('.tit').click(function(){
    $(this).filter('.content').toggleClass('open');
  });
});
*/
