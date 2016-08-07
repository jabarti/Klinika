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

if(isset($request->absUrl)&&isset($request->aktion)){
    $id_wpisu = $request->absUrl;
    $aktion = $request->aktion;
}else{
    $id_wpisu = '4/2016';
    //$aktion = "editStart";
    $aktion = "EditSubmit";
}

$arr_form = array();
$outp = "";

function getData ( $DBConn, $id ){
    
    $SQL_all = "SELECT * FROM `fullform` WHERE `ID_Wpisu`= '$id';";
    
    $result_a = mysqli_query($DBConn, $SQL_all);
    
    $outp = mysqli_fetch_assoc($result_a);
    
    $temp ='{ name: "Course", fields: [';
    
    foreach ($outp as $k => $v ){
//        echo "<br>$k => $v";
        switch($k){
            case "data_utworzenia":
            case "data_urodzenia_matka":
            case "data_urodzenia_dziecko":
            case "data_01":
            case "data_02":
            case "data_03a":
            case "data_03a":
            case "data_03b":
            case "data_03c":
            case "data_03d":
            case "data_03e":
            case "data_03f":
            case "data_04":
                $temp .= '{type: "date", name: "'.$k.'", label: "'.$k.'" , data:"'.$v.'"},';
                break;
            case "ID_Wpisu":
                $temp .= '{type: "text", name: "'.$k.'", label: "'.$k.'" , data:"'.$v.'", disabled},';
                break;
            case "mama_firstname":
            case "mama_lastname":
            case "ulica":
            case "ulica_nr":
            case "ulica_nr_mieszkanie":
            case "kod_poczt":
            case "miasto":
            case "telefon":
            case "imie_dziecka":
            case "ile_wczesniej":
                $temp .= '{type: "text", name: "'.$k.'", label: "'.$k.'" , data:"'.$v.'"},';
                break;
            case "zalecenia_inne":      // ostatnie bez przecinka!
                $temp .= '{type: "text", name: "'.$k.'", label: "'.$k.'" , data:"'.$v.'"}';
                break;
            case "ktore_dziecko":
                $temp .= '{type: "number", name: "'.$k.'", label: "'.$k.'" , data:'.$v.'},';
                break;
            case "email":
                $temp .= '{type: "email", name: "'.$k.'", label: "'.$k.'" , data:"'.$v.'"},';
                break;
            case "porod":
                $temp .= '{type: "select", name: "'.$k.'", label: "'.$k.'" , options:[{name: "normalny"},{name: "zabiegowy"}], data:"'.$v.'"},';
                break;
            case "urodzone_czas":
                $temp .= '{type: "select", name: "'.$k.'", label: "'.$k.'" , options:[{name: "o czasie"},{name: "wcześniej"},{name: "później"}], data:"'.$v.'"},';
                break;
            default:
                break;
        }
    }
    
//    $outp = array_merge($Wartosci_1, $Wartosci_2, $Wartosci_3);
    $temp .= "]}";
    
//    echo "<br>$temp<br>";
    
//    return ($outp);
    return ($temp);
}

function setData ( $DBConn, $request ){
    
}

switch($aktion){
    case "editStart":
//        $text .= "EditStart IN!";
//        echo __LINE__.$outp."</br>";
        $id_wpisu = '4/2016';

            $outp = getData ( $DBConn, $id_wpisu );
        
            echo json_encode($outp);
//            echo $outp;
        break;
    
    case "EditSubmit":
//        $text .= "EditStart IN!";
//        echo __LINE__.$aktion."</br>";
        $id_wpisu = "3/2016";


            $outp = getData ( $DBConn, $id_wpisu );
            
//            var_dump($outp);
        
            echo json_encode($outp);
            
        break;
    default:
        $err .= "default IN!";
        echo "default IN!";
        break;
}

//foreach ($outp as $k => $v){
//    echo "<br>$k => $v";  
//}
