$(function(){

    var time_arr = $("#time_out").text().split(":");
    var tminute = parseInt(time_arr[0]);
    var tseconds = parseInt(time_arr[1]);

    setInterval(function(){
        
        $("#time_out").text(tminute + ":" + tseconds);

        if (tseconds <= 0)
        {
            tminute--;
            tseconds = 59;
        }
        else
        {
            tseconds--;
        }

        if (tminute == 0 && tseconds == 0) location.href="./index.jsp";

    }, 1000);

    $(".cn_btn").on("click", function(){
        $(".lnbox").slideUp(400);
        $(".f_cover").fadeOut(400);
    });


    $(".ln_btn").on("click", function(){
        var login_url;
        var id_name;
        var pwd_name;
        var user_type;
        if ($(".lnbox p").text() == "관리자 로그인")
        {
            user_type = "adm";
        }
        else
        {
            user_type = "user"
        }

        login_url = "./" + user_type + "_loginchk.jsp";
        id_name = user_type + "_id";
        pwd_name = user_type + "_pwd";

        var post_data = {};
            post_data[""+id_name] = $("#" + user_type + "_id").val(),
            post_data[""+pwd_name] = $("#" + user_type + "_pwd").val()

        $.ajax({
            url: login_url,
            type: "post",
            dataType: "json",
            data: post_data,
            success: function(data){
                if (data.user_type == "user")
                {
                    if (data.login_result == "success")
                    {
                        location.href="./user/sv_list.jsp";
                    }
                    else if (data.login_result == "diffrent password")
                    {
                        alert("비밀번호가 틀렸습니다.");
                    }
                    else
                    {
                        alert("아이디를 찾을 수 없습니다.");
                    }
                }
                else
                {
                    if (data.login_result == "success")
                    {
                        location.href="./sv_list.jsp";
                    }
                    else if (data.login_result == "diffrent password")
                    {
                        alert("비밀번호가 틀렸습니다.");
                    }
                    else
                    {
                        alert("아이디를 찾을 수 없습니다.");
                    }
                }
            },
			error:function(xhr, status, error){
						alert(error);
			}
        });

    });

    $(".lmenu h3").click(function(){
		$(".lmenu ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
    })
    
    $(".lmenu h2").click(function(){
        $(".lmenu").slideUp(1000);
    });

    $(".lmenu_btn h2").click(function(){
        $(".lmenu").slideDown(1000);
    });

    $("#sch_open_btn").click(function(){
        
        $("#schfrm").animate({
            width: "toggle",
            height: "toggle"
        }, 700);
    });

    $("#sch_open_btn").click(function(){
        $("#sch_open_btn").toggleClass("fa-search");
        $("#sch_open_btn").toggleClass("fa-times");
    });

    $("#del_btn").click(function(){
        $("input[name=sv_lst_chk]:checked").each(function(){
            
        });
    });

    $("#ins_btn").on("click", function(){
        $("#sv_cover").fadeIn(400);
    });

    $(document).on("focus", "#sub_section table td input", function(){
        $("#sub_section").css("border", "1px solid rgb(57, 163, 177)");
    });

    $(document).on("blur", "#sub_section table td input", function(){
        $("#sub_section").css("border", "1px solid #e2e2e2");
    });

});