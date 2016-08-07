<?php

/* * **************************************************
 * Project:     Klinika_Local
 * Filename:    index.php
 * Encoding:    UTF-8
 * Created:     2016-08-05
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 * ************************************************* */
require_once "common.inc.php";
include 'DB/Connection.php';
include 'View/Static/header.html';

if (isset($_SESSION["user"]) && isset($_SESSION["logCrud"])) {
    include 'View/Static/Menu_PHP.html';

    if (isset($_GET['page'])) {
        $page = $_GET['page'];
    } else {
        $page = "";
    }

//    echo "<br>PAGE: ".$page;

    switch ($page) {
        case 'nyform':
            include 'Formularz.php';
            break;
        case 'list':
            include 'Lista.php';
            break;
        case 'edit':
            include 'Edit.php';
            break;
        case 'EditCrud':
            include 'Formularz.php';
            break;
        default:
            include 'View/Static/ShowCrud.html';
            break;
    }
} else {
    include 'View/Static/Login.html';
}
?>

<?php

include 'View/Static/footer.html';

if($TEST_VER){
    include 'TEST_DATA/test_data.php';
}
