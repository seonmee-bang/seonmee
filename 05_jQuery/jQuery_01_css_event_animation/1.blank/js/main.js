/*
$(function(){
  $('h1').css('color','red');//css속성 하느를 변경
  $('#typo .inner').css('text-decoration','underline');
  $('#typo .inner').css('border-bottom','5px solid red');
  $('#typo .inner').css('transform','rotate(45deg)');
  $('#typo .inner').css('opacity',0.5);
});
*/

/* 축약1단계
$(function(){
$('#typo .inner').css({
  'text-decoration':'underline',
  'border-bottom':'5px solid red',
  'transform':'rotate(45deg)',
  'opacity':0.5
});
});
*/

//축약2단계
/*
$(function(){
$('#typo .inner').css({
  textDdecoration:'underline',
  borderBottom:'5px solid red',
  transform:'rotate(45deg)',
  opacity:0.5
});
});
*/
$(function(){
  //실행지점 제어 -event종류 -mouseover마우스가 올라왔을 때
  //$('선택자').on('이벤트 종류', 힐일);
  //할일 = 임의함수 = function(){}
  /*$('#typo').on('mouseover', function(){
    $('#typo').css('background-color','green');
  });
  $('#typo').on('mouseout', function(){
    $('#typo').css('background-color','pink');
  });
  */
  //축약1---------------
  /*
  $('#typo').on('mouseover', function(){
    $('#typo').css('background-color','green');
  })
  .on('mouseout', function(){
    $('#typo').css('background-color','pink');
  });
  */
  //축약2---------------
  $('h1').css('color','red'); //css 속성 하나를 변경
  //h1:hover, #typo:hover {background-color:green;}

  $('#typo, h1').mouseover(function(){
    $(this).css('background-color','green');
  })
  .mouseout(function(){
    $(this).css('background-color','pink');
  });
});
