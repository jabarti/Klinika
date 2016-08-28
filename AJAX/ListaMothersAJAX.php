<?php

/****************************************************
 * Project:     Klinika_Local
 * Filename:    ListaMothersAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-08-27
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
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
            $where = " WHERE LOWER(`mama_firstname`) LIKE LOWER('%" . $_POST['nazwa_matki'] . "%') OR LOWER(`mama_lastname`) LIKE LOWER('%" . $_POST['nazwa_matki'] . "%')";
            break;
        case 'deleMatka':
            //kasujemy tylko jak szpital nie jest w jakimś formularzu wykorzystany!!
            $SQL_del = "DELETE FROM $baza.`matka` WHERE `idMatka` = '".$_POST['idMatka']."';";
            $mq = mysqli_query($DBConn, $SQL_del);
            if($mq){
                
            }else{
                
            }
            
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

$SQL_Matka = "SELECT * FROM $baza.`matka` $where $order;";
$SQL .= "<br>SQL_Matka: [$SQL_Matka]";

$result = mysqli_query($DBConn, $SQL_Matka);

$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($rows, $r);
}

$SQL_Matka_w_Form = "SELECT `Matka_idMatka` FROM $baza.`FullForm`;";
$SQL .= "<br>SQL_Matka_w_Form: [$SQL_Matka_w_Form]";

$result = mysqli_query($DBConn, $SQL_Matka_w_Form);

$arr_of_matka_in_forms = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($arr_of_matka_in_forms, $r); 
}

array_push($rows, $arr_of_matka_in_forms);
array_push($rows, $SQL);



echo json_encode($rows);


