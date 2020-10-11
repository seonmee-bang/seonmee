//연습
$(function(){
  var $aside = $('aside'),
      $button = $aside.find('button'),
      $duration = 300;

      console.log($button.find('img').attr('src'));
  $button.click(function(){
    $aside.toggleClass('open');
    if($aside.hasClass('open')){
      //$aside.stop().animate({left:'0px'},$duration);
      $button.find('img').attr('src','img/btn_close.png')
    }else{
      //$aside.stop().animate({left:'-350px'},$duration);
      $button.find('img').attr('src','img/btn_open.png')
    }
  });
});


/*
$(function(){
  var $aside = $('aside'),
      $button = $aside.find('button'),
      $duration = 300;
      //선택자.addClass('추가할클래스명A 추가할클래스명b'); 선택자.removeClass('지울클래스'); 선택자.taggleClass('추가/삭제할클래스명');
      //선택자.hasClass('클래스명') 조건문에서만 사용. a요소에 b라는 클래스 있으면  ture, 없으면 false

      //속성변경하기, 속성의 값을 반환하기
      //선택자.attr('src') => a라는 요소의 b라는 속성의 값을 변수명c에 저장.
      //a.attr('b','c') => a라는 요소에 b라는 속성의 값을 c로 변경
      $button.click(function(){
        $aside.toggleClass('open');
        //$aside.stop().animate({left:'0px'}, $duration);
        if($aside.hasClass('open')){
          $aside.stop().animate({left:'-70px'},$duration);
          $button.find('img').attr('src','img/btn_close.png');
        }else{
          $aside.stop().animate({left:'-350px'},$duration);
          $button.find('img').attr('src','img/btn_open.png');
        }
      });
});
*/
