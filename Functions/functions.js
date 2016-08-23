/****************************************************
 * Project:     Klinika
 * Filename:    functions.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
var tabClics = [];
var ileImg = 3; // maksymalnie dwa zaznaczone obszary cycków
var longOfString = ileImg * 5 + 1;
var indexIntabClics = 0;
var isNyLoaded = true;

function showCoordsCyca(event, text) {

    var toLoad = "";
    var czyDopisać = false;
    var tempToLoad = "";
    var isFormObszar = true;

    if ($("#obszar").val() != null && isNyLoaded) {
        isNyLoaded = false;
        tempToLoad = $("#obszar").val();
        var arr = tempToLoad.split("_");
        for (var i = 0; i < arr.length; i++) {
//            alert("len=" + tabClics.length + "\ntabClics[" + i + "]=" + tabClics[i] + "\narr[" + (i + 1) + "]=" + arr[i + 1])
            if (arr[i + 1] != undefined) {
                var text_temp = arr[i + 1];
                tabClics.push(text_temp);
                tabClics.sort();
            }
        }
    } else {
//        alert("null")
    }

//    alert("TABLICA1:(" + tabClics.toString() + ")")

    if (tabClics.length < ileImg && isFormObszar && !isNyLoaded) {
//        alert("Dopisuję element!")
        czyDopisać = true;
    } else {
        indexIntabClics = tabClics.indexOf(text)
//        alert("indexIntabClics=" + indexIntabClics)
        if (indexIntabClics >= 0) {
//            tabClics.splice(indexIntabClics, 1); // usówa 1 element w indexie
        }else{
            alert("Maksymalnie " + ileImg + " zaznaczonych elementów, usuń jeden!")
        }
    }

    var isIntabClics = false;

    for (var i = 0; i < tabClics.length; i++) {
        if (tabClics[i] == text) {
//            alert(tabClics[i] + " != " + text + ", przed:" + isIntabClics)
            isIntabClics = true;
//            alert(tabClics[i])
        }
    }

//    alert("text:'" + text + "', isIntabClics: " + isIntabClics)

    if (!isIntabClics && czyDopisać) {
        tabClics.push(text);
        tabClics.sort();
    } else {
        indexIntabClics = tabClics.indexOf(text)
//        alert("indexIntabClics=" + indexIntabClics)
        if (indexIntabClics >= 0) {
            tabClics.splice(indexIntabClics, 1); // usówa 1 element w indexie
        }
    }

//    alert("TABLICA2:(" + tabClics.toString() + ")")

    for (var i = 0; i < tabClics.length; i++) {
//        alert("length="+tabClics.length+", tabClics["+i+"]="+tabClics[i])
        toLoad += "_" + tabClics[i];
    }

//    alert("toLoad:" + toLoad + ", LEngth: " + toLoad.length);

    var coords = toLoad// + ", clics on '" + text + "':" + tabClics[text];// + ": coords: " + x + ", Y coords: " + y;
    var el = document.getElementById("obszar");
    el.innerHTML = coords;
    el.value = coords;


    function load_this(text) {
        if (text != null && text.length < longOfString) {
//            alert("load zaznacz")
            $('#map_img_image').attr('src', 'img/cycki_03/anatomy_03' + text + '.jpg');
            $('#gmipam_0_image').attr('src', 'img/cycki_03/anatomy_03' + text + '.jpg');
        } else {
//            alert("load czyste")
            $('#map_img_image').attr('src', 'img/cycki_03/anatomy_03.jpg');
            $('#gmipam_0_image').attr('src', 'img/cycki_03/anatomy_03.jpg');
        }
    }

    load_this(toLoad);
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
    switch (text) {
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
            Fintext = text.replace(re, " ");
//            Fintext = text
            break;
    }

    return Fintext;
}

