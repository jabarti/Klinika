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

//$id_wpisu = "1/2015";

if (isset($_POST['action'])) {

    switch ($_POST['action']) {

        case 'init':
            $id_wpisu = $_POST['id_wpisu'];
            break;
        
        case 'edit':
            $id_wpisu = $_POST['id_wpisu'];
            break;
        
        
        case 'delete':
            $id_record = $_POST['id_wpisu'];
            $SQL_Delete = "DELETE FROM $baza.`formularz` WHERE `ID_Wpisu`  = '$id_record';";
            mysqli_query($DBConn, $SQL_Delete);

            if (mysqli_query($DBConn, $SQL_Delete)) {
                $SQL_Delete_2 = "DELETE FROM $baza.`formularz_2` WHERE `ID_Wpisu`  = '$id_record';";
                mysqli_query($DBConn, $SQL_Delete_2);

                if (mysqli_query($DBConn, $SQL_Delete_2)) {
                    $SQL_Delete_3 = "DELETE FROM $baza.`formularz_3` WHERE `ID_Wpisu`  = '$id_record';";
                    mysqli_query($DBConn, $SQL_Delete_3);

                    if (mysqli_query($DBConn, $SQL_Delete_3)) {
                        $SQL_Delete_4 = "DELETE FROM $baza.`id_wpis_queue` WHERE `ID_Wpisu`  = '$id_record';";
                        mysqli_query($DBConn, $SQL_Delete_4);
                        if (mysqli_query($DBConn, $SQL_Delete_4)) {
                            
                        } else {
                            $error .= "[ERR: $SQL_Delete_4]";
                        }
                    } else {
                        $error .= "[ERR: $SQL_Delete_3]";
                    }
                } else {
                    $error .= "[ERR: $SQL_Delete_2]";
                }
            } else {
                $error .= "[ERR: $SQL_Delete]";
                echo json_encode($error);
            }
            break;

        default:

            break;
    }
}

// AKCJE SZUKANIA:

$SQL_get_Record = "SELECT * FROM `fullform` WHERE `ID_Wpisu` = '$id_wpisu'";
//echo "<br>SQL_get_Record: [$SQL_get_Record]<br>";

$result = mysqli_query($DBConn, $SQL_get_Record);

$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($rows, $r);
}

echo json_encode($rows);
