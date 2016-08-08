/****************************************************
 * Project:     Klinika_Local
 * Filename:    EditController.js
 * Encoding:    UTF-8
 * Created:     2016-08-06
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function () {


    var url = "AJAX/EditAJAX.php"; // the script where you handle the form input.
    var Url_id_record = getUrlProperty("id_record");

    // POBRANIE PODSTAWOWYCH  DANYCH
    $.ajax({
        type: "POST",
        url: url,
        data: 'action=init&id_wpisu=' + Url_id_record, // serializes the form's elements.
        success: function (response) {
//                alert(response)
            var data = jQuery.parseJSON(response);
//                alert(data)

            Make_Records(data);
        },
        error: function (response) {
            alert("ERROR w EditCtrl 28" + response);
        }
    });
    
// EDYCJA REKORDU
    $('#submit').click(function () {
        alert("Submit form - EDIT")
        $.ajax({
            type: "POST",
            url: url,
            data: $("#EditForm").serialize() + 'action=edit&id_wpisu_pre=' + Url_id_record, // serializes the form's elements.
            success: function (response) {
                alert(response)
                var data = jQuery.parseJSON(response);
                alert(data)

                Make_Records(data);
            },
            error: function (response) {
                alert("ERROR w EditCtrl 28" + response);
            }
        });

    });
    
 // KASOWANIE REKORDU   
    $('#delete').click(function () {
        if (confirm("Delete form?")) {
            $.ajax({
                type: "POST",
                url: url,
                data: 'action=delete&id_wpisu=' + Url_id_record, // serializes the form's elements.
                success: function (response) {
                    window.location.href = 'index.php?page=list';
                },
                error: function (response) {
                    alert("ERROR w EditCtrl 28" + response);
                }
            });
        }
    });


// FUNKCJA PAKUJĄCA DANE DO FORMULARZA
    function Make_Records(data) {
//        var trHTML = '<table class="table-striped">';
        var trHTML = '<div class="form-group form-buffer-pa">';
        for (var f = 0; f < data.length; f++) {
            for (var key in data[f]) {
//                alert(key + "=>" + data[f][key])

                var trans_key = trans(key);

                switch (key) {
                    case 'data_utworzenia':
                        trHTML += '' +
                                '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                                '<div class="col-sm-3">' +
                                '<input type="date" name="' + key + '" id="' + key + '" class="form-control"  value="' + data[f][key] + '" disabled>' +
                                '</div>';
                        trHTML += '';
                        break;
                    case 'ID_Wpisu':
                    case 'mama_firstname':
                        trHTML += '' +
                                '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                                '<div class="col-sm-3">' +
                                '<input type="text" name="' + key + '" id="' + key + '" class="form-control"  value="' + data[f][key] + '" disabled>' +
                                '</div>';
                        trHTML += '';
                        break;
                    default:
                        trHTML += '' +
                                '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                                '<div class="col-sm-3">' +
                                '<input type="text" name="' + key + '" id="' + key + '" class="form-control"  value="' + data[f][key] + '">' +
                                '</div>';
                        trHTML += '';
                        break;
                }
//                trHTML += "<tr><td>"+key+"</td><td><input type='text' value='"+data[f][key]+"'></td></tr>";
//                trHTML += '' +
//                        '<label class="col-sm-3 control-label">' + key + '</label>' +
//                        '<div class="col-sm-3">' +
//                        '<input type="text" name="' + key + '" id="' + key + '" class="form-control"  value="' + data[f][key] + '">' +
//                        '</div>';
//                trHTML += '';
            }
        }
        trHTML += '</div>';
//       trHTML += '</table>';
        $('#EditForm').html(trHTML);
    }

});


