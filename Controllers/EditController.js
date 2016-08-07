/****************************************************
 * Project:     Klinika_Local
 * Filename:    EditController.js
 * Encoding:    UTF-8
 * Created:     2016-08-06
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function () {
    
    // Submiting Logg form
    $("#").submit(function(e) {
        alert("Searching")
        var url = "AJAX/EditAJAX.php"; // the script where you handle the form input.

        $.ajax({
               type: "POST",
               url: url,
               data: $("#").serialize() + '&action=search', // serializes the form's elements.
               success: function(response){
                   alert("ok1"+response);
                   var data = jQuery.parseJSON(response);
                   alert("ok2"+data);
//                   alert("ok: "+data.outp + "\n"+ data.actions); // show response from the php script.
//                   $("#message").html(  '<br>DATA SQL:<br>'+data.SQL+
//                                        '<br>DATA.OUTP'+data.outp+
//                                        '<br>DATA ACTIONS:<br>'+data.actions+
//                                        '<br>DATA ERRORs:<br>'+data.error+
//                                        '<br>DATA Info:<br>'+data.info
//                                        );
//                   $("#ListForm_Search").trigger('reset');
//                   location.href = location.href
               },
               error: function(response){
                   alert("ERROR"+response);
//                   $("#errorPass").show();
               }
             });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    
});


