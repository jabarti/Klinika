/****************************************************
 * Project:     Klinika_Local
 * Filename:    MenuController.js
 * Encoding:    UTF-8
 * Created:     2016-08-05
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$(document).ready(function () {

    $("#toNewForm").click(function () {
//        alert("To new Form");
        window.location.href = 'index.php?page=nyform';
    });

    $("#toLista").click(function () {
        alert("To Lista / W budowie");
        window.location.href = 'index.php?page=list';
    });

    $("#toEdit").click(function () {
        alert("To Edycja / W budowie");
//        window.location.href = 'index.php?page=edit';
    });

    $("#buttChangeCrud").click(function () {
//        preventDefault();
        alert("To User EDit / W budowie");
//        window.location.href = 'index.php?page=EditCrud';
    });

});

