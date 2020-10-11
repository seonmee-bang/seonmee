  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });


var x=175;
$(".prev").click(function(){
  x=x+50;
  $(".ball").css({"left" : x});
});

$(".next").click(function(){
  x=x-50;
  $(".ball").css({"left" : x});

});
// 보이고,안보이고
$("#BtnMove1").click(function(){
  $("#ObjMove").css({"top" : 30});
});
$("#BtnMove2").click(function(){
  $("#ObjMove").css({"top" : -1000});
});

$(".controller li").click(function(){
  // console.log("click");
  // $(".controller li").addClass("on");
  $(".controller li").removeClass("on");
  $(this).addClass("on");
});
