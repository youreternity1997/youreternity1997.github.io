$(document).ready(function() {                  
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    function setMonthAndDay(YearandMonthandDay){ //setMonthAndDay("2019/7/19")
        var t = Date.parse(YearandMonthandDay); //set 2019/7/19 to 1905000010s
        var D = new Date(t).toLocaleDateString();//Fri Jul 19 2019 08:00:00 GMT+0800 -> 2019/7/19
        $("#courseTable").append("<td>"+D+"</td>");
    }
    
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(x+1)+"</td>");
        setMonthAndDay(topic[x].Date);
        $("#courseTable").append("<td>"+topic[x].Name+"</td>");
        $("#courseTable").append("</tr>");        
    }

    $("#newNameandDatebutton").click(function(){
        topicCount += 1;
        var N = $("#newNametext").val();//N = 阿凡達2
        var D = $("#newDatetext").val();//D = 2020-12-18
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(topicCount)+"</td>");
        $("#courseTable").append("<td>"+D.slice(0,4)+"/"+D.slice(5,7)+"/"+D.slice(8)+"</td>");//D=2020-12-18 ->2020/12/18
        $("#courseTable").append("<td>"+N+"</td>"); 
        $("#courseTable").append("</tr>"); 
    }); 
    
    $("#deletenewNameandDatebutton").click(function(){
        topicCount -= 1;
        $("#courseTable td:last-of-type,#courseTable td:nth-last-of-type(2),#courseTable td:nth-last-of-type(3)").remove();
    });
});
