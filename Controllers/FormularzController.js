/****************************************************
 * Project:     Klinika_Local
 * Filename:    FormularzController.js
 * Encoding:    UTF-8
 * Created:     2016-08-05
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function () {

    // Ustawienia początkowe formularza
    // NyForm3
    $("#show_szpital").hide();
    $("#show_innemiejsce").hide();
    $("#urodz_ulica_nr_mieszkanie").hide();
    $("#pozniej_opis").hide();
    $("#wcześniej").hide();
    $("#jaki_porod").hide();

    // NyForm5
    $("#problem_dziecko_opis").hide();
    $("#problem_mama_opis").hide();
    $("#karmienie_piersia_opis").hide();
    $("#kapturek_opis").hide();
    $("#dopajanie_opis_all").hide();
    $("#nawal_opis").hide();

    // NyForm6
    $("#karmienie_piers_opis").hide();
    $("#kapturek2_opis").hide();
    $("#dopajanie2_opis_all").hide();
    $("#karmienie_noc_opis").hide();
    $("#sciaganie_pokarm_opis").hide();
    $("#uspokajacz_opis").hide();

    // NyForm7
    $("#foto_cycki").hide();
    $("#brodawka_jaka").hide();
    $("#zmiany_opis").hide();

    // NyForm8
    $("#add_02_show").hide();
    $("#add_03_show").hide();
    $("#add_04_show").hide();
    $("#add_05_show").hide();
    $("#add_06_show").hide();
    
    
    // Submiting Logg form
    $("#NyFormularz").submit(function(e) {
//        alert("Submitting")
        var url = "AJAX/FormularzAJAX.php"; // the script where you handle the form input.

        $.ajax({
               type: "POST",
               url: url,
               data: $("#NyFormularz").serialize() + '&action=addNytt', // serializes the form's elements.
               success: function(response){
                   var data = jQuery.parseJSON(response);
//                   alert("ok: "+data.outp + "\n"+ data.actions); // show response from the php script.
                   $("#message").html(  '<br>DATA SQL:<br>'+data.SQL+
//                                        '<br>DATA.OUTP'+data.outp+
//                                        '<br>DATA ACTIONS:<br>'+data.actions+
                                        '<br>DATA ERRORs:<br>'+data.error+
                                        '<br>DATA Info:<br>'+data.info
                                        );
//                   $("#NyFormularz").trigger('reset');
//                   location.href = location.href
               },
               error: function(response){
                   alert("ERROR"+response);
//                   $("#errorPass").show();
               }
             });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    

    // Wpisuje imie i nazwisko matki i dziecka na górze form
    $("#mama_firstname").change(function () {
        var data_u = this.value;
        $("#add_imie_mama").text(data_u);
    });
    $("#mama_lastname").change(function () {
        var data_u = this.value;
        $("#add_nazwisko_mama").text(data_u);
    });
    $("#imie_dziecka").change(function () {
        var data_u = this.value;
        $("#add_imie_dziecko").text(data_u);
    });

    // wpisuje rok w danych formularza    
    $("#data_utworzenia").change(function () {
        var data_u = new Date(this.value);
        var year = data_u.getFullYear();
        $("#rokFormularza").val(year);
    });

    // wpisuje wiek matki
    $("#data_urodzenia_matka").change(function () {
        var data_u = new Date(this.value);
        var text = CalculateAge(data_u);
        $("#wiek_matki_dzis").val(text);

        var temp = $("#data_utworzenia").val();
        var data_y = new Date(temp);

        if (temp != "") {
            var text2 = CalculateAge2(data_u, data_y);
            $("#wiek_matka_wtedy").val(text2);
        }
    });

    // wpisuje wiek dziecka
    $("#data_urodzenia_dziecko").change(function () {
        var data_u = new Date(this.value);
        var text = CalculateAge(data_u);
        $("#wiek_dziecka_dzis").val(text);

        var temp = $("#data_utworzenia").val();
        var data_y = new Date(temp);

        if (temp != "") {
            var text2 = CalculateAge2(data_u, data_y);
            $("#wiek_dziecka_wtedy").val(text2);
        }
    });

    // radiobutton
    $("input[name='miejsce_urodzenia_quest']").click(function () {
        if (this.value == 0) {
            $("#show_szpital").show();
            $("#show_innemiejsce").hide();
//            $("#show_innemiejsce").remove();
            $("#urodz_ulica_nr_mieszkanie").hide();
        } else {
            $("#show_szpital").hide();
//            $("#show_szpital").remove();
            $("#show_innemiejsce").show();
            $("#urodz_ulica_nr_mieszkanie").show();
        }
    });

    // radiobutton    
    $("#urodzone_czas").change(function () {
        var temp = this.value;

        switch (temp) {
            case 'o czasie':
                $("#pozniej_opis").hide();
                $("#wcześniej").hide();
                break;
            case 'wcześniej':
                $("#pozniej_opis").hide();
                $("#wcześniej").show();
                break;
            case 'później':
                $("#pozniej_opis").show();
                $("#wcześniej").hide();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("#porod").change(function () {
        var temp = this.value;

        switch (temp) {
            case 'normalny':
                $("#jaki_porod").hide();
                break;
            case 'zabiegowy':
                $("#jaki_porod").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='problem_dziecko']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#problem_dziecko_opis").hide();
                break;
            case '1':
                $("#problem_dziecko_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='problem_mama']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#problem_mama_opis").hide();
                break;
            case '1':
                $("#problem_mama_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='karmienie_piersia']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#karmienie_piersia_opis").hide();
                break;
            case '1':
                $("#karmienie_piersia_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='kapturek']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#kapturek_opis").hide();
                break;
            case '1':
                $("#kapturek_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='dopajanie']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#dopajanie_opis_all").hide();
                break;
            case '1':
                $("#dopajanie_opis_all").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='nawal']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#nawal_opis").hide();
                break;
            case '1':
                $("#nawal_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='karmienie_piers']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#karmienie_piers_opis").hide();
                break;
            case '1':
                $("#karmienie_piers_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='kapturek2']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#kapturek2_opis").hide();
                break;
            case '1':
                $("#kapturek2_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='dopajanie2']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#dopajanie2_opis_all").hide();
                break;
            case '1':
                $("#dopajanie2_opis_all").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='karmienie_noc']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#karmienie_noc_opis").hide();
                break;
            case '1':
                $("#karmienie_noc_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='sciaganie_pokarm']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#sciaganie_pokarm_opis").hide();
                break;
            case '1':
                $("#sciaganie_pokarm_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='uspokajacz']").click(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#uspokajacz_opis").hide();
                break;
            case '1':
                $("#uspokajacz_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // CHECKBOX - CYCKI
//    $("input[type='checkbox']").click(function(){
//    $("input[id='cyckiID']").click(function(){
//    $("#cyckiID").click(function () {
    $("#cycki").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#cycki").prop('checked')) {
            $("#foto_cycki").show();
        } else {
            $("#foto_cycki").hide();
            $("#obszar").val("");
            $("#zmiana_opis_pict").val("");
        }

    });

    // radiobutton
    $("#brodawka").change(function () {
        var temp = this.value;
        switch (temp) {
            case 'prawidlowa':
                $("#brodawka_jaka").hide();
                break;
            case 'rzekomo_wklesla':
                $("#brodawka_jaka").show();
                break;
            case 'wklesla':
                $("#brodawka_jaka").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    // radiobutton
    $("input[name='zmiany']").change(function () {
        var temp = this.value;
        switch (temp) {
            case '0':
                $("#zmiany_opis").hide();
                break;
            case '1':
                $("#zmiany_opis").show();
                break;
            default:
                alert(" o default!");
                break;
        }
    });

    $("#add_01").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#add_01").prop('checked')) {
            $("#add_02_show").show();
        } else {
            $("#add_02_show").hide();
            $("input[name='masa_inne_b']").val('');
            $("input[name='data_03b']").val('');
            
        }

    });
    $("#add_02").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#add_02").prop('checked')) {
            $("#add_03_show").show();
        } else {
            $("#add_03_show").hide();
            $("input[name='masa_inne_c']").val('');
            $("input[name='data_03c']").val('');
        }

    });
    $("#add_03").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#add_03").prop('checked')) {
            $("#add_04_show").show();
        } else {
            $("#add_04_show").hide();
            $("input[name='masa_inne_d']").val('');
            $("input[name='data_03d']").val('');
        }

    });
    $("#add_04").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#add_04").prop('checked')) {
            $("#add_05_show").show();
        } else {
            $("#add_05_show").hide();
            $("input[name='masa_inne_e']").val('');
            $("input[name='data_03e']").val('');
        }

    });
    $("#add_05").click(function () {
//        alert("Checkbox state (method 1) = " + $("#cyckiID").prop('checked'));
//        alert("Checkbox state (method 2) = " + $("#cyckiID").is(':checked'));

        if ($("#add_05").prop('checked')) {
            $("#add_06_show").show();
        } else {
            $("#add_06_show").hide();
            $("input[name='masa_inne_f']").val('');
            $("input[name='data_03f']").val('');
        }

    });



});