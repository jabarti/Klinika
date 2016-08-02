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

//$id_wpisu = '2/2016';
//$aktion = "editStart";
$id_wpisu = $request->absUrl;
$aktion = $request->aktion;

$outp = "";

switch($aktion){
    case "editStart":
//        $text .= "EditStart IN!";
//        echo __LINE__.$outp."</br>";

            $SQL_1 = "SELECT * FROM `Formularz` WHERE `ID_Wpisu` = '$id_wpisu';";
            $SQL_2 = "SELECT * FROM `Formularz_2` WHERE `Formularz_ID_Wpisu` = '$id_wpisu';";
            $SQL_3 = "SELECT * FROM `Formularz_3` WHERE `Formularz_ID_Wpisu` = '$id_wpisu';";


            $result_1 = mysqli_query($DBConn, $SQL_1);
            $result_2 = mysqli_query($DBConn, $SQL_2);
            $result_3 = mysqli_query($DBConn, $SQL_3);

            $Wartosci_1=mysqli_fetch_assoc($result_1);
            $Wartosci_2=mysqli_fetch_assoc($result_2);
            $Wartosci_3=mysqli_fetch_assoc($result_3);
            
//            var_dump($Wartosci_1);
            
            $outp = array_merge($Wartosci_1, $Wartosci_2, $Wartosci_3);
            
        break;
    default:
        $err .= "default IN!";
        break;
}

echo json_encode($outp);

//foreach ($outp as $k => $v){
//    echo "<br>$k => $v";
//}