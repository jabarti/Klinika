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
            loadUstawienia()
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
                loadUstawienia()
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
//                console.log(key + "=>" + data[f][key]);

                var trans_key = trans(key);

//!!!!!!!!!!!    Zamast switch można to rozplanować jak w Formularz :) !!!!!!!!!!!!!!!!!!!!!!!
                switch (key) {

                    // type = 'text', disabled    
                    case 'ID_Wpisu':
                        trHTML += MakeInput("text", key, trans_key, data[f][key], true, null, null);
                        break;

                        // type = 'hidden', hidden   
                    case 'id_SzpitalOrInne':
                    case 'Matka_idMatka':
                        trHTML += MakeInput("hidden", key, key, data[f][key], false, null, null);
                        ;
                        break;

                        // type = 'date', disabled
                    case 'data_utworzenia':
                        trHTML += MakeInput("date", key, trans_key, data[f][key], true, null, null);
                        break;

                        // type = 'date', NOT disabled
                    case 'data_urodzenia_matka':
                    case 'data_urodzenia_dziecko':
                    case 'data_01':
                    case 'data_02':
                    case 'data_03a':
                    case 'data_03b':
                    case 'data_03c':
                    case 'data_03d':
                    case 'data_03e':
                    case 'data_03f':
                    case 'data_04':
                        trHTML += MakeInput("date", key, trans_key, data[f][key], false, null, null);
                        break;

                        // type = 'email', NOT disabled
                    case 'email':
                        trHTML += MakeInput("email", key, trans_key, data[f][key], false, null, null);
                        break;

                        // type = 'number', NOT disabled
                    case 'ktore_dziecko':
                        trHTML += MakeInput("number", key, trans_key, data[f][key], false, [1, null], null);
                        break;
                    case 'masa_ur':
                    case 'masa_min':
                    case 'masa_inne_a':
                    case 'masa_inne_b':
                    case 'masa_inne_c':
                    case 'masa_inne_d':
                    case 'masa_inne_e':
                    case 'masa_inne_f':
                    case 'masa_obecna':

                        trHTML += MakeInput("number", key, trans_key, data[f][key], false, [1, null, 0.01], null);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'miejsce':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "Szpital"], [1, "Inne miejsce"]], 2);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'pobyt':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "mama z dzieckiem"], [1, "oddzielnie"]], 2);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'otwieranie_ust':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "wystarczające"], [1, "niewystarczające"]], 2);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'ulozenie_ust':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "wywinięte"], [1, "wciągnięte"]], 2);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'ulozenie_jezyka':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "do przodu"], [1, "cofnięty"]], 2);
                        break;

                        // type = 'radio', NOT disabled, opcje rózne
                    case 'ruchy_kasajace':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "nieobecne"], [1, "obecne"]], 2);
                        break;
                        // type = 'radio', NOT disabled, opcje rózne
                    case 'ruchy_ssace':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "głębokie"], [1, "płytkie"]], 2);
                        break;

                    case 'piers_wielkosc':
                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "mała"], [1, "średnia"], [2, "duża"]], null);
                        break;

                    case 'cycki':
//                        alert(key + ","+ data[f][key])
                        trHTML += MakeInput("checkbox", key, trans_key, data[f][key], false, null, null);
                        break;

                        // type = 'radio', NOT disabled, opcje tylko "tak" i "nie"
                    case 'problem_dziecko':
                    case 'problem_mama':
                    case 'karmienie_piersia':
                    case 'kapturek':
                    case 'dopajanie':
                    case 'nawal':
                    case 'karmienie_piers':
                    case 'kapturek2':
                    case 'dopajanie2':
                    case 'karmienie_noc':
                    case 'sciaganie_pokarm':
                    case 'aktywnosc':
                    case 'kolka':
                    case 'uspokajacz':
                    case 'zmiany':
                    case 'korekta_poz':
                    case 'trening_ssania':
                    case 'dokarmianie':

                        trHTML += MakeInput("radio", key, trans_key, data[f][key], false, [[0, "nie"], [1, "tak"]], null);
                        break;


                        // type = 'options', NOT disabled
                    case 'urodzone_czas':
                        trHTML += MakeInput("select", key, trans_key, data[f][key], false, [["o czasie", "o czasie"], ["wcześniej", "wcześniej"], ["później", "później"]], null);
                        break;

                        // type = 'options', NOT disabled
                    case 'brodawka':
                        trHTML += MakeInput("select", key, trans_key, data[f][key], false, [["prawidlowa", "prawidłowa"], ["rzekomo_wklesla", "rzekomo wklęsła"], ["wklesla", "wklęsła"]], null);
                        break;

                        // type = 'options', NOT disabled
                    case 'porod':
                        trHTML += MakeInput("select", key, trans_key, data[f][key], false, [["normalny", "normalny"], ["zabiegowy", "zabiegowy"]], null);
                        break;

                        // type = 'textarea', NOT disabled
                    case 'leki_porod':
                    case 'leki_polog':
                    case 'powod_zgloszenia':
                    case 'powod_zgloszenia':
                    case 'pierwsze_karmienie':
                    case 'stan_emocjonalny':
                    case 'obserwacja_dziecka':
                    case 'zachowanie_dziecka_wizyta':
                    case 'ocena_karmienie_piers':
                    case 'rozpoznanie':
                    case 'zalecenia_inne':

                        trHTML += MakeInput("textarea", key, trans_key, data[f][key], false, null, null);
                        break;


                        // TYLKO w wersji testowej tworzone!!!
                    case 'sql':
                    case 'info':
                    case 'error':
                        trHTML += '<p class="col-sm-12"></p>';
                        trHTML += MakeInput("textarea", key, trans_key, data[f][key], false, null, 7);
                        break;

                        // type = 'text', NOT Diabled
                    default:

                        // type = text, normal
//                        alert(key + ","+ data[f][key])
                        trHTML += MakeInput("text", key, trans_key, data[f][key], false, null, null);
                        break;
                }
            }
        }
        trHTML += '</div>';
        $('#EditForm').html(trHTML);
    }

// Tworzy inputy na podstawie m.in. typu
// params: type: typ inputa (text, date, textarea itp)
// params: key: id, name
// params: trans_key: nazwa wyświetlana w np. label
// params: disabled: czy input jest edytowalny czy nie
// params: params: tablica różnych elementów, np opcji do select, do radio itp, 
// params: width_out: radiobutton (na razie tylko!!!) CLASS: col-sm-WIDTH_OUT 
    function MakeInput(type, key, trans_key, value, disabled, params, width_out) {
        var trHTML = "";

        if (disabled) {
            disabled = "disabled";
        } else {
            disabled = "";
        }
        var width_in = "";

        if (width_out != null) {
            width_in = width_out;
        }

        switch (type) {
            case 'text':
            case 'email':
            case 'date':
                trHTML = '<div id="' + key + '_show">' +
                        '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-3">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control"  value="' + value + '" ' + disabled + '>' +
                        '</div>' +
                        '</div>';
                break;

            case 'hidden':
                trHTML += '<div class="col-sm-6">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control"  value="' + value + '">' +
                        '</div>';
                break;

            case 'number':
                var min = "";
                var max = "";
                var step = "";

                if (params != null || params != '') {
                    if (params[0] != null) {
                        min += "min=\"" + params[0] + "\"";
                    }
                    if (params[1] != null) {
                        max += "max=\"" + params[1] + "\"";
                    }
                    if (params[2] != null) {
                        step += "step=\"" + params[2] + "\"";
                    }
                }

                trHTML += '' +
                        '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-3">' +
                        '<input type="' + type + '" name="' + key + '" id="' + key + '" class="form-control" ' + min + ' ' + max + ' ' + step + ' value="' + value + '" ' + disabled + '>' +
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
//                        alert("CZEKED: param("+key+") = "+params[i][0]+"\n"+"value= "+value)
                    } else {
                        checked = "";
//                        alert("NIE czeked: param("+key+") = "+params[i][0]+"\n"+"value= "+value)
                    }

                    if (width_out == null) {
                        width_in = 1;
                    }

                    trHTML += '<div class="radio col-sm-' + width_in + '">\n\
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
                if (width_out == null) {
                    width_in = 3;
                }
                trHTML = '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-'+width_in+'">' +
                        '<textarea class="form-control" name="' + key + '">' + value + '</textarea>' +
                        '</div>';
                break;

            case 'checkbox':
                checked = "";
                if (value == 0) {
                    checked = "";
                } else {
                    checked = "checked";
                }
                trHTML = '<label class="col-sm-3 control-label">' + trans_key + '</label>' +
                        '<div class="col-sm-1">' +
                        ' <input type="' + type + '" id="' + key + '" name="' + key + '" ' + checked + '>' +
                        ' </div>';
                break;

            default:
                break;
        }
        return trHTML;
    }

// Funkcja ładująca ustawienia bazowe róznych inputów
    function loadUstawienia() {
        ShowHide("problem_dziecko", ["problem_dziecko_opis"]);
        ShowHide("problem_mama", ["problem_mama_opis"]);
        ShowHide("karmienie_piersia", ["karmienie_piersia_opis"]);
        ShowHide("kapturek", ["kapturek_opis"]);
        ShowHide("dopajanie", ["dopajanie_czym", "dopajanie_opis", "dopajanie_jak_dlugo"]);
        ShowHide("nawal", ["nawal_opis"]);
        ShowHide("karmienie_piers", ["karmienie_piers_czest", "karmienie_piers_dlugo"]);
        ShowHide("kapturek2", ["kapturek2_opis"]);
        ShowHide("dopajanie2", ["dopajanie2_czym", "dopajanie2_jak_dlugo", "dopajanie2_opis"]);
        ShowHide("karmienie_noc", ["karmienie_noc_opis"]);
        ShowHide("sciaganie_pokarm", ["sciaganie_pokarm_cel", "sciaganie_pokarm_ile"]);
        ShowHide("uspokajacz", ["uspokajacz_opis"]);
        ShowHide("zmiany", ["zmiany_opis"]);

        ShowHide_opt("urodzone_czas", ["ile_wczesniej"], "o czasie");
        ShowHide_opt("porod", ["jaki_porod"], "normalny");
        ShowHide_opt("brodawka", ["brodawka_jaka"], "prawidlowa");
    }

// Funkcja ustawiająca akcje dla input typu checkbox, radiobutton (chowanie przynależnych im pól opisu)
    function ShowHide(text, params) {
        var leng = params.length;
        var clean = false;

        var communikate = "";

        if (leng > 1) {
            communikate = "Czy wyczyścić wszystkie wpisy?";
        } else {
            communikate = "Czy wyczyścić również wpis?";
        }

        if ($("input[name='" + text + "']:checked").val() == 0) {
            for (var i = 0; i < leng; i++) {
                $('#' + params[i] + '_show').hide();
            }
        } else {
            for (var i = 0; i < leng; i++) {
                $('#' + params[i] + '_show').show();
            }
        }

        $("input[name='" + text + "']").click(function () {
            if ($("input[name='" + text + "']:checked").val() == 0) {
                clean = confirm(communikate)
                for (var i = 0; i < leng; i++) {
                    $('#' + params[i] + '_show').hide();

                    if (clean) {
                        $('#' + params[i]).removeAttr('value');
                    }
                }
            } else {
                for (var i = 0; i < leng; i++) {
                    $('#' + params[i] + '_show').show();
                }
            }
        });
    }

// Funkcja ustawiająca akcje dla input typu select-option (chowanie przynależnych im pól opisu)
    function ShowHide_opt(id, params, opt) {
//        alert($("#"+id).val())

        var leng = params.length;
        var clean = false;
        var communikate = "";

        if (leng > 1) {
            communikate = "Czy wyczyścić wszystkie wpisy?";
        } else {
            communikate = "Czy wyczyścić również wpis?";
        }


        if ($("#" + id).val() != opt) {
            for (var i = 0; i < leng; i++) {
                $('#' + params[i] + '_show').show();
            }
        } else {
            for (var i = 0; i < leng; i++) {
//                alert("399: "+params[i])
                $('#' + params[i] + '_show').hide();
            }
        }

        $("#" + id).change(function () {
            if ($("#" + id).val() != opt) {
                for (var i = 0; i < leng; i++) {
                    $('#' + params[i] + '_show').show();
                }
            } else {
                clean = confirm(communikate);
                for (var i = 0; i < leng; i++) {
                    $('#' + params[i] + '_show').hide();
                    if (clean) {
                        $('#' + params[i]).removeAttr('value');
                    }
                }
            }
        });
    }



});


