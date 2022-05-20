$(function(){
  let currentHref = splitfunc($(location));
  $("#lnb a").each(function(){
    if(currentHref === splitfunc(this)){
      $(this).addClass("on")
    }
  });
  function splitfunc(el){
    let thisElem = $(el).attr("href").split("/");/* el.attr("href").split("/") 가능 대신 함수부를떄 $(this)*/
    thisElem = thisElem[thisElem.length-1].split(".")[0];
    return thisElem; /*지역변수라서 바깥으로 안나가기 때문에 반환을 해줘야함 return*/
  }

  $(".accordion dd:not(:first)").css({
    "display":"none",
    "height":0
  })
  $(".accordion dl dt").click(function(){
    let isAni = $(".accordion dd").is(":animated");
    let thisElem = $(this);
    console.log($(thisElem));
    if($("+dd",thisElem).css("display") == "none"){
        $(".accordion dd").each(function(){
          if(parseInt($(this).css("height")) == 300){ //높이값으로
            $(this).animate({height:0},300,function(){
              $(this).css("display","none")
            });
          }
        });
  $("+dd",this).css("display","block").animate({height:300})
}
});


});
