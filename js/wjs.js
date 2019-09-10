/**
 * Created by 123 on 2019/7/20.
 */
$(function () {
    var items=$(".carousel-inner .item");
    $(window).on("resize",function () {
        var width=$(window).width();
        if(width>=768){
    $(items).each(function (index,value) {
        var item=$(this);
        var imgSrc=item.data("largeImg");
        item.html($('<a href="javascript:;" class="pcImg hidden-xs" ></a>').css("backgroundImage","url('"+imgSrc+"')"));
    });
        }else {
            $(items).each(function (index,value) {
                var item=$(this);
                var imgSrc=item.data("smallImg");
item.html('  <a href="javascript:;" class="mobileImg hidden-md hidden-sm hidden-lg"  > <img ' +
    'src="'+imgSrc+'" alt="..."> </a>');
            });
        }
    }).trigger("resize");
 var startX,endX;
 var carousel_inner=$(".carousel-inner")[0];
 var carousel=$(".carousel");
 carousel_inner.addEventListener("touchstart",function (e) {
   startX=e.targetTouches[0].clientX;
 });
 carousel_inner.addEventListener("touchend",function (e) {
        endX=e.changedTouches[0].clientX;
        if(endX-startX>0){
       carousel.carousel('prev');
        }else if(endX-startX<0){
            carousel.carousel('next');
        }
    })

    var ul=$(".wjs_product .nav-tabs");
 var li=ul.find("li");
 var totalWidth=0;
 li.each(function (index,value) {
     totalWidth=totalWidth+$(this).outerWidth();

 });
ul.width(800);
    var myScroll = new IScroll('#wrapper',{
        scrollX:true,scrollY:false
    });

});