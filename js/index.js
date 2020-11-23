function timer(f) {
    var date = new Date(f.attr("data-finish"));

    var f_time = Date.parse(date);

    function timer_go(obj) {
        var n_time = Date.now();
        var diff = f_time - n_time;
        if(diff <= 0) return false;
        var left = diff % 1000;

        //секунды
        diff = Math.floor(diff / 1000);
        var s = diff % 60;
        if(s < 10) {
            $(".seconds_1",obj).html(0);
            $(".seconds_2",obj).html(s);
        }else {
            $(".seconds_1",obj).html(Math.floor(s / 10));
            $(".seconds_2",obj).html(s % 10);
        }
        //минуты
        diff = Math.floor(diff / 60);
        var m = diff % 60;
        if(m < 10) {
            $(".minutes_1",obj).html(0);
            $(".minutes_2",obj).html(m);
        }else {
            $(".minutes_1",obj).html(Math.floor(m / 10));
            $(".minutes_2",obj).html(m % 10);
        }
        //часы
        diff = Math.floor(diff / 60);
        var h = diff % 24;
        if(h < 10) {
            $(".hours_1",obj).html(0);
            $(".hours_2",obj).html(h);
        }else {
            $(".hours_1",obj).html(Math.floor(h / 10));
            $(".hours_2",obj).html(h % 10);
        }
        //дни
        var d = Math.floor(diff / 24);
        if(d < 10) {
            $(".days_1",obj).html(0);
            $(".days_2",obj).html(d);
        }else {
            $(".days_1",obj).html(Math.floor(d / 10));
            $(".days_2",obj).html(d % 10);
        }
        setTimeout(timer_go, left,obj);
    }
    setTimeout(timer_go, 0,f);
}

$(".timer").each(function() {
    console.log($(this).attr("data-finish"));
    timer($(this))
});