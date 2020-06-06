var margin = 0;
$(function(){
    
    $("#vita_describe .describe_box:first-child").hover(
        function(){
            $("#vita_describe .describe_box:nth-child(2)").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(3)").css({
                opacity:"0"
            });
            $("#describe_back").css({
                opacity:"1"
            })
        },function(){
            $("#describe_back").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(2)").css({
                opacity:"1"
            });
            $("#vita_describe .describe_box:nth-child(3)").css({
                opacity:"1"
            });
        }
    );
    $("#vita_describe .describe_box:nth-child(2)").hover(
        function(){
            $("#vita_describe .describe_box:nth-child(1)").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(3)").css({
                opacity:"0"
            });
            $("#describe_concept").css({
                opacity:"1"
            })
        },function(){
            $("#describe_concept").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(1)").css({
                opacity:"1"
            });
            $("#vita_describe .describe_box:nth-child(3)").css({
                opacity:"1"
            });
        }
    );
    $("#vita_describe .describe_box:nth-child(3)").hover(
        function(){
            $("#vita_describe .describe_box:nth-child(2)").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(1)").css({
                opacity:"0"
            });
            $("#describe_strategy").css({
                opacity:"1"
            })
        },function(){
            $("#describe_strategy").css({
                opacity:"0"
            });
            $("#vita_describe .describe_box:nth-child(2)").css({
                opacity:"1"
            });
            $("#vita_describe .describe_box:nth-child(1)").css({
                opacity:"1"
            });
        }
    );
    
    $("#back_btn").on("click",function(){
        if(margin == 0){
            margin -= 1690;
        }else{
            margin += 1690;    
        }
        $(".item_wrap").animate({
            marginLeft: margin + "px" 
        });
    });
    
    $("#next_btn").on("click",function(){
        if(margin == -1690){
            margin = 0;
        }else{
            margin -= 1690;    
        }
        $(".item_wrap").animate({
            marginLeft: margin +"px"
        });
    });
    
    $("#history_btn1").on("click",function(){
        $("#history1").stop().show();
        $("#history2").stop().hide();
        $("#history3").stop().hide();
        $("#history4").stop().hide();
    });
    $("#history_btn2").on("click",function(){
        $("#history2").stop().show();
        $("#history1").stop().hide();
        $("#history3").stop().hide();
        $("#history4").stop().hide();
    });
    $("#history_btn3").on("click",function(){
        $("#history3").stop().show();
        $("#history1").stop().hide();
        $("#history2").stop().hide();
        $("#history4").stop().hide();
    });
    $("#history_btn4").on("click",function(){
        $("#history4").stop().show();
        $("#history2").stop().hide();
        $("#history3").stop().hide();
        $("#history1").stop().hide();
    });
})