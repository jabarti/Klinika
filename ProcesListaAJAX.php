<?php

/****************************************************
 * Project:     Klinika
 * Filename:    ProcesListaAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-06-20
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
include 'DB/Connection.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$baza = "`bartilev_klinika`";
$where = "";
$order = "";

if(isset($_GET["var_search"])){
    $var_search = $_GET["var_search"];
    $var_upordown = $_GET["var_upordown"];

    if($var_upordown == "down"){
        $order = "order by `$var_search` ASC";
    }else{
        $order = "order by `$var_search` DESC";
    }
}

if(isset($_GET['mama_lastname'])){
    $mama_lastname  = $_GET['mama_lastname'];

    if ($mama_lastname == ""){
        $where = "";
    }else{
        $where = "WHERE `mama_lastname` LIKE '%$mama_lastname%'";
    }
}

$SQL_View_mama_dziecko = "SELECT * FROM $baza.`view_matka_dziecko` $where $order;";

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
