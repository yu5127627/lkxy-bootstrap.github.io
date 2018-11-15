$(function () {
    $(window).on('resize', resize);

    // 1.广告轮播图自适应切换
    resize();

    function resize() {
        // 1.获取窗口的宽度
        let clientW = $(window).width();
        // console.log(clientW);

        // 2.设置临界值
        let isShowBigImgs = clientW >= 800;

        // 3.获取所有的 item
        let $allItems = $('.carousel-inner>.item');
        // console.log($allItems);

        // 4.遍历
        $allItems.each(function (index, item) {
            // 4.1 取出图片的路径
            let src = isShowBigImgs ? $(item).data('lg-img') : $(item).data('sm-img');
            let imgUrl = 'url("' + src + '")';

            // 4.2 设置背景
            $(item).css({backgroundImage: imgUrl});

            // 4.3 设置小图
            if (!isShowBigImgs) {
                let $img = '<img src="' + src + '">';
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }
        })
    }

    // 2.加载底部提示工具
    $('[data-toggle="tooltip"]').tooltip();

    // 3.导航处理
    let navLis=$('.navbar-nav>li');
    // console.log(navLis);

    // 3.1关于我们
    $(navLis[0]).on('click',lkAbout);
    function lkAbout () {

        $('html,body').animate({
            scrollTop:$('#lk_about').offset().top
        },1000)
    }

    // 3.2课程介绍
    $(navLis[1]).click(function () {
        $(this).addClass('space');
        $(this).siblings().removeClass('space');
        $('html,body').animate({
            scrollTop:$('#lk_product').offset().top
        },1000)
    });

    // 3.3热门课程
    $(navLis[2]).click(function () {
        $(this).addClass('space');
        $(this).siblings().removeClass('space');
        $('html,body').animate({
            scrollTop:$('#lk_hot').offset().top
        },1000)
    });

    // 3.4名师课程
    $(navLis[3]).click(function () {
        $(this).addClass('space');
        $(this).siblings().removeClass('space');
        $('html,body').animate({
            scrollTop:$('#lk_hot').offset().top
        },1000)
    });
    // 3.5课堂互动
    $(navLis[4]).click(function () {
        $(this).addClass('space');
        $(this).siblings().removeClass('space');
        $('html,body').animate({
            scrollTop:$('#lk_footer').offset().top
        },1000)
    });
    // 3.3 联系我们
    $(navLis[5]).click(function () {
        $(this).addClass('space');
        $(this).siblings().removeClass('space');
        $('html,body').animate({
            scrollTop:$('#lk_footer').offset().top
        },1000)
    })

});