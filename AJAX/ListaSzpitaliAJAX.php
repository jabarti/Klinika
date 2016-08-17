<?php

/* * **************************************************
 * Project:     Klinika_Local
 * Filename:    ListaSzpitaliAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-08-16
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 * ************************************************* */
error_reporting(E_ERROR | E_PARSE);

require_once "../common.inc.php";
include '../DB/Connection.php';

$baza = "`bartilev_klinika`";


$valid = false;
$actions = '';
$error = "";
$SQL = '';
$outp = '';
$user = '';
$IP = '';
$info = '';

$where = "";

if (isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'init':
//            $where = " AND `czyNIESzpital` = false;";
            break;
        case 'search':
            $where = " AND `nazwa` LIKE '%" . $_POST['nazwa'] . "%';";
            break;
        case 'deleteSzpital':
            //kasujemy tylko jak szpital nie jest w jakimś formularzu wykorzystany!!
            
            
            break;
        case 'order':
            $var_search = $_POST['poczym'];
            $var_upordown = $_POST['updown'];
            $where = "";
            $order = "";

            if ($var_upordown == "down") {
                $order = "order by `$var_search` ASC";
            } else {
                $order = "order by `$var_search` DESC";
            }

            break;
    }
}

$SQL_Szpital = "SELECT * FROM $baza.`szpital` WHERE `czyNIESzpital` = false $where $order;";
$SQL .= "<br>SQL_Szpital: [$SQL_Szpital]";

$result = mysqli_query($DBConn, $SQL_Szpital);

$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($rows, $r);
}

$SQL_Szpital_w_Form = "SELECT  `id_SzpitalOrInne` FROM `fullform`;";
$SQL .= "<br>SQL_Szpital_w_Form: [$SQL_Szpital_w_Form]";

$result = mysqli_query($DBConn, $SQL_Szpital_w_Form);

$arr_of_szpit_in_forms = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($arr_of_szpit_in_forms, $r); 
}

array_push($rows, $arr_of_szpit_in_forms);



echo json_encode($rows);

