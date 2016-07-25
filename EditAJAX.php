<?php

/****************************************************
 * Project:     Klinika_Local
 * Filename:    EditAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-07-21
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
include 'DB/Connection.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$baza = "`bartilev_klinika`";

$uri = $_SERVER['REQUEST_URI'];
//echo $_SERVER['REQUEST_URI']."</br>";

$id_wpisu = $request->absUrl;
$aktion = $request->aktion;

$SQL_1 = "";
$SQL_2 = "";
$SQL_3 = "";
$text = "";

switch($aktion){
    case "editStart":
        $text .= "EditStart IN!";
        $SQL_1 = "SELECT * FROM `Formularz` WHERE `ID_Wpisu` = $id_wpisu;";
        $SQL_2 = "SELECT * FROM `Formularz_2` WHERE `Formularz_ID_Wpisu` = $id_wpisu;";
        $SQL_3 = "SELECT * FROM `Formularz_3` WHERE `Formularz_ID_Wpisu` = $id_wpisu;";
        break;
    default:
        $text .= "default IN!";
        break;
}

$text .= $aktion;

$Fin_Arr = array(
    'text'=>"$text", 
    'uri'=>"$uri", 
    'id_wpisu'=>"$id_wpisu",
    'sql'=>"($SQL_1)($SQL_2)($SQL_3)"
    );

echo json_encode($Fin_Arr);