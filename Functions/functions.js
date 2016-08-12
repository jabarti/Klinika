/****************************************************
 * Project:     Klinika
 * Filename:    functions.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
function showCoordsCyca(event, text) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = text + ": coords: " + x + ", Y coords: " + y;
//    var el = document.getElementById("cords");
    var el = document.getElementById("obszar");
    el.innerHTML = coords;
    el.value = coords;
    switch (text) {
        case "rec1":
        case "rec7":
        case "rec13":
            el.style.backgroundColor = "red";
//                alert("red")
            break;
        case "rec2":
        case "rec8":
        case "rec14":
            el.style.backgroundColor = "yellow";
            break;
        case "rec3":
        case "rec9":
        case "rec15":
            el.style.backgroundColor = "green";
            break;
        case "rec4":
        case "rec10":
        case "rec16":
            el.style.backgroundColor = "brown";
            break;
        case "rec5":
        case "rec11":
        case "rec17":
            el.style.backgroundColor = "orange";
            break;
        case "rec6":
        case "rec12":
        case "rec18":
            el.style.backgroundColor = "pink";
            break;

        default:
            el.style.backgroundColor = "white";
            break
    }
}

function showOUTCoordsCyca(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = " coordsOUT: " + x + ", Y coords: " + y;
    var el = document.getElementById("obszar");
    el.innerHTML = coords;
    alert("OUT")
    el.style.backgroundColor = "black";
}


// Popover w formularzu na przykład (ID_Wpis)
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});


// funkcje do oblicznia wieku dziś lub w danej dacie
function CalculateAge(data) {
    var data_u = new Date(data)
    var ageDifMs = Date.now() - data_u.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    year = Math.abs(ageDate.getFullYear() - 1970);
    month = Math.abs(ageDate.getMonth() + 1);
    dagar = Math.abs(ageDate.getDate());

    return year + " lat i " + month + " mieś. i " + dagar + "dni";
}
;

function CalculateAge2(data, data2) {
    var data_x = new Date(data)
    var data_y = new Date(data2)
    var ageDifMs = data_y.getTime() - data_x.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    year = Math.abs(ageDate.getFullYear() - 1970);
    month = Math.abs(ageDate.getMonth() + 1);
    dagar = Math.abs(ageDate.getDate());

    return year + " lat i " + month + " mieś. i " + dagar + "dni";
}
;

function getUrlProperty(text) {
    var start = text.length + 1;

    var url = location.search.substring(1);
    var slajs = url.split("&");

    for (i = 0; i < slajs.length; i++) {
        var czy = slajs[i].indexOf(text)
        if (czy == 0) {
            var outp = slajs[i].substring(start)
        }
    }
    return outp;
}

function trans(text) {

    var Fintext = ''
    switch(text){
        case 'mama_firstname':
            Fintext = 'Imię matki'
            break;
        case 'mama_lastname':
            Fintext = 'Nazwisko matki'
            break;
        case 'urodz_ulica':
            Fintext = 'ulica'
            break;
        case 'urodz_ulica_nr':
            Fintext = 'nr'
            break;
        case 'urodz_ulica_nr_mieszkanie':
            Fintext = 'mieszkania'
            break;
        case 'urodz_kod_poczt':
            Fintext = 'kod pocztowy'
            break;
        case 'urodz_miasto':
            Fintext = 'miasto'
            break;
        case 'urodz_kraj':
            Fintext = 'kraj'
            break;
        default:
            var pattern = "_";
            re = new RegExp(pattern, "g");
            Fintext = text.replace(re," ");
//            Fintext = text
            break;
    }

    return Fintext;
}

