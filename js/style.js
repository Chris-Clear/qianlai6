/**
 * Created by Administrator on 2016/4/18.
 */
/**
 * Created by Administrator on 2015/12/29.
 */
// menu 菜单高度自适应
function menuAuto() {
    var oMenu = $(".left a li");
    oMenu.each(function() {
        var H = $(this).siblings('.sub_nav').height('auto').height();
        if (!$(this).hasClass('active')) {
            $(this).siblings('.sub_nav').height(0);
            $(this).siblings('.sub_nav').css('height',0);
        } else {
            $(this).siblings('.sub_nav').height(H);
        }
        $(this).bind('mousedown', function() {
            oMenu.removeClass('active').siblings('.sub_nav').height(0);
            $(this).addClass('active').siblings('.sub_nav').height(H);
        });
    });
};
menuAuto();
//返回顶部开始
$(window).scroll(function(){
    if($(this).scrollTop()>10){
        var nav = document.getElementById ('fhdb');
        nav.style.display = 'block';

    }else{
        var nav = document.getElementById ('fhdb');
        nav.style.display = 'none';
    }
});
$(function(){
    $('.fhdb').click(function(){$('html,body').animate({scrollTop: '0px'}, 500);});
});
//返回顶部结束
$(function(){
    $(".njasd ul li").click(function(){
        $(this).addClass("dbsad").siblings().removeClass("dbsad");
        $(this).find(".kqiwe").show();
        $(this).siblings().find(".kqiwe").hide()
    })
    $("#fenl").click(function(){
        $("#dbfl").toggle()
    })
});

$(function(){
	var flag = 1;
    $('#moreBtn').on('click',function(){
        if(flag == 1 ){
            $('.Tlist').css({'height':'auto'});
            $('#moreBtn img').attr({'src':'images/fx-sj.png'});
            $('.ZheZ').addClass('theme-popover-mask');
            flag = 0;
        }else{
            $('.Tlist').css({'height':'25'});
            $('#moreBtn img').attr({'src':'images/fx-sjd.png'});
            $('.ZheZ').removeClass('theme-popover-mask');
            flag = 1;
        }
    })
})


