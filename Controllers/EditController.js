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
//        alert("Submit form - EDIT");
        $.ajax({
            type: "POST",
            url: url,
            data: $("#EditForm").serialize() + '&action=edit&id_wpisu_pre=' + Url_id_record, // serializes the form's elements.
            success: function (response) {
//                alert(response);
                var data = jQuery.parseJSON(response);
//                alert(data);

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
                console.log(key + "=>" + data[f][key]);

                var trans_key = trans(key);

                switch (key) {

                    // type = 'text', disabled    
                    case 'ID_Wpisu':
                        trHTML += MakeInput("text", key, trans_key, data[f][key], true, null);
                        break;

                        // type = 'hidden', hidden   
                    case 'id_SzpitalOrInne':
                    case 'Matka_idMatka':
                        trHTML += MakeInput("hidden", key, key, data[f][key], false, null);
                        ;
                        break;

                        // type = 'date', disabled
                    case 'data_utworzenia':
                        trHTML += MakeInput("date", key, trans_key, data[f][key], true, null);
                        break;

                        // type = 'date', NOT disabled
                    case 'data_urodzenia_matka':
                    case 'data_urodzenia_dziecko':
                        trHTML += MakeInput("date", key, trans_key, data[f][key], false, null);
                        break;

                        // type = 'email', NOT disabled
                    case 'email':
                        trHTML += MakeInput("email", key, trans_key, data[f][key], false, null);
                        break;

                        // type = 'number', NOT disabled
                    case 'ktore_dziecko':
                        trHTML += MakeInput("number", key, trans_key, data[f][key], false, [1, null]);
                        break;

                        // type = 'radio', NOT disabled
                    case 'miejsce':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "Szpital"], [1, "Inne miejsce"]]);
                        break;

                        // type = 'options', NOT disabled
                    case 'urodzone_czas':
                        trHTML += MakeInput("select", key, trans_key, data[f][key], false, [["o czasie", "o czasie"], ["wcześniej", "wcześniej"], ["później", "później"]]);
                        break;
                        // type = 'options', NOT disabled
                    case 'porod':
                        trHTML += MakeInput("select", key, trans_key, data[f][key], false, [["normalny", "normalny"], ["zabiegowy", "zabiegowy"]]);
                        break;
                        // type = 'textarea', NOT disabled
                    case 'leki_porod':
                    case 'leki_polog':
                    case 'powod_zgloszenia':
                    case 'powod_zgloszenia':
                    case 'pierwsze_karmienie':
                        trHTML += MakeInput("textarea", key, trans_key, data[f][key], false, null);
                        break;


                        // TYLKO w wersji testowej tworzone!!!
                    case 'sql':
                    case 'info':
                    case 'error':
                        trHTML += '' +
                                '<label class="col-sm-1 control-label">' + key + '</label>' +
                                '<div class="col-sm-5">' +
                                '<textarea rows="3" class="form-control" >' + data[f][key] + '</textarea>' +
                                '</div>';
                        trHTML += '';
                        break;

                        // type = 'text', NOT Diabled
                    default:
                        trHTML += '' +
                                '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                                '<div class="col-sm-3">' +
                                '<input type="text" name="' + key + '" id="' + key + '" class="form-control"  value="' + data[f][key] + '">' +
                                '</div>';
                        trHTML += '';
                        break;
                }
            }
        }
        trHTML += '</div>';
        $('#EditForm').html(trHTML);
    }
    ;

    function MakeInput(type, key, trans_key, value, disabled, params) {

        var trHTML = "";

        if (disabled) {
            disabled = "disabled";
        } else {
            disabled = "";
        }

        switch (type) {
            case 'text':
            case 'email':
            case 'date':
                trHTML = '' +
                        '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-3">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control"  value="' + value + '" ' + disabled + '>' +
                        '</div>';
                break;
            case 'hidden':
                trHTML += '<div class="col-sm-6">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control"  value="' + value + '">' +
                        '</div>';
                break;
            case 'number':
                var min = "min=\"";
                var max = "max=\"";

                if (params != null || params != '') {
                    min += params[0] + "\"";
                    if (params[1] != null) {
                        max += params[1] + "\"";
                    } else {
                        max = "";
                    }
                } else {
                    min = "";
                }

                trHTML += '' +
                        '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-3">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control" ' + min + ' ' + max + ' value="' + value + '" ' + disabled + '>' +
                        '</div>';
                break;

            case 'radio':
                var leng = params.length;
                var checked = "";

                trHTML += '<p class="col-sm-12"></p>' +
                        '<label class="col-sm-3 control-label">' + trans_key + '</label>';

                for (var i = 0; i < leng; i++) {
                    if (params[i][0] == value) {
                        checked = "checked";
//                        alert("CZEKED: param = "+params[i][0]+"\n"+"value= "+value)
                    } else {
//                        alert("NIE czeked: param = "+params[i][0]+"\n"+"value= "+value)
                    }

                    trHTML += '<div class="radio col-sm-1">\n\
                                    <label><input type="radio" ' + checked + ' name="' + key + '" id="' + key + '" value="' + params[i][0] + '" >' + params[i][1] + '</label>' +
                            '</div>';
                }

                trHTML += '<p class="col-sm-12"></p>';

                break;

            case 'select':
                var leng = params.length;
                var selected = "";

                trHTML += '<p class="col-sm-12"></p>\n\
                            <label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-3">' +
                        '<select  id="' + key + '" name="' + key + '">';

                for (var i = 0; i < leng; i++) {
                    if (params[i][0] == value) {
                        selected = "selected=\"selected\"";
//                        alert("SELECT: param = "+params[i][0]+"\n"+"value= "+value)
                    } else {
                        selected = "";
//                        alert("NIE select: param = "+params[i][0]+"\n"+"value= "+value)
                    }
                    trHTML += '<option value="' + params[i][0] + '" ' + selected + '>' + params[i][1] + '</option>';
                }
                trHTML += '</select>' +
                        '</div>';

                break;
            case 'textarea':
                trHTML = '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                            '<div class="col-sm-3">' +
                                '<textarea class="form-control" name="' + key + '">' + value + '</textarea>' +
                            '</div>';
                break;

            default:
                break;
        }
        return trHTML;
    }

});


