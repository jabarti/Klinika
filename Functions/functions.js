/****************************************************
 * Project:     Klinika
 * Filename:    functions.js
 * Encoding:    UTF-8
 * Created:     2016-06-18
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/

//$(function () {
//    $('.map').maphilight();
//});

//(function(jQuery) {
//  $('#polygon').canvasAreaDraw({
//    imageUrl: "http://example.com/image.png"
//  });
//})(jQuery);

function showCoordsCyca(event,text){
        var x = event.clientX;
        var y = event.clientY;
        var coords = text+" coords: " + x + ", Y coords: " + y;
        var el = document.getElementById("cords");
        el.innerHTML = coords;
        var el2 = document.getElementById("cords2");
        el2.value = coords;
//        alert(text)
        switch(text){
            case "rec1":
                el.style.backgroundColor = "red";
                break;
            case "rec2":
                el.style.backgroundColor = "yellow";
                break;
            case "rec3":
                el.style.backgroundColor = "green";
                break;
            case "rec4":
                el.style.backgroundColor = "brown";
                break;
            case "rec5":
                el.style.backgroundColor = "orange";
                break;
            case "rec6":
                el.style.backgroundColor = "pink";
                break;
                
            default:
                el.style.backgroundColor = "white";
                break
        }
}

function showOUTCoordsCyca(event){
        var x = event.clientX;
        var y = event.clientY;
        var coords = " coordsOUT: " + x + ", Y coords: " + y;
        var el = document.getElementById("cords");
        el.innerHTML = coords;
        alert("OUT")
        el.style.backgroundColor = "black";
}


// Popover w formularzu na przykład (ID_Wpis)
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});


