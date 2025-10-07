$( document ).ready(function() {
    let iUserLogins = false;

    $('body input.form_auth_logining').bind('click', function() {
        if(!iUserLogins)
        {
            $.ajax({
                method: "POST",
                url: "/api/auth/login",
                data: {
                    email: $('body input.form_auth_login').val(),
                    password: $('body input.form_auth_pass').val()
                },
            }).done(function(data) {
                if(data.hasOwnProperty("success"))
                {
                    iUserLogins = data.success;
                    window.location.href = location.protocol+'//'+window.location.host+"/tapgus";
                } else {
                    iUserLogins = false;
                }
            });
        }

    });
});