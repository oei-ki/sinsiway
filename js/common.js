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

  const widthNum = 345; //slide li 개별 너비, ul.column의 너비를 계산할 수 있다
  const caInner = $("#carousel-inner");
  let liLeng = $("#carousel-inner ul.column li").length;


  $("#carousel-inner ul.column").css("width", widthNum*liLeng);

  $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
  caInner.css("margin-left", -widthNum)

  function initialFunc(init){
    caInner.css("margin-left", -widthNum)
    if(init == "prev"){
      $("#carousel-inner ul.column li:last").prependTo("#carousel-inner ul.column")
    }else{
      $("#carousel-inner ul.column li:first").appendTo("#carousel-inner ul.column")
    }
  }

  initialFunc("prev");

  function actionBtn(el){
    el.click(function(){
      let caInMarginLeft = parseInt(caInner.css("margin-left"));
      let isAni = caInner.is(":animated");
      if(!isAni){
        if(el.attr("id") === "carousel-prev"){
          caInner.animate({marginLeft: caInMarginLeft + widthNum },"slow","swing",function(){
            initialFunc("prev")
          });
        }else if(el.attr("id") === "carousel-next"){
          caInner.animate({marginLeft: caInMarginLeft - widthNum },"slow","swing",function(){
            initialFunc("next")
          });
        }
      }
    })
  }

$(".btn").each(function(){
  actionBtn($(this))
})

//auto slide  setInterval
let timerId = null;
let auto = function(){  //auto라는 함수생성
  timerId = setInterval(function(){
    $("#carousel-next").trigger("click");
  },3000)
}

auto();

});
