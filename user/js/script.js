$(function(){
    nDate = new Date();
    tYear = nDate.getFullYear();

    tMonth = nDate.getMonth()+1;
    if ((tMonth + "").length < 2){ tMonth = "0" + tMonth; }
    
    tDay = nDate.getDate();
    if ((tDay + "").length < 2) { tDay = "0" + tDay; }

    fDate = tYear + "" + tMonth + "" + tDay;
    fDate = parseInt(fDate);

    $(".ctr_warp table tbody tr").click(function(){
        Click_row = $(this).children();
        CsDate = (Click_row.eq(2).text()).replace(/-/gi, "");
        CeDate = (Click_row.eq(3).text()).replace(/-/gi, "");

        if (CsDate > fDate) { alert("설문조사 기간이 아닙니다."); }
        else if (CeDate < fDate) { alert("설문조사 기간이 아닙니다."); }
        else { location.href='./sv_view.jsp?sv_no=' + Click_row.eq(0).text(); }
    });
});