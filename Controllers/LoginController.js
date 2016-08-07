/****************************************************
 * Project:     Klinika_Local
 * Filename:    LoginController.js
 * Encoding:    UTF-8
 * Created:     2016-08-05
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function(){
    
    // For TEST Data:
    $("#email").val("test@test.com");
    $("#password").val("test1234");
    
    $("#errorPass").hide();
    
    // Submiting Logg form
    $("#LoginForm").submit(function(e) {

        var url = "AJAX/LoginAJAX.php"; // the script where you handle the form input.

        $.ajax({
               type: "POST",
               url: url,
               data: $("#LoginForm").serialize() + '&action=login', // serializes the form's elements.
               success: function(response){
                   var data = jQuery.parseJSON(response);
//                   alert("ok: "+data.valid); // show response from the php script.
//                   $("#responsTEST").text("RESPONSE: "+data.user + " / " + data.IP)
//                   $("#LoginForm").trigger('reset');
                   location.href = location.href
               },
               error: function(response){
                   alert("ERROR"+response);
//                   $("#errorPass").show();
               }
             });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    
    $("#buttLogOut").click(function(){
//            alert("LOGOT")
            var url = "AJAX/LoginAJAX.php"; // the script where you handle the form input.

            $.ajax({
                   type: "POST",
                   url: url,
                   data: $("#LoginForm").serialize() + '&action=logOut', // serializes the form's elements.
                   success: function(response){
                       var data = jQuery.parseJSON(response);
                       window.location.href = "http://localhost/Klinika_Local/index.php"
                   },
                   error: function(response){
                       alert("ERROR"+response);
                   }
                 });

            preventDefault(); // avoid to execute the actual submit of the form.
        });

});

