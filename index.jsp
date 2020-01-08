<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="./js/script.js?v=201912261437"></script>
        <link rel="stylesheet" type="text/css" href="./css/style.css?v=201912261427" />
        <link href="https://fonts.googleapis.com/css?family=Jua&display=swap" rel="stylesheet">
        
        <%
            String adm_id = (String)session.getAttribute("adm_id");
            session.setMaxInactiveInterval(60*30) ;

            if (adm_id == "" || adm_id == null) {
        %>
            <script type="text/javascript">
            $(function(){

                $("input[name=adm_btn]").on("click", function(){
                    $(".f_cover").fadeIn(400);
                    $(".lnbox").slideDown(700);

                    $(".lnbox p").text("관리자 로그인");
                    $(".lfrm input[type=text]").attr({"id": "adm_id", "placeholder": "관리자 아이디"});
                    $(".lfrm input[type=password]").attr({"id": "adm_pwd", "placeholder": "관리자 패스워드"});
                });

                $("input[name=sv_people]").on("click", function(){
                    $(".f_cover").fadeIn(400);
                    $(".lnbox").slideDown(700);

                    $(".lnbox p").text("유저 로그인");
                    $(".lfrm input[type=text]").attr({"id": "user_id", "placeholder": "유저 아이디"});
                    $(".lfrm input[type=password]").attr({"id": "user_pwd", "placeholder": "유저 패스워드"});
                });

            });
            </script>
        <% }else{ %>
            <script type="text/javascript">
                $(function(){

                    $("input[name=adm_btn").on("click", function(){
                        $(".f_cover").fadeIn(400);
                        $(".lnbox").slideDown(700);
                    });

                    /*
                    $("input[name=adm_btn").on("click", function(){
                        location.href='./adm_main.jsp';
                    });
                    */
            
                });
            </script>
        <% } %>
    
    </head>
    <body class="wrapper">
        <div class="f_cover">
            <div class="lnbox">
                <p>관리자 로그인</p>
                <hr />
                <div class="lfrm">
                    <input type="text" id="adm_id" placeholder="관리자 아이디" />
                    <hr />
                    <input type="password" id="adm_pwd" placeholder="관리자 비밀번호" />
                </div>
                <input type="button" class="cn_btn" value="취소" />
                <input type="button" class="ln_btn" value="로그인" />
            </div>
        </div>
        <div name="sel_box" class="slbox">
            <p>Survey Edit</p>
            <hr />
            <input type="button" value="관리자" name="adm_btn" />
            <input type="button" value="설문 대상자" name="sv_people" />
        </div>
    </body>
</html>