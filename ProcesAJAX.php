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

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    // ???????????????????????????????????? //
//        $db = $request->db;
//        switch($db){
//            case "Formularz":
//                break;
//            case "Matka":
//                break;
//            case "Szpital":
//                break;
//            default:
//                break;
//        }
    
       $ID_Wpisu  =                     $request->ID_Wpisu;
       $data_utworzenia =               $request->data_utworzenia;
       
       $mama_firstname =                $request->mama_firstname;
       $mama_lastname =                 $request->mama_lastname;     
       $data_urodzenia_matka =          $request->data_urodzenia_matka;
       
       $ulica =                         $request->ulica;
       $ulica_nr =                      $request->ulica_nr;
       $ulica_nr_mieszkanie =           $request->ulica_nr_mieszkanie;     
       $kod_poczt =                     $request->kod_poczt;     
       $miasto =                        $request->miasto;    
       $telefon =                       $request->telefon;    
       $email =                         $request->email;    
       
       $imie_dziecka =                  $request->imie_dziecka;    
       $data_urodzenia_dziecko=         $request->data_urodzenia_dziecko;
       $ktore_dziecko=                  $request->ktore_dziecko;
       
       $miejsce_urodzenia_quest=        $request->miejsce_urodzenia_quest;
       $miejsce_urodzenia=              $request->miejsce_urodzenia;
       $urodz_ulica=                    $request->urodz_ulica;
       $urodz_ulica_nr=                 $request->urodz_ulica_nr;
       $urodz_ulica_nr_mieszkanie=      $request->urodz_ulica_nr_mieszkanie;
       $urodz_kod_poczt=                $request->urodz_kod_poczt;
       $urodz_miasto=                   $request->urodz_miasto;
       $urodzone_czas=                  $request->urodzone_czas;
       $ile_wczesniej=                  $request->ile_wczesniej;
       $porod=                          $request->porod;
       $jaki_porod=                     $request->jaki_porod;
       
    
    $dataWpisuCallback =    $ID_Wpisu.", ".
                            $data_utworzenia.", ".
                            $imie_dziecka.", ".
                            $data_urodzenia_dziecko.", ".
                            $ktore_dziecko.", ".
                            $miejsce_urodzenia.", ".
                            $urodz_ulica.", ".
                            $urodz_ulica_nr.", ".
                            $urodz_ulica_nr_mieszkanie.", ".
                            $urodz_kod_poczt.", ".
                            $urodz_miasto.", "
                            ;

    $dataMamaCallback =     $mama_firstname.", ".
                            $mama_lastname.", ".
                            $data_urodzenia_matka.", ".
                            $ulica.", ".
                            $ulica_nr.", ".
                            $ulica_nr_mieszkanie.", ".
                            $telefon.", ".
                            $email.", "
                            ; 
    
    $dataSzpitalCallback =  $miejsce_urodzenia.", ".
                            $urodz_ulica.", ".
                            $urodz_ulica_nr.", ".
                            $urodz_ulica_nr_mieszkanie.", ".
                            $urodz_kod_poczt.", ".
                            $urodz_miasto.", "
                            ;
//this will go back under "data" of angular call.
    
    // Wprowadzanie do tab. MATKA
    if($mama_firstname != ""){
//        echo "Mama firstname =($mama_firstname)";
        
        $data = substr($data_urodzenia_matka, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
//        $data1 = substr($data_utworzenia, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
//        $data2 = substr($data_urodzenia_dziecko, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
        
//        echo ", Matka[$data], Dziecko[$data2], Formularz[$data1]";
        
        // czy figuruje w BD taka matka!!
        $MamaTESTsql = "SELECT idMatka FROM `Matka` WHERE `mama_firstname` = '$mama_firstname' "
                        . "AND `mama_lastname` = '$mama_lastname' AND `data_urodzenia_matka` = '$data' LIMIT 1;";
        
//        echo "($MamaTESTsql)($data_urodzenia_matka)($data)";
        $MamaSql_q_TEST = mysqli_query($DBConn,$MamaTESTsql);
                
        if($MamaSql_q_TEST){
            $row = mysqli_fetch_array($MamaSql_q_TEST);

            if($row[0]>0){
                $TEST_ID_MAMA = false;
                $Last_Mama_ID = $row[0];
//                echo ", (MAMA W BAZIE JUŻ - [$row[0]])";
            }else{
                $TEST_ID_MAMA = true;
//                $Last_Mama_ID = $row[0];
//                echo ", brak ID MAMY(row:$row[0])";
            }
            
        }
        
        // Jeśli mamy NIE ma w BD, wstawiamy nowy rekord
        if($TEST_ID_MAMA){
            $MamaSql = "INSERT INTO `bartilev_Klinika`.`Matka` (`mama_firstname`, `mama_lastname`, `data_urodzenia_matka`, `ulica`, "
                    . "`ulica_nr`, `ulica_nr_mieszkanie`, `kod_poczt`, `miasto`, `telefon`, `email`) "
                    . "VALUES ( '$mama_firstname', '$mama_lastname', '$data_urodzenia_matka', '$ulica', "
                    . "'$ulica_nr', '$ulica_nr_mieszkanie', '$kod_poczt', '$miasto', '$telefon', '$email');";

            $MamaSql_q = mysqli_query($DBConn,$MamaSql);

            if($MamaSql_q){
                echo ", MAMA insert OK: [$dataMamaCallback]";
//                  $Last_Mama_ID = mysqli_insert_id($MamaSql_q);
//                  echo ", PO mysqli_insert_id: [$Last_Mama_ID]";
//                          $data = substr($data_urodzenia_matka, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
        
                            // czy figuruje w BD taka matka!!
//                            $MamaTESTsql = "SELECT idMatka FROM `Matka` WHERE `mama_firstname` = '$mama_firstname' "
//                                . "AND `mama_lastname` = '$mama_lastname' AND `data_urodzenia_matka` = '$data' LIMIT 1;";
        
                            //        echo "($MamaTESTsql)($data_urodzenia_matka)($data)";
                            $MamaSql_q_TEST = mysqli_query($DBConn,$MamaTESTsql);
                            $row = mysqli_fetch_array($MamaSql_q_TEST);
                            $Last_Mama_ID = $row[0];
                  
            }else{
                echo ", MAMA insert nie OK: [$MamaSql]";
            }
        }
    }
    
    echo ', $Last_Mama_ID = ['.$Last_Mama_ID."]" ;
    
    function in_arrayi($needle, $haystack) {
        return in_array(strtolower($needle), array_map('strtolower', $haystack));
    }
        
    $arr = explode(" ",$miejsce_urodzenia);
    
    $szpital_ord = array("szpital", "zespół", "klinika", "nzoz", "położnicze");
    
    foreach($szpital_ord as $ord){
        if(in_arrayi($ord, $arr)){ 
            $IsSzpital = true;
//            echo "('$ord' TO szpital true)";
            break;
        }else{
            $IsSzpital = false;
//            echo "(TO szpital false)";
        }
    }
  
    if($IsSzpital || $miejsce_urodzenia_quest == 0){
//        echo ", WCHODZE DO SZPITALA!!!!";
        $SzpitalSql = "INSERT INTO `bartilev_Klinika`.`Szpital` (`nazwa`, `urodz_ulica`, `urodz_ulica_nr`, `urodz_ulica_nr_mieszkanie`, `urodz_kod_poczt`, `urodz_miasto`) "
                . "VALUES ('$miejsce_urodzenia', '$urodz_ulica', '$urodz_ulica_nr', NULL, '$urodz_kod_poczt', '$urodz_miasto');";

        $SzpitalSql_q = mysqli_query($DBConn,$SzpitalSql);

        if($SzpitalSql_q){
//            echo ", Szpital insert OK: $dataSzpitalCallback";
            echo ", Szpital insert OK: $dataSzpitalCallback";
        }else{
            echo ", Szpital insert nie OK: $SzpitalSql";
        }
    }
    
        $dataWpisuCallback =    $ID_Wpisu.", ".
                                $data_utworzenia.", ".
                                $imie_dziecka.", ".
                                $data_urodzenia_dziecko.", ".
                                $ktore_dziecko.", ".
                                $miejsce_urodzenia.", ".
                                $urodz_ulica.", ".
                                $urodz_ulica_nr.", ".
                                $urodz_ulica_nr_mieszkanie.", ".
                                $urodz_kod_poczt.", ".
                                $urodz_miasto.", "
                                ;
    
    
    if(true){
//        echo ", Wchodzę do Formularza";
        
        $sql_which_wpis = "SELECT ID_Wpisu FROM `Formularz` WHERE year(`data_utworzenia`) = year('$data_utworzenia') order by ID_Wpisu desc limit 1";
        mysqli_query($DBConn,$sql_which_wpis);
        $row = mysqli_fetch_array(mysqli_query($DBConn,$sql_which_wpis));
//        echo ", OST ID_Wpis: [$row[0]]]";
        $arrID = split('/',$row[0]);
//        echo ", NEW ID_Wpis: [$arrID[0]]";
        $id_temp = $arrID[0]+1;
//        echo ", NEW ID_Wpis: [$id_temp]";
        
        $FormularzSql = "INSERT INTO `bartilev_Klinika`.`Formularz` ( `ID_Wpisu`, `data_utworzenia`, `Matka_idMatka`, `imie_dziecka`, `data_urodzenia_dziecko`, `ktore_dziecko`, `miejsce_urodzenia`, `urodz_ulica`, `urodz_ulica_nr`, `urodz_ulica_nr_mieszkanie`, `urodz_kod_poczt`, `urodz_miasto` ,`urodzone_czas`, `ile_wczesniej`, `porod`, `jaki_porod`) "
                . "VALUES ('$id_temp', '$data_utworzenia', '$Last_Mama_ID', '$imie_dziecka', '$data_urodzenia_dziecko', '$ktore_dziecko', '$miejsce_urodzenia', '$urodz_ulica', '$urodz_ulica_nr', '$urodz_ulica_nr_mieszkanie', '$urodz_kod_poczt', '$urodz_miasto', '$urodzone_czas', '$ile_wczesniej', '$porod', '$jaki_porod');";
        
        $FormularzSql_q = mysqli_query($DBConn,$FormularzSql);
        
        if($FormularzSql){
            echo ", Formularz insert OK: [$dataWpisuCallback]";
        }else{
            echo ", Formularz insert NOT OK";
        }
    }

    
//    echo $dataWpisuCallback.$dataMamaCallback;