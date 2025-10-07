function getCookie(name) {
    const fullCookieString = '; ' + document.cookie;
    const splitCookie = fullCookieString.split('; ' + name + '=');
    return splitCookie.length === 2 ? splitCookie.pop().split(';').shift() : null;
}

$( document ).ready(function() {
    let iUserPoints = 0;
    $.event.special.tap = {
        setup: function(data, namespaces) {
            var $elem = $(this);
            $elem.bind('touchstart', $.event.special.tap.handler)
                .bind('touchmove', $.event.special.tap.handler)
                .bind('touchend', $.event.special.tap.handler);
        },

        teardown: function(namespaces) {
            var $elem = $(this);
            $elem.unbind('touchstart', $.event.special.tap.handler)
                .unbind('touchmove', $.event.special.tap.handler)
                .unbind('touchend', $.event.special.tap.handler);
        },

        handler: function(event) {
            event.preventDefault();
            var $elem = $(this);
            $elem.data(event.type, 1);
            if (event.type === 'touchend' && !$elem.data('touchmove')) {
                event.type = 'tap';
                $.event.handle.apply(this, arguments);
            } else if ($elem.data('touchend')) {
                $elem.removeData('touchstart touchmove touchend');
            }
        }
    };

    $('body img.gusshero').bind('tap click', function() {
        if(iUserPoints >=0)
        {
            $.ajax({
                method: "POST",
                url: "/api/user/tapguss",
                data: {
                    token: getCookie('token'),
                },
            }).done(function(data) {
                if(data.hasOwnProperty("iUserPoints"))
                {
                    console.log("tap for guss!!");
                    $(".points-user").html("<h2 class='points-user-head'>"+data.iUserPoints+"</h2>");
                    iUserPoints = data.iUserPoints;
                } else {
                    console.log("tap denied!!");
                    iUserPoints = -1;
                }
            });
        }
    });

    if($(".points-user-head").val() == ("" || undefined)) {
        $(".points-user").html("<h2 class='points-user-head'>0</h2>");
    }
});