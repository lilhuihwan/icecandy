$(document).ready(function(){

    $('.left_cont>ul>li').each(function(index){
        $(this).click(function(){
            $(this).addClass('on').siblings().removeClass('on')
            $('.right_cont>ul>.r_iwrap0>img').eq(index).fadeIn(500).siblings().fadeOut(500);
            $('.right_cont>ul>.r_iwrap1>img').eq(index).fadeIn(500).siblings().fadeOut(500);
            $('.right_cont>ul>.r_iwrap2>img').eq(index).fadeIn(500).siblings().fadeOut(500);
            $('.right_cont>ul>.r_pwrap0>p').eq(index).fadeIn(500).siblings().fadeOut(500);
            $('.right_cont>ul>.r_pwrap1>p').eq(index).fadeIn(500).siblings().fadeOut(500);
            $('.right_cont>ul>.r_pwrap2>p').eq(index).fadeIn(500).siblings().fadeOut(500);
        })
    })

    topNum2 = 0;
    function topGraph (i){
        $('.top_bar0').css('width',''+i+'%')
      }



    $('.top_next').click(function(){
        topNum2++
        if(topNum2>2)
        {topNum2=0}
        $('.top_wrap'+topNum2+'').fadeIn().siblings().fadeOut();

        if(topNum2 != 0){
            $('.top_pro>span').eq(0).css('color','#000');
        }
        if(topNum2 != 2){
            $('.top_pro>span').eq(1).css('color','#000');
        }

        if(topNum2 == 0){
            $('.top_pro>span').eq(0).css('color','#ea4697');
            topGraph(33.3);
        }
        if(topNum2 == 1){
            topGraph(66.6)
        }
        if(topNum2 == 2){
            $('.top_pro>span').eq(1).css('color','#ea4697');
            topGraph(100);
        }
    })


    $('.top_prev').click(function(){
        topNum2--
        if(topNum2<0)
        {topNum2=2}
        $('.top_wrap'+topNum2+'').fadeIn().siblings().fadeOut();


        if(topNum2 != 0){
            $('.top_pro>span').eq(0).css('color','#000');
        }
        if(topNum2 != 2){
            $('.top_pro>span').eq(1).css('color','#000');
        }


        if(topNum2==0){
            $('.top_pro>span').eq(0).css('color','#ea4697') ;
            topGraph(33.3);
        }

        if(topNum2==1){
            topGraph(66.6);
        }
    
        if(topNum2==2){
            $('.top_pro>span').eq(1).css('color','#ea4697');
            topGraph(100);
        }
    })


    
    function autoPlay(){
        $('.top_next').trigger('click');
    }
    auto = setInterval(autoPlay,3000)

    let stopNum = 0
    $('.top_stop').click(function(){
        stopNum++
        if(stopNum%2==1){
            clearInterval(auto)
            $('.top_stop>img').attr('src','img/top_play.png');
        }else{
            auto = setInterval(autoPlay,3000)
            $('.top_stop>img').attr('src','img/top_stop.png');
        }
    })




    $('.rowLeft>.icoBox0').click(function(){
            $(this).toggleClass('active');
            if($('.icoBox0').hasClass('active')){
                $(this).find('p').css('z-index','999');
                $(this).find('ul').css('z-index','995');
                $(this).find('.memBox').css('opacity','1');
                $(this).find('.memBox').addClass('on');
                $(this).find('.memBox>li').fadeIn(500);
                $(this).siblings('li').css('opacity','0');
            }else{
                $(this).find('p').css('z-index','99');
                $(this).find('ul').css('z-index','96');
                $(this).find('.memBox').css('opacity','0');
                $(this).find('.memBox>li').fadeOut(300);
                $(this).siblings('li').css('opacity','1');
                $(this).find('.memBox').removeClass('on');

            }
    })








    $('.rowRight>.icoBox1').click(function(){
        $(this).toggleClass('active');
        if($('.icoBox1').hasClass('active')){
            $(this).find('p').css('z-index','999');
            $(this).find('ul').css('z-index','995');
            $(this).find('.memBox').css('opacity','1');
            $(this).find('.memBox').addClass('on');
            $(this).find('.memBox>li').fadeIn(500);
            $(this).siblings('li').css('opacity','0');       
        }else{
            $(this).find('p').css('z-index','99');
            $(this).find('ul').css('z-index','96');
            $(this).find('.memBox').css('opacity','0');
            $(this).find('.memBox').removeClass('on');
            $(this).find('.memBox>li').fadeOut(300);
            $(this).siblings('li').css('opacity','1');

        }
    })

    $('.rowLeft>.icoBox2').click(function(){
        $(this).toggleClass('active');
        if($('.icoBox2').hasClass('active')){
            $(this).find('p').css('z-index','999');
            $(this).find('ul').css('z-index','995');
            $(this).find('.memBox').css('opacity','1');
            $(this).find('.memBox').addClass('on');
            $(this).find('.memBox>li').fadeIn(500);
            $(this).siblings('li').css('opacity','0');
            
        }else{
            $(this).find('p').css('z-index','99');
            $(this).find('ul').css('z-index','96');
            $(this).find('.memBox').css('opacity','0');
            $(this).find('.memBox').removeClass('on');
            $(this).find('.memBox>li').fadeOut(300);
            $(this).siblings('li').css('opacity','1');
        }
    })

    $('.rowRight>.icoBox3').click(function(){
        $(this).toggleClass('active');
        if($('.icoBox3').hasClass('active')){
            $(this).find('p').css('z-index','999');
            $(this).find('ul').css('z-index','995');
            $(this).find('.memBox').css('opacity','1');
            $(this).find('.memBox').addClass('on');
            $(this).find('.memBox>li').fadeIn(500);
            $(this).siblings('li').css('opacity','0')
            
        }else{
            $(this).find('p').css('z-index','99');
            $(this).find('ul').css('z-index','96');
            $(this).find('.memBox').css('opacity','0');
            $(this).find('.memBox').removeClass('on');
            $(this).find('.memBox>li').fadeOut(300);
            $(this).siblings('li').css('opacity','1');
        }
    })

    let scrollTop = $(window).scrollTop()
    let worksTop = $('#top_works').offset().top-100
    let companyTop = $('.company').offset().top
    let contactTop = $('.contact').offset().top



    $('.top_btn').click(function(){
        $('html').animate({scrollTop : 0},300)
    })


    $('.nav-home').click(function(){
        $('html').animate({scrollTop : 0},500)
      })
      $('.nav-works').click(function(){
        $('html').animate({scrollTop : worksTop},500)
      })
      $('.nav-company').click(function(){
        $('html').animate({scrollTop : companyTop},500)
      })
      $('.nav-contact').click(function(){
        $('html').animate({scrollTop : contactTop},500)
      })





    //   ------------------------------member---------------------------

    if($(window).width()>=1040){
    

    $('.member>.inner>ul>li>p').click(function(){
        if($(this).children('.moreBtn').hasClass('on')){
            $(this).children('.moreBtn').removeClass('on');
        }else{
            $(this).children('.moreBtn').addClass('on');
        }
    })



        // list0

    //  p 눌렀을 때
    $('.mem_p0').click(function(){
        if($('.rowLeft0').hasClass('on')){
            $('.mem_list0').removeClass('on');
            $('.rowLeft0').removeClass('on');
            auto1 = setTimeout(function(){
                $('.mem_p0').animate({right : 0},500);
                $('.mem_p0').parents('.icoBox').siblings().css('opacity','1');
            },800);


            $('.mem_p0').parents('.icoBox').siblings().css('pointer-events','none');
            none0 = setTimeout(function(){
            $('.mem_p0').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);


            $('.mem_p0').css('pointer-events','none');
            none1 = setTimeout(function(){
                $('.mem_p0').css('pointer-events','auto');
            },1000);

            none2 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },800);


        }else{
            $('.mem_p0').animate({right : -616},500);

            auto0 = setTimeout(function(){
                $('.mem_list0').addClass('on');
            },500);

            $('.rowLeft0').addClass('on');
            $('.mem_p0').css('z-index','999');
            $('.mem_p0').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p0').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap0').show();


            $('.mem_p0').css('pointer-events','none');
            none3 = setTimeout(function(){
                $('.mem_p0').css('pointer-events','auto');
            },1000);


            $('.mem_box0').fadeIn();
        }
    })



    //list1


    //  p 눌렀을 때
    $('.mem_p1').click(function(){
        if($('.rowLeft0').hasClass('on')){
            $('.rowLeft0').removeClass('on');
            $('.mem_list1').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p1').animate({right : 0},500);
                $('.mem_p1').parents('.icoBox').siblings().css('opacity','1');
            },800);

            $('.mem_p1').parents('.icoBox').siblings().css('pointer-events','none');
            none4 = setTimeout(function(){
            $('.mem_p1').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);


            $('.mem_p1').css('pointer-events','none');
            none5 = setTimeout(function(){
                $('.mem_p1').css('pointer-events','auto');
            },1000);


            none6 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },900);


        }else{
            $('.rowLeft0').addClass('on');
            $('.mem_p1').animate({right : -308},500);
            auto7 = setTimeout(function(){
                $('.mem_list1').addClass('on');
            },500);
            $('.mem_p1').css('z-index','999');
            $('.mem_p1').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p1').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap1').show();


            $('.mem_p1').css('pointer-events','none');
            none7 = setTimeout(function(){
                $('.mem_p1').css('pointer-events','auto');
            },1000);

            $('.mem_box0').fadeIn();

        }
    })




    //list2

    //  p 눌렀을 때
    $('.mem_p2').click(function(){
        if($('.rowLeft0').hasClass('on')){
            $('.rowLeft0').removeClass('on');
            $('.mem_list2').removeClass('on');
            auto8 = setTimeout(function(){
                $('.mem_p2').parents('.icoBox').siblings().css('opacity','1');
            },500);

            $('.mem_p2').parents('.icoBox').siblings().css('pointer-events','none');
            none8 = setTimeout(function(){
            $('.mem_p2').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p2').css('pointer-events','none');
            none9 = setTimeout(function(){
                $('.mem_p2').css('pointer-events','auto');
            },800);

            none10 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },500);


        }else{
            $('.rowLeft0').addClass('on');

            auto7 = setTimeout(function(){
                $('.mem_list2').addClass('on');
            },300);
            $('.mem_p2').css('z-index','999');
            $('.mem_p2').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p2').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap2').show();
            $('.mem_list2').scrollLeft(140);

            $('.mem_p2').css('pointer-events','none');
            none11 = setTimeout(function(){
                $('.mem_p2').css('pointer-events','auto');
            },800);

            
            $('.mem_list2>div').css('pointer-events','none');
            none12 = setTimeout(function(){
                $('.mem_list2>div').css('pointer-events','auto');
            },800);

            $('.mem_box0').fadeIn(500);

        }
    })


    //list3
      //  p 눌렀을 때
        $('.mem_p3').click(function(){
            if($('.rowRight1').hasClass('on')){
                $('.rowRight1').removeClass('on');
                $('.mem_list3').removeClass('on');
                auto5 = setTimeout(function(){
                    $('.mem_p3').parents('.icoBox').siblings().css('opacity','1');
                },500);


                $('.mem_p3').parents('.icoBox').siblings().css('pointer-events','none');
                none13 = setTimeout(function(){
                $('.mem_p3').parents('.icoBox').siblings().css('pointer-events','auto');
                },800);
    
    
                $('.mem_p3').css('pointer-events','none');
                none14 = setTimeout(function(){
                    $('.mem_p3').css('pointer-events','auto');
                },800);
    

                none15 = setTimeout(function(){
                    $('.mem_box1').hide();
                },1000);


            }else{
                $('.rowRight1').addClass('on');
                auto2 = setTimeout(function(){
                    $('.mem_list3').addClass('on');
                },300);
                $('.mem_p3').css('z-index','999');
                $('.mem_p3').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p3').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap3').show();


                $('.mem_p3').css('pointer-events','none');
                none16 = setTimeout(function(){
                    $('.mem_p3').css('pointer-events','auto');
                },800);
    
                
                $('.mem_list3>div').css('pointer-events','none');
                none17 = setTimeout(function(){
                    $('.mem_list3>div').css('pointer-events','auto');
                },800);


                $('.mem_box1').show(500);


            }
        })


        //list4
        //  p 눌렀을 때

        $('.mem_p4').click(function(){
            if($('.rowRight1').hasClass('on')){
                $('.rowRight1').removeClass('on');
                $('.mem_list4').removeClass('on');
                auto3 = setTimeout(function(){
                    $('.mem_p4').animate({right : 0},500);
                    $('.mem_p4').parents('.icoBox').siblings().css('opacity','1');
                },800);



                $('.mem_p4').parents('.icoBox').siblings().css('pointer-events','none');
                none18 = setTimeout(function(){
                $('.mem_p4').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    
    
                $('.mem_p4').css('pointer-events','none');
                none19 = setTimeout(function(){
                    $('.mem_p4').css('pointer-events','auto');
                },1000);
    


                none20 = setTimeout(function(){
                    $('.mem_box1').fadeOut();
                },700);

                
            }else{
                $('.rowRight1').addClass('on');
                $('.mem_p4').animate({right : 308},500);
                auto2 = setTimeout(function(){
                    $('.mem_list4').addClass('on');
                },500);
                $('.mem_p4').css('z-index','999');
                $('.mem_p4').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p4').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap4').show();



                $('.mem_p4').css('pointer-events','none');
                none21 = setTimeout(function(){
                    $('.mem_p4').css('pointer-events','auto');
                },1000);

                $('.mem_box1').fadeIn(600);
            }
        })



        //list5

        $('.mem_p5').click(function(){
            if($('.rowRight1').hasClass('on')){
                $('.rowRight1').removeClass('on');
                $('.mem_list5').removeClass('on');
                auto4 = setTimeout(function(){
                    $('.mem_p5').animate({right : 0},500);
                    $('.mem_p5').parents('.icoBox').siblings().css('opacity','1');
                },800);
    
                $('.mem_p5').parents('.icoBox').siblings().css('pointer-events','none');
                none22 = setTimeout(function(){
                $('.mem_p5').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    

    
                $('.mem_p5').css('pointer-events','none');
                none23 = setTimeout(function(){
                    $('.mem_p5').css('pointer-events','auto');
                },1000);
    
    
                none24 = setTimeout(function(){
                    $('.mem_box1').fadeOut();
                },500);
    
    
            }else{
                $('.rowRight1').addClass('on');
                $('.mem_p5').animate({right : 616},500);
                auto7 = setTimeout(function(){
                    $('.mem_list5').addClass('on');
                },500);
                $('.mem_p5').css('z-index','999');
                $('.mem_p5').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p5').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap5').show();
    
    
                $('.mem_p5').css('pointer-events','none');
                none25 = setTimeout(function(){
                    $('.mem_p5').css('pointer-events','auto');
                },1000);
    
                $('.mem_box1').fadeIn();
    
            }
        })

        // list6

        $('.mem_p6').click(function(){
            if($('.rowLeft1').hasClass('on')){
                $('.mem_list6').removeClass('on');
                $('.rowLeft1').removeClass('on');
                auto1 = setTimeout(function(){
                    $('.mem_p6').animate({right : 0},500);
                    $('.mem_p6').parents('.icoBox').siblings().css('opacity','1');
                },800);
    
    
                $('.mem_p6').parents('.icoBox').siblings().css('pointer-events','none');
                none26 = setTimeout(function(){
                $('.mem_p6').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    
    
                $('.mem_p6').css('pointer-events','none');
                none27 = setTimeout(function(){
                    $('.mem_p6').css('pointer-events','auto');
                },1000);

                none28 = setTimeout(function(){
                    $('.mem_box2').fadeOut();
                },1000);
    
    
            }else{
                $('.mem_p6').animate({right : -616},500);
                auto0 = setTimeout(function(){
                    $('.mem_list6').addClass('on');
                },800);
                $('.rowLeft1').addClass('on');
                $('.mem_p6').css('z-index','999');
                $('.mem_p6').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p6').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap6').show();
    
    
                $('.mem_p6').css('pointer-events','none');
                none29 = setTimeout(function(){
                    $('.mem_p6').css('pointer-events','auto');
                },1000);
    
    
                $('.mem_box2').fadeIn(1000);
            }
        })
    

    // list7


    //  p 눌렀을 때
    $('.mem_p7').click(function(){
        if($('.rowLeft1').hasClass('on')){
            $('.rowLeft1').removeClass('on');
            $('.mem_list7').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p7').animate({right : 0},500);
                $('.mem_p7').parents('.icoBox').siblings().css('opacity','1');
            },800);

            $('.mem_p7').parents('.icoBox').siblings().css('pointer-events','none');
            none30 = setTimeout(function(){
            $('.mem_p7').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);


            $('.mem_p7').css('pointer-events','none');
            none31 = setTimeout(function(){
                $('.mem_p7').css('pointer-events','auto');
            },1000);


            none32 = setTimeout(function(){
                $('.mem_box2').fadeOut();
            },900);


        }else{
            $('.rowLeft1').addClass('on');
            $('.mem_p7').animate({right : -308},500);
            auto7 = setTimeout(function(){
                $('.mem_list7').addClass('on');
            },500);
            $('.mem_p7').css('z-index','999');
            $('.mem_p7').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p7').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap7').show();


            $('.mem_p7').css('pointer-events','none');
            none33 = setTimeout(function(){
                $('.mem_p7').css('pointer-events','auto');
            },1000);

            $('.mem_box2').fadeIn();

        }
    })


    // list8

    $('.mem_p8').click(function(){
        if($('.rowLeft1').hasClass('on')){
            $('.rowLeft1').removeClass('on');
            $('.mem_list8').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p8').parents('.icoBox').siblings().css('opacity','1');
            },500);

            $('.mem_p8').parents('.icoBox').siblings().css('pointer-events','none');
            none34 = setTimeout(function(){
            $('.mem_p8').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p8').css('pointer-events','none');
            none35 = setTimeout(function(){
                $('.mem_p8').css('pointer-events','auto');
            },800);
            none36 = setTimeout(function(){
                $('.mem_box2').hide
            },500);


        }else{
            $('.rowLeft1').addClass('on');

            auto7 = setTimeout(function(){
                $('.mem_list8').addClass('on');
            },300);
            $('.mem_p8').css('z-index','999');
            $('.mem_p8').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p8').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap8').show();


            $('.mem_p8').css('pointer-events','none');
            none38 = setTimeout(function(){
                $('.mem_p8').css('pointer-events','auto');
            },800);

            $('.mem_box2').show();

        }
    })


    // list9

    $('.mem_p9').click(function(){
        if($('.rowRight2').hasClass('on')){
            $('.rowRight2').removeClass('on');
            $('.mem_list9').removeClass('on');
            auto5 = setTimeout(function(){
                $('.mem_p9').parents('.icoBox').siblings().css('opacity','1');
            },500);


            $('.mem_p9').parents('.icoBox').siblings().css('pointer-events','none');
            none39 = setTimeout(function(){
            $('.mem_p9').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p9').css('pointer-events','none');
            none40 = setTimeout(function(){
                $('.mem_p9').css('pointer-events','auto');
            },800);


            none41 = setTimeout(function(){
                $('.mem_box3').hide();
            },800);





        }else{
            $('.rowRight2').addClass('on');
            auto2 = setTimeout(function(){
                $('.mem_list9').addClass('on');
            },300);
            $('.mem_p9').css('z-index','999');
            $('.mem_p9').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p9').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap9').show();


            $('.mem_p9').css('pointer-events','none');
            none42 = setTimeout(function(){
                $('.mem_p9').css('pointer-events','auto');
            },800);

            
            $('.mem_list3>div').css('pointer-events','none');
            none43 = setTimeout(function(){
                $('.mem_list3>div').css('pointer-events','auto');
            },800);


            $('.mem_box3').show();
        }
    })
      //1040 해상도 종료
    }else{ 
        
    // 반응형 list0

    //  p 눌렀을 때
    $('.mem_p0').click(function(){
        if($('.rowLeft0').hasClass('on')){
            // $('.mem_list0').removeClass('on');
            $('.mem_list0').animate({left: 100+'%'},500);

            $('.rowLeft0').removeClass('on');
            auto1 = setTimeout(function(){
                $('.mem_p0').animate({right : 0},500);
                $('.mem_p0').parents('.icoBox').siblings().css('opacity','1');
            },800);
            $('.mem_p0').parents('.icoBox').siblings().css('pointer-events','none');
            none0 = setTimeout(function(){
            $('.mem_p0').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);
            $('.mem_p0').css('pointer-events','none');
            none1 = setTimeout(function(){
                $('.mem_p0').css('pointer-events','auto');
            },1000);
            none2 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },800);
        }else{
            $('.mem_p0').animate({right : -426 + '%'},500);
            auto0 = setTimeout(function(){
                // $('.mem_list0').addClass('on');
                $('.mem_list0').animate({left: 49.3+'%'},500);
            },500);
            $('.rowLeft0').addClass('on');
            $('.mem_p0').css('z-index','999');
            $('.mem_p0').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p0').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap0').show();


            $('.mem_p0').css('pointer-events','none');
            none3 = setTimeout(function(){
                $('.mem_p0').css('pointer-events','auto');
            },1000);


            $('.mem_box0').fadeIn();
        }
    })



    
    //반응형 list1


    //  p 눌렀을 때
    $('.mem_p1').click(function(){
        if($('.rowLeft0').hasClass('on')){
            $('.rowLeft0').removeClass('on');
            $('.mem_list1').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p1').animate({right : 0},500);
                $('.mem_p1').parents('.icoBox').siblings().css('opacity','1');
            },800);

            $('.mem_p1').parents('.icoBox').siblings().css('pointer-events','none');
            none4 = setTimeout(function(){
            $('.mem_p1').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);


            $('.mem_p1').css('pointer-events','none');
            none5 = setTimeout(function(){
                $('.mem_p1').css('pointer-events','auto');
            },1000);


            none6 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },900);


        }else{
            $('.rowLeft0').addClass('on');
            $('.mem_p1').animate({right : -213 + '%'},500);
            auto7 = setTimeout(function(){
                $('.mem_list1').addClass('on');
            },500);
            $('.mem_p1').css('z-index','999');
            $('.mem_p1').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p1').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap1').show();


            $('.mem_p1').css('pointer-events','none');
            none7 = setTimeout(function(){
                $('.mem_p1').css('pointer-events','auto');
            },1000);

            $('.mem_box0').fadeIn();

        }
    })

    
    //반응형 list2

    //  p 눌렀을 때
    $('.mem_p2').click(function(){
        if($('.rowLeft0').hasClass('on')){
            $('.rowLeft0').removeClass('on');
            $('.mem_list2').removeClass('on');
            auto8 = setTimeout(function(){
                $('.mem_p2').parents('.icoBox').siblings().css('opacity','1');
            },500);

            $('.mem_p2').parents('.icoBox').siblings().css('pointer-events','none');
            none8 = setTimeout(function(){
            $('.mem_p2').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p2').css('pointer-events','none');
            none9 = setTimeout(function(){
                $('.mem_p2').css('pointer-events','auto');
            },800);

            none10 = setTimeout(function(){
                $('.mem_box0').fadeOut();
            },500);


        }else{
            $('.rowLeft0').addClass('on');

            auto7 = setTimeout(function(){
                $('.mem_list2').addClass('on');
            },300);
            $('.mem_p2').css('z-index','999');
            $('.mem_p2').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p2').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap2').show();
            $('.mem_list2').scrollLeft(140);

            $('.mem_p2').css('pointer-events','none');
            none11 = setTimeout(function(){
                $('.mem_p2').css('pointer-events','auto');
            },800);

            
            $('.mem_list2>div').css('pointer-events','none');
            none12 = setTimeout(function(){
                $('.mem_list2>div').css('pointer-events','auto');
            },800);

            $('.mem_box0').fadeIn(500);

        }
    })


        //반응형 list3
      //  p 눌렀을 때
      $('.mem_p3').click(function(){
        if($('.rowRight1').hasClass('on')){
            $('.rowRight1').removeClass('on');
            $('.mem_list3').removeClass('on');
            auto5 = setTimeout(function(){
                $('.mem_p3').parents('.icoBox').siblings().css('opacity','1');
            },500);
            $('.mem_p3').parents('.icoBox').siblings().css('pointer-events','none');
            none13 = setTimeout(function(){
            $('.mem_p3').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);
            $('.mem_p3').css('pointer-events','none');
            none14 = setTimeout(function(){
                $('.mem_p3').css('pointer-events','auto');
            },800);
            none15 = setTimeout(function(){
                $('.mem_box1').hide();
            },1000);
        }else{
            $('.rowRight1').addClass('on');
            auto2 = setTimeout(function(){
                $('.mem_list3').addClass('on');
            },300);
            $('.mem_p3').css('z-index','999');
            $('.mem_p3').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p3').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap3').show();
            $('.mem_p3').css('pointer-events','none');
            none16 = setTimeout(function(){
                $('.mem_p3').css('pointer-events','auto');
            },800);
            $('.mem_list3>div').css('pointer-events','none');
            none17 = setTimeout(function(){
                $('.mem_list3>div').css('pointer-events','auto');
            },800);
            $('.mem_box1').show(500);


        }
    })


    
        //반응형 list4
        //  p 눌렀을 때

        $('.mem_p4').click(function(){
            if($('.rowRight1').hasClass('on')){
                $('.rowRight1').removeClass('on');
                $('.mem_list4').removeClass('on');
                auto3 = setTimeout(function(){
                    $('.mem_p4').animate({right : 0},500);
                    $('.mem_p4').parents('.icoBox').siblings().css('opacity','1');
                },800);



                $('.mem_p4').parents('.icoBox').siblings().css('pointer-events','none');
                none18 = setTimeout(function(){
                $('.mem_p4').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    
    
                $('.mem_p4').css('pointer-events','none');
                none19 = setTimeout(function(){
                    $('.mem_p4').css('pointer-events','auto');
                },1000);
    


                none20 = setTimeout(function(){
                    $('.mem_box1').fadeOut();
                },700);

                
            }else{
                $('.rowRight1').addClass('on');
                $('.mem_p4').animate({right : 213 + '%'},500);
                auto2 = setTimeout(function(){
                    $('.mem_list4').addClass('on');
                },500);
                $('.mem_p4').css('z-index','999');
                $('.mem_p4').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p4').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap4').show();



                $('.mem_p4').css('pointer-events','none');
                none21 = setTimeout(function(){
                    $('.mem_p4').css('pointer-events','auto');
                },1000);

                $('.mem_box1').fadeIn(600);
            }
        })


        //반응형 list5

        $('.mem_p5').click(function(){
            if($('.rowRight1').hasClass('on')){
                $('.rowRight1').removeClass('on');
                $('.mem_list5').removeClass('on');
                auto4 = setTimeout(function(){
                    $('.mem_p5').animate({right : 0},500);
                    $('.mem_p5').parents('.icoBox').siblings().css('opacity','1');
                },800);
    
                $('.mem_p5').parents('.icoBox').siblings().css('pointer-events','none');
                none22 = setTimeout(function(){
                $('.mem_p5').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    

    
                $('.mem_p5').css('pointer-events','none');
                none23 = setTimeout(function(){
                    $('.mem_p5').css('pointer-events','auto');
                },1000);
    
    
                none24 = setTimeout(function(){
                    $('.mem_box1').fadeOut();
                },500);
    
    
            }else{
                $('.rowRight1').addClass('on');
                $('.mem_p5').animate({right : 425+'%'},500);
                auto7 = setTimeout(function(){
                    $('.mem_list5').addClass('on');
                },500);
                $('.mem_p5').css('z-index','999');
                $('.mem_p5').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p5').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap5').show();
    
    
                $('.mem_p5').css('pointer-events','none');
                none25 = setTimeout(function(){
                    $('.mem_p5').css('pointer-events','auto');
                },1000);
    
                $('.mem_box1').fadeIn();
    
            }
        })
        

        //반응형 list6

        $('.mem_p6').click(function(){
            if($('.rowLeft1').hasClass('on')){
                $('.mem_list6').removeClass('on');
                $('.rowLeft1').removeClass('on');
                auto1 = setTimeout(function(){
                    $('.mem_p6').animate({right : 0},500);
                    $('.mem_p6').parents('.icoBox').siblings().css('opacity','1');
                },800);
    
    
                $('.mem_p6').parents('.icoBox').siblings().css('pointer-events','none');
                none26 = setTimeout(function(){
                $('.mem_p6').parents('.icoBox').siblings().css('pointer-events','auto');
                },1500);
    
    
                $('.mem_p6').css('pointer-events','none');
                none27 = setTimeout(function(){
                    $('.mem_p6').css('pointer-events','auto');
                },1000);

                none28 = setTimeout(function(){
                    $('.mem_box2').fadeOut();
                },1000);
    
    
            }else{
                $('.mem_p6').animate({right : -425 + '%'},500);
                auto0 = setTimeout(function(){
                    $('.mem_list6').addClass('on');
                },800);
                $('.rowLeft1').addClass('on');
                $('.mem_p6').css('z-index','999');
                $('.mem_p6').parent('li').siblings('.icoBox').find('p').css('z-index','1');
                $('.mem_p6').parents('.icoBox').siblings().css('opacity','0');
                $('.mem_wrap6').show();
    
    
                $('.mem_p6').css('pointer-events','none');
                none29 = setTimeout(function(){
                    $('.mem_p6').css('pointer-events','auto');
                },1000);
    
    
                $('.mem_box2').fadeIn(1000);
            }
        })


    //반응형 list7


    //  p 눌렀을 때
    $('.mem_p7').click(function(){
        if($('.rowLeft1').hasClass('on')){
            $('.rowLeft1').removeClass('on');
            $('.mem_list7').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p7').animate({right : 0},500);
                $('.mem_p7').parents('.icoBox').siblings().css('opacity','1');
            },800);

            $('.mem_p7').parents('.icoBox').siblings().css('pointer-events','none');
            none30 = setTimeout(function(){
            $('.mem_p7').parents('.icoBox').siblings().css('pointer-events','auto');
            },1500);


            $('.mem_p7').css('pointer-events','none');
            none31 = setTimeout(function(){
                $('.mem_p7').css('pointer-events','auto');
            },1000);


            none32 = setTimeout(function(){
                $('.mem_box2').fadeOut();
            },900);


        }else{
            $('.rowLeft1').addClass('on');
            $('.mem_p7').animate({right : -213 + '%'},500);
            auto7 = setTimeout(function(){
                $('.mem_list7').addClass('on');
            },500);
            $('.mem_p7').css('z-index','999');
            $('.mem_p7').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p7').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap7').show();


            $('.mem_p7').css('pointer-events','none');
            none33 = setTimeout(function(){
                $('.mem_p7').css('pointer-events','auto');
            },1000);

            $('.mem_box2').fadeIn();

        }
    })

    //반응형 list8

    $('.mem_p8').click(function(){
        if($('.rowLeft1').hasClass('on')){
            $('.rowLeft1').removeClass('on');
            $('.mem_list8').removeClass('on');
            auto4 = setTimeout(function(){
                $('.mem_p8').parents('.icoBox').siblings().css('opacity','1');
            },500);

            $('.mem_p8').parents('.icoBox').siblings().css('pointer-events','none');
            none34 = setTimeout(function(){
            $('.mem_p8').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p8').css('pointer-events','none');
            none35 = setTimeout(function(){
                $('.mem_p8').css('pointer-events','auto');
            },800);
            none36 = setTimeout(function(){
                $('.mem_box2').hide
            },500);


        }else{
            $('.rowLeft1').addClass('on');

            auto7 = setTimeout(function(){
                $('.mem_list8').addClass('on');
            },300);
            $('.mem_p8').css('z-index','999');
            $('.mem_p8').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p8').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap8').show();


            $('.mem_p8').css('pointer-events','none');
            none38 = setTimeout(function(){
                $('.mem_p8').css('pointer-events','auto');
            },800);

            $('.mem_box2').show();

        }
    })

    // list9

    $('.mem_p9').click(function(){
        if($('.rowRight2').hasClass('on')){
            $('.rowRight2').removeClass('on');
            $('.mem_list9').removeClass('on');
            auto5 = setTimeout(function(){
                $('.mem_p9').parents('.icoBox').siblings().css('opacity','1');
            },500);


            $('.mem_p9').parents('.icoBox').siblings().css('pointer-events','none');
            none39 = setTimeout(function(){
            $('.mem_p9').parents('.icoBox').siblings().css('pointer-events','auto');
            },800);


            $('.mem_p9').css('pointer-events','none');
            none40 = setTimeout(function(){
                $('.mem_p9').css('pointer-events','auto');
            },800);


            none41 = setTimeout(function(){
                $('.mem_box3').hide();
            },800);
            
        }else{
            $('.rowRight2').addClass('on');
            auto2 = setTimeout(function(){
                $('.mem_list9').addClass('on');
            },300);
            $('.mem_p9').css('z-index','999');
            $('.mem_p9').parent('li').siblings('.icoBox').find('p').css('z-index','1');
            $('.mem_p9').parents('.icoBox').siblings().css('opacity','0');
            $('.mem_wrap9').show();


            $('.mem_p9').css('pointer-events','none');
            none42 = setTimeout(function(){
                $('.mem_p9').css('pointer-events','auto');
            },800);

            
            $('.mem_list3>div').css('pointer-events','none');
            none43 = setTimeout(function(){
                $('.mem_list3>div').css('pointer-events','auto');
            },800);


            $('.mem_box3').show();
        }
    })




    }   //종료               
    //----------------------------------------------- 희환 -----------------------------------------------






    $(".tab_title li").click(function() {
        var idx = $(this).index();
        $(".tab_title li").removeClass("on");
        $(".tab_title li").eq(idx).addClass("on");
        $(".tab_cont > div").hide();
        $(".tab_cont > div").eq(idx).show();
    })

    // --------------------------------------------- 한솔 ----------------------------------------------------
})

$(document).ready(function(){
    let swiperSlide;
    $(".mySwiper > div > div").click(function() {
        const idx = $(this).index();
        $(".mySwiper > div > div").removeClass('on');
        $(".mySwiper > div > div").eq(idx).addClass('on');
        $(".slide01").removeClass('on');
        $(".slide01").eq(idx).addClass('on');

        swiperSlide.forEach(function(swiperItem){
            swiperItem.destroy();
        });
        createSlide();
    });

    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 25,
        slidesPerView : '5',
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".T1",
          prevEl: ".T2",
        },
      });
  
    function createSlide(){
        swiperSlide = new Swiper(".detail", {
            loop:true,
            slidesPerView : '1',
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".A1",
                prevEl: ".A2",
            },
        });
    };
    createSlide();
})

$(document).ready(function(){
    let swiperSlide_ex;
    $(".another > div > div").click(function() {
        const idx2 = $(this).index();
        $(".another > div > div").removeClass('on');
        $(".another > div > div").eq(idx2).addClass('on');
        $(".slide02").removeClass('on');
        $(".slide02").eq(idx2).addClass('on');

        swiperSlide_ex.forEach(function(swiperItem_ex){
            swiperItem_ex.destroy();
        });
        createSlide_ex();
    });

    const swiper1 = new Swiper(".another", {
        spaceBetween:25,
        slidesPerView : '5',
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".T3",
          prevEl: ".T4",
        },
      });
  
    function createSlide_ex(){
        swiperSlide_ex = new Swiper(".detail-ano", {
            loop:true,
            spaceBetween:35,
            slidesPerView : '1',
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".A3",
                prevEl: ".A4",
            },
        });
    };
    createSlide_ex();
})

$(document).ready(function(){
    let swiperSlide_las;
    $(".last > div > div").click(function() {
        const idx3 = $(this).index();
        $(".last > div > div").removeClass('on');
        $(".last > div > div").eq(idx3).addClass('on');
        $(".slide03").removeClass('on');
        $(".slide03").eq(idx3).addClass('on');

        swiperSlide_las.forEach(function(swiperItem_las){
            swiperItem_las.destroy();
        });
        createSlide_las();
    });

    const swiper2 = new Swiper(".last", {
        spaceBetween:25,
        slidesPerView : '5',
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".T5",
          prevEl: ".T6",
        },
      });
  
    function createSlide_las(){
        swiperSlide_las = new Swiper(".detail-las", {
            loop:true,
            spaceBetween:35,
            slidesPerView : '1',
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".A5",
                prevEl: ".A6",
            },
        });
    };
    createSlide_las();
})

$(function() {
    $( '.r_iwrap0 > img:nth-of-type(1), .r_iwrap1 > img:nth-of-type(1), .r_iwrap2 > img:nth-of-type(1)' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 750 }, 500 );
        return false;
    });
})


$(function() {
    $( '.r_iwrap0 > img:nth-of-type(2), .r_iwrap1 > img:nth-of-type(2), .r_iwrap2 > img:nth-of-type(2)' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 1450 }, 1000 );
        return false;
    });
})

$(function() {
    $( '.r_iwrap0 > img:nth-of-type(3), .r_iwrap1 > img:nth-of-type(3), .r_iwrap2 > img:nth-of-type(3)' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 2150 }, 1000 );
        return false;
    });



})
 // ---------------------대현 --------------------------//