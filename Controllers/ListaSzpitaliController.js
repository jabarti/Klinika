/****************************************************
 * Project:     Klinika_Local
 * Filename:    ListaSzpitaliController.js
 * Encoding:    UTF-8
 * Created:     2016-08-16
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function () {

    var url = "AJAX/ListaSzpitaliAJAX.php"; // the script where you handle the form input.

// POBRANIE PODSTAWOWYCH  DANYCH
    $.ajax({
        type: "POST",
        url: url,
        data: 'action=init', // serializes the form's elements.
        success: function (response) {
//                alert(response)
            var data = jQuery.parseJSON(response);
//                alert(data)

            Make_Records(data);
        },
        error: function (response) {
//            alert("ERROR" + response);
        }
    });

// POBRANIE DANYCH WYSZUKIWANYCH
    $("#ListSzpit_Search").submit(function (e) {
//        alert("Searching")
        $.ajax({
            type: "POST",
            url: url,
            data: $("#ListSzpit_Search").serialize() + '&action=search', // serializes the form's elements.
            success: function (response) {
                var data = jQuery.parseJSON(response);

                Make_Records(data);
            },
            error: function (response) {
//                alert("ERROR" + response);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

// OBSŁUGA ZDARZEŃ BUTTONÓW FORMULARZA (order UP, DOWN) - TO DO!!!!!!!!!!!!!
    $.fn.MessageBox = function (where, upOchNer) {
        return this.each(function () {
//            alert("po czym:" + where +", up czy down:"+ upOchNer);
            $.ajax({
                type: "POST",
                url: url,
                data: 'action=order&poczym=' + where + '&updown=' + upOchNer, // serializes the form's elements.
                success: function (response) {
                    var data = jQuery.parseJSON(response);

                    Make_Records(data);
                },
                error: function (response) {
//                    alert("ERROR" + response);
                }
            });
        });
    };

// OBSŁUGA ZDARZEŃ BUTTONÓW FORMULARZA (DEL, EDIT) - TO DO!!!!!!!!!!!!!
    $('tbody').delegate("button", "click", function () {
        var butt_id = this.id;
        var where = butt_id.slice(0, 6);
        var what = butt_id.slice(12);
        var what = what.replace('_', '/');
//        alert("Where:" + where + "\nWhat: " + what);

        switch (where) {
            case 'toEdit':
//                alert("Zdarzenie: " + where + ", na rekordzie:" + what);
                window.location.href = 'index.php?page=editSzpital&id_record=' + what;
                break;

            case 'toDelR':
//                alert("Zdarzenie: " + where + ", na rekordzie:" + what);
                var del = confirm("Czy faktycznie skasować ten rekord?");
                if (del === true) {
//                    alert("to kasuje");
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: 'action=deleteSzpital&id_rec=' + what, // serializes the form's elements.
                        success: function (response) {
                            var data = jQuery.parseJSON(response);

                            Make_Records(data);
                        },
                        error: function (response) {
//                            alert("ERROR" + response);
                        }
                    });

                } else {
//                    alert("to NIE kasuje");
                }
                break;

            default:
//                alert("Zdarzenie: default?? " + where + ", na rekordzie:" + what);
                break;
        }
    });
    
    $('#addHospital').click(function(){
        alert("addHospital - TODO")
    })


// FUNKCJA PAKUJĄCA DANE DO FORMULARZA
    function Make_Records(data) {
        var trHTML = '';
        for (var f = 0; f < data.length; f++) {

            var text = (data[f]['idSzpital']);

            trHTML += '<tr>\n\
                            <td><button id="toEditSzpit_' + text + '" class="editButt btn btn-primary" formtarget="_blank"><span class="glyphicon glyphicon-edit" ></span> ' + data[f]['idSzpital'] + '</button></td>\n\
                            <td><span >' + data[f]['nazwa'] + '</span></td>\n\
                            <td><span >' + data[f]['urodz_ulica'] + '</span></td>\n\
                            <td><span >' + data[f]['urodz_ulica_nr'] + '</span></td>\n\
                            <td><span >' + data[f]['urodz_kod_poczt'] + '</span></td>\n\
                            <td><span >' + data[f]['urodz_miasto'] + '</span></td>\n\\n\
                            <td><span >' + data[f]['urodz_kraj'] + '</span></td>\n\\n\
                            <td><button id="toDelR_' + text + '" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> Usuń</button></td>\n\
                       </tr>';
        }
        $('#ListSzpital_Table_body').html(trHTML);
    }

});





