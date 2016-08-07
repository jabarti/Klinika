<?php

/* * **************************************************
 * Project:     Klinika_Local
 * Filename:    EditAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-08-06
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

//$Fin_Arr = array(
//    "valid" => false,
//    "actions" => $actions,
//    "error" => $error,
//    "SQL" => $SQL,
//    "outp" => $outp,
//    "user" => $user,
//    "IP" => $IP,
//    "info" => $info);

if (isset($_POST['action'])) {
    $actions .= "AKCJA JEST: (" . $_POST['action'] . ")";

    foreach ($_POST as $k => $v) {
        $outp .= "<br>'$k' => '$v',";
    }

    switch ($_POST['action']) {
        
        case 'search':
            $info .= "AKCJA: searcz";
            break;
        
        default:
            $info .= "AKCJA: default";
            break;
    }
}

$Fin_Arr = array(
    "valid" => false,
    "actions" => $actions,
    "error" => $error,
    "SQL" => $SQL,
    "outp" => $outp,
    "user" => $user,
    "IP" => $IP,
    "info" => $info);

echo json_encode($Fin_Arr);
