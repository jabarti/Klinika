<?php

/****************************************************
 * Project:     Klinika
 * Filename:    ProcesAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-06-20
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
include 'DB/Connection.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$baza = "`bartilev_klinika`";

$var_search = $_GET["var_search"];
$var_upordown = $_GET["var_upordown"];
if($var_upordown == "down"){
    $how = "ASC";
}else{
    $how = "DESC";
}

$SQL_View_mama_dziecko = "SELECT * FROM $baza.`view_matka_dziecko` order by `$var_search` $how;";

$result = mysqli_query($DBConn, $SQL_View_mama_dziecko);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"ID_Wpisu":"'  . $rs["ID_Wpisu"] . '",';
    $outp .= '"data_utworzenia":"'  . $rs["data_utworzenia"] . '",';
    $outp .= '"mama_firstname":"'  . $rs["mama_firstname"] . '",';
    $outp .= '"mama_lastname":"'   . $rs["mama_lastname"]        . '",';
    $outp .= '"imie_dziecka":"'   . $rs["imie_dziecka"]        . '",';
    $outp .= '"ktore_dziecko":"'. $rs["ktore_dziecko"]    . '"}'; 
}
$outp ='{"records":['.$outp.']}';
//$conn->close();

echo($outp);
