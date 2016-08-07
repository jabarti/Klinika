<?php

/****************************************************
 * Project:     Klinika
 * Filename:    QuerryAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-06-22
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
// Zapobiega wyświetlaniu warningów, dzięki czemu ajax działa lepiej
error_reporting(E_ERROR | E_PARSE);

include 'DB/Connection.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$baza = "`bartilev_klinika`";

$SQL_View_mama_dziecko = "SELECT * FROM $baza.`view_matka_dziecko`;";

$result = mysqli_query($DBConn, $SQL_View_mama_dziecko);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID_Wpisu":"'  . $rs["ID_Wpisu"] . '",';
    $outp .= '"data_utworzenia":"'  . $rs["data_utworzenia"] . '",';
    $outp .= '"mama_firstname":"'  . $rs["mama_firstname"] . '",';
    $outp .= '"mama_lastname":"'   . $rs["mama_lastname"]        . '",';
    $outp .= '"imie_dziecka":"'   . $rs["imie_dziecka"]        . '",';
    $outp .= '"ktore_dziecko":"'. $rs["ktore_dziecko"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
//$conn->close();

echo($outp);