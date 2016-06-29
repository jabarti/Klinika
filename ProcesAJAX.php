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
include 'Functions/functions.php';

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
          
       $ID_Wpisu  =                     $request->ID_Wpisu;
       $data_utworzenia =               parse_date($request->data_utworzenia);
       
       $mama_firstname =                $request->mama_firstname;
       $mama_lastname =                 $request->mama_lastname;     
       $data_urodzenia_matka =          parse_date($request->data_urodzenia_matka);
       
       $ulica =                         $request->ulica;
       $ulica_nr =                      $request->ulica_nr;
       $ulica_nr_mieszkanie =           $request->ulica_nr_mieszkanie;     
       $kod_poczt =                     $request->kod_poczt;     
       $miasto =                        $request->miasto;    
       $telefon =                       $request->telefon;    
       $email =                         $request->email;    
       
       $imie_dziecka =                  $request->imie_dziecka;    
       $data_urodzenia_dziecko=         parse_date($request->data_urodzenia_dziecko);
       $ktore_dziecko=                  $request->ktore_dziecko;
       
       $miejsce_urodzenia_quest=        $request->miejsce_urodzenia_quest;
       $miejsce_urodzenia=              $request->miejsce_urodzenia;
       $urodz_ulica=                    $request->urodz_ulica;
       $urodz_ulica_nr=                 $request->urodz_ulica_nr;
       $urodz_ulica_nr_mieszkanie=      $request->urodz_ulica_nr_mieszkanie;
       $urodz_kod_poczt=                $request->urodz_kod_poczt;
       $urodz_miasto=                   $request->urodz_miasto;
       $urodz_kraj=                     $request->urodz_kraj;

       $urodzone_czas=                  $request->urodzone_czas;
       $ile_wczesniej=                  $request->ile_wczesniej;
       $porod=                          $request->porod;
       $jaki_porod=                     $request->jaki_porod;
       $leki_porod=                     $request->leki_porod;
       $leki_polog=                     $request->leki_polog;
       $powod_zgloszenia=               $request->powod_zgloszenia;
       
       // Formularz_2
       
       $pierwsze_karmienie =            $request->pierwsze_karmienie;
       $problem_dziecko =               $request->problem_dziecko;
       $problem_dziecko_opis =          $request->problem_dziecko_opis;
       $problem_mama =                  $request->problem_mama;
       $problem_mama_opis =             $request->problem_mama_opis;
       $karimienie_piersia =            $request->karimienie_piersia;
       $karimienie_piersia_opis =       $request->karimienie_piersia_opis;
       $kapturek =                      $request->kapturek;
       $kapturek_opis =                 $request->kapturek_opis;
       $dopajanie =                     $request->dopajanie;
       $dopajanie_czym =                $request->dopajanie_czym;
       $dopajanie_jak_dlugo =           $request->dopajanie_jak_dlugo;
       $dopajanie_opis =                $request->dopajanie_opis;
       $nawal =                         $request->nawal;
       $nawal_opis =                    $request->nawal_opis;
       $pobyt =                         $request->pobyt;
       $karmienie_piers =               $request->karmienie_piers;
       $karmienie_piers_czest =         $request->karmienie_piers_czest;
       $karmienie_piers_dlugo=          $request->karmienie_piers_dlugo;
       $kapturek2 =                     $request->kapturek2;
       $kapturek2_opis =                $request->kapturek2_opis;
       $dopajanie2 =                    $request->dopajanie2;
       $dopajanie2_czym =               $request->dopajanie2_czym;
       $dopajanie2_jak_dlugo =          $request->dopajanie2_jak_dlugo;
       $dopajanie2_opis =               $request->dopajanie2_opis;
       $karmienie_noc =                 $request->karmienie_noc;
       $karmienie_noc_opis =            $request->karmienie_noc_opis;
       $sciaganie_pokarm =              $request->sciaganie_pokarm;
       $sciaganie_pokarm_cel =          $request->sciaganie_pokarm_cel;
       $sciaganie_pokarm_ile =          $request->sciaganie_pokarm_ile;
       $pieluchy =                      $request->pieluchy;
       $stolec =                        $request->stolec;
       $aktywnosc =                     $request->aktywnosc;
       $zachowanie_karmienia =          $request->zachowanie_karmienia;
       $kolka =                         $request->kolka;
       $uspokajacz =                    $request->uspokajacz;
       $uspokajacz_opis =               $request->uspokajacz_opis;
       $leki_matka =                    $request->leki_matka;
       $leki_dziecko =                  $request->leki_dziecko;
       
       // Formularz3
       $piers_wielkosc =                  $request->piers_wielkosc;
       
        echo "($data_utworzenia)($data_urodzenia_matka)($data_urodzenia_dziecko)";
        
//        echo "[".parse_date($data_utworzenia)."]";
//        parse_date($data_utworzenia);
       
    
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
        
//        $data = substr($data_urodzenia_matka, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
        
//        echo ", Matka[$data], Dziecko[$data2], Formularz[$data1]";
        
        // czy figuruje w BD taka matka!!
        $MamaTESTsql = "SELECT idMatka FROM `Matka` WHERE `mama_firstname` = '$mama_firstname' "
                        . "AND `mama_lastname` = '$mama_lastname' AND `data_urodzenia_matka` = '$data_urodzenia_matka' LIMIT 1;";
        
//        echo "($MamaTESTsql)($data_urodzenia_matka)($data)";
        $MamaSql_q_TEST = mysqli_query($DBConn,$MamaTESTsql);
                
        if($MamaSql_q_TEST){
            $row = mysqli_fetch_array($MamaSql_q_TEST);

            if($row[0]>0){
                $TEST_ID_MAMA = false;
                $Last_Mama_ID = $row[0];
                echo ", (MAMA W BAZIE JUŻ - [$row[0]])";
            }else{
                $TEST_ID_MAMA = true;
//                $Last_Mama_ID = $row[0];
                echo ", brak ID MAMY(row:$row[0])";
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
//                echo ", MAMA insert OK: [$dataMamaCallback]";
//                 $data = substr($data_urodzenia_matka, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
        
                // czy figuruje w BD taka matka!!
                $MamaTESTsql = "SELECT `idMatka` FROM `Matka` WHERE `mama_firstname` = '$mama_firstname' "
                    . "AND `mama_lastname` = '$mama_lastname' AND `data_urodzenia_matka` = '$data_urodzenia_matka' LIMIT 1;";
        
//                echo "($MamaTESTsql)($data_urodzenia_matka)($data)";
                
                $MamaSql_q_TEST = mysqli_query($DBConn,$MamaTESTsql);
                $row = mysqli_fetch_array($MamaSql_q_TEST);
                $Last_Mama_ID = $row[0];
                  
            }else{
                echo ", MAMA insert nie OK: [$MamaSql]";
            }
        }
    }
    
//    echo ', $Last_Mama_ID = ['.$Last_Mama_ID."]" ;
    
    if($miejsce_urodzenia_quest == 0){
        // test czy taki szpital już jest w BD
        $TakeLastIdSzpit = "SELECT `idSzpital` FROM `Szpital` WHERE `nazwa` = '$miejsce_urodzenia' AND `urodz_ulica` = '$urodz_ulica' LIMIT 1;;";
        $mysql_q1 = mysqli_query($DBConn,$TakeLastIdSzpit);

        if (mysqli_num_rows($mysql_q1) > 0) {
            while($row = mysqli_fetch_assoc($mysql_q1)) {
                echo "id: " . $row['idSzpital'];
                $ID_last_con = $row['idSzpital'];
            }
            $CzyIdwBD = true;
            echo "[BYŁ SZPITAL w BD]";
        }else{
            $CzyIdwBD = false;
            echo "[NIE BYŁO SZPITAL w BD]";
        }
    }else{
        // test czy taki InneMiejsce już jest w BD
        $TakeLastIdIM = "SELECT `idInne_miejsca` FROM `Inne_miejsca` WHERE `nazwa` = '$miejsce_urodzenia' LIMIT 1;";
        $mysql_q1 = mysqli_query($DBConn,$TakeLastIdIM);

        if (mysqli_num_rows($mysql_q1) > 0) {
            while($row = mysqli_fetch_assoc($mysql_q1)) {
    //            echo "id: " . $row['idSzpital'];
                $ID_last_con = $row['idInne_miejsca'];
                $CzyIdwBD = true;
            }
            echo "[BYŁO InneMiejsce w BD]";
        }else{
            $CzyIdwBD = false;
            echo "[NIE BYŁO InneMiejsce w BD]";
        }
    }
    
//    echo ",  ID last[ $ID_last_con][$TakeLastId] , ";
    
//    if($ID_last_con != 0){
//        $CzyIdSzpitalWBD = true;
//    }else{
//        $CzyIdSzpitalWBD = false;
//    }
    
//    echo ", BOOL:[".var_export($CzyIdSzpitalWBD, true)."]";
    if($miejsce_urodzenia == ""){
        $czyPustaNazwa = true;
    }else{
        $czyPustaNazwa = false;
    }
    
    echo ", Pusta nazwa:($miejsce_urodzenia)[$czyPustaNazwa]";
  
    if($miejsce_urodzenia_quest == 0 && !$CzyIdwBD && !$czyPustaNazwa){
//        echo ", [WCHODZE DO INSERT SZPITALA!!!!]";
        $SzpitalSql = "INSERT INTO `bartilev_Klinika`.`Szpital` (`nazwa`, `urodz_ulica`, `urodz_ulica_nr`, `urodz_ulica_nr_mieszkanie`, `urodz_kod_poczt`, `urodz_miasto`, `urodz_kraj`) "
                . "VALUES ('$miejsce_urodzenia', '$urodz_ulica', '$urodz_ulica_nr', NULL, '$urodz_kod_poczt', '$urodz_miasto', '$urodz_kraj');";

        $SzpitalSql_q = mysqli_query($DBConn,$SzpitalSql);
               
        if($SzpitalSql_q){
//            echo ", Szpital insert OK: $dataSzpitalCallback";
//            echo ", Szpital insert OK: $dataSzpitalCallback";
//            echo ", Szpital insert OK";
//            $TakeLastId = "SELECT `idSzpital` FROM `Szpital` WHERE `nazwa` = '$miejsce_urodzenia' AND `urodz_ulica` = '$urodz_ulica';";
//            $mysql_q1 = mysqli_query($DBConn,$TakeLastId);
//            $row_id = mysql_fetch_assoc($mysql_q1);
//            $ID_last_con = $row_id[0];
//            echo ",  ID last[$ID_last_con][$TakeLastId] , ";
            
        }else{
            echo ", Szpital insert nie OK: $SzpitalSql";
        }
    }else if($miejsce_urodzenia_quest == 1 && !$CzyIdwBD && !$czyPustaNazwa){
//        echo ", [WCHODZE DO INSERT InneMiejsce!!!!]";
        $InneMiejsceSql = "INSERT INTO `bartilev_Klinika`.`Inne_miejsca` "
                . "(`idInne_miejsca`, `nazwa`, `place_ulica`, `place_nr`, `place_nr_mieszkanie`, "
                . "`place_kod_poczt`, `place_miasto`, `place_kraj`) "
                . "VALUES (NULL, '$miejsce_urodzenia', '$urodz_ulica', '$urodz_ulica_nr', '$urodz_ulica_nr_mieszkanie', '$urodz_kod_poczt', '$urodz_miasto', '$urodz_kraj');";

        $InneMiejsceSql_q = mysqli_query($DBConn,$InneMiejsceSql);
//        $ID_last_con =  LAST_INSERT_ID();

        if($InneMiejsceSql_q){
//            echo ", Szpital insert OK: $dataSzpitalCallback";
//            echo ", Inne miejsce insert OK: $InneMiejsceSql";
            //            echo ", Szpital insert OK: $dataSzpitalCallback";
        }else{
            echo ", Szpital insert nie OK: $InneMiejsceSql";
        }
    }else{
        echo ", Ani szpital ani InneMiejsce!!!) ";
    }
       
//    echo ",  ID last[ $ID_last_con][$TakeLastId] , ";
    
  
//        echo ", Wchodzę do Formularza";
//        echo ", ID ostatniego miejsca: [$ID_last_con]";
        $sql_which_wpis = "SELECT `ID_Wpisu` FROM `Formularz` WHERE year(`data_utworzenia`) = year('$data_utworzenia');";
        $mq_01 = mysqli_query($DBConn,$sql_which_wpis);
        
        $array_ID = array();
        while($row = mysqli_fetch_array($mq_01)){
            echo $row[0].", ";
            $arrID = split('/',$row[0]);
            array_push($array_ID, $arrID[0]);
        }
//            rsort($array_ID);
            echo "ARR[";
          for($i=0; $i<count($array_ID); $i++)  {
              echo $array_ID[$i].",";
          }
          echo "]";
//        echo ", OST ID_Wpis: [$row[0]]]";
//        $arrID = split('/',$row[0]);
//        echo ", OLD ID_Wpis: [$arrID[0]]";
//        $id_temp = $arrID[0]+1;
//        echo ", NEW ID_Wpis: [$id_temp]";
        
        // Jeśli nie wprowadzono wpisu w Formularzu, utworzenie nasępnego automatycznie
        if($ID_Wpisu == ""){
//            $arrID = split('/',$row[0]);
            echo ", 1.OLD ID_Wpis: [".max($array_ID)."]";
            $id_temp = max($array_ID)+1;
            echo ", 1. NEW ID_Wpis: [$id_temp]";
            $IsProperID = true;
            
        }else{
//            $arrID = split('/',$row[0]);
            echo ", 2.OLD ID_Wpis: [".max($array_ID)."]";
            if(in_array($ID_Wpisu, $array_ID)){
                echo "UWAGA! Wpis o tym numerze już istnieje!!!";
                $IsProperID = false;
            }else{
                $id_temp = $ID_Wpisu;
                echo ", 2.NEW ID_Wpis (z formularza): [$id_temp]";
                $IsProperID = true;
            }
        }
        
        // Sprawdzenie czy taki formularz już jest w BD (wg. ID_Wpis i danych wprowadzanych)
//        $data_temp = substr($data_urodzenia_dziecko, 0,10);        // uzyskanie formatu daty rrrr-mm-dd
        $IsFormularzInDB_sql = "SELECT `ID_Wpisu` FROM `Formularz` WHERE `Matka_idMatka` = '$Last_Mama_ID' AND `imie_dziecka` = '$imie_dziecka' AND `data_urodzenia_dziecko` = '$data_urodzenia_dziecko';";
        
        $msql_q_FID = mysqli_query($DBConn,$IsFormularzInDB_sql);
        
            if (mysqli_num_rows($msql_q_FID) > 0) {
                while($row = mysqli_fetch_assoc($msql_q_FID)) {
                    echo "id: " . $row["ID_Wpisu"];
                    $$ID_Wpisu = $row["ID_Wpisu"];
                    $IsFormularzInDB = true;
                    echo "[Jest taki Wpis w Formularz]";
                }
                echo ",ID_Wpisu[$ID_Wpisu][$IsFormularzInDB_sql] , ";
            
            }else{
//                echo "[Brak takiego Wpisu w Formularz][$IsFormularzInDB_sql]";
                echo "[Brak takiego Wpisu w Formularz]";
                $IsFormularzInDB = false;
            }
        
        // Uzyskanie idSzpitala albo idInneMiejsce DO FORMULARZA!!
        if($miejsce_urodzenia_quest == 0){
//            echo "WCHODZE[".__LINE__."]";
            $TakeLastId = "SELECT `idSzpital` FROM `Szpital` WHERE `nazwa` = '$miejsce_urodzenia' AND `urodz_ulica` = '$urodz_ulica';";
            $mysql_q1 = mysqli_query($DBConn,$TakeLastId);
            if (mysqli_num_rows($mysql_q1) > 0) {
                while($row = mysqli_fetch_assoc($mysql_q1)) {
                    echo "id: " . $row['idSzpital'];
                    $ID_last_con = $row['idSzpital'];
                }
            echo ",Szpital ID last[$ID_last_con] , ";
            }
        }else{
//            echo "WCHODZE[".__LINE__."]";
            $TakeLastId = "SELECT `idInne_miejsca` FROM `Inne_miejsca` WHERE `nazwa` = '$miejsce_urodzenia'";
            $mysql_q1 = mysqli_query($DBConn,$TakeLastId);
            if (mysqli_num_rows($mysql_q1) > 0) {
                while($row = mysqli_fetch_assoc($mysql_q1)) {
//                    echo "id: " . $row["idInne_miejsca"];
                    $ID_last_con = $row["idInne_miejsca"];
                }
            echo ",InneMiejsca ID last[$ID_last_con] , ";
            }else{
//                echo "[$TakeLastId]";
            }
        }
        
        // Wprowadzenie rekordu do BD (Formularz)     
        $dataUtw_rok = substr($data_utworzenia, 0,4);
        
        $NEW_FORM_ID = "$id_temp/$dataUtw_rok";
        
        echo "[DATA: ($data_utworzenia)($dataUtw_rok)($NEW_FORM_ID)]";
        
        $FormularzSql = "INSERT INTO `bartilev_Klinika`.`Formularz` ( "
                . "`ID_Wpisu`, `data_utworzenia`, `Matka_idMatka`, `imie_dziecka`, "
                . "`data_urodzenia_dziecko`, `ktore_dziecko`,`urodzone_czas`, `ile_wczesniej`, "
                . "`porod`, `jaki_porod`, `leki_porod`, `leki_polog`,`powod_zgloszenia`,`miejsce`,`id_SzpitalOrInne`) "
                . "VALUES ("
                . "'$NEW_FORM_ID', '$data_utworzenia', '$Last_Mama_ID', '$imie_dziecka', "
                . "'$data_urodzenia_dziecko', '$ktore_dziecko', '$urodzone_czas', '$ile_wczesniej', "
                . "'$porod', '$jaki_porod', '$leki_porod', '$leki_polog','$powod_zgloszenia','$miejsce_urodzenia_quest','$ID_last_con');";
        
        // Kloejnośc prawidłowa ID_Wpis(string)
        $ID_Wpis_queue = "INSERT INTO `bartilev_Klinika`.`id_wpis_queue`(`ID_Wpis`, `ID`, `Rok`) "
                . "VALUES ('$NEW_FORM_ID','$id_temp','$dataUtw_rok')";
        
        $IsForm1OK = false;
        
        if(!$IsFormularzInDB && $IsProperID){
            
            $FormularzSql_q = mysqli_query($DBConn,$FormularzSql);
            
            
            if($FormularzSql_q){
                echo ", [Formularz insert OK]:";
                $IsForm1OK = true;
                $ID_Wpis_q = mysqli_query($DBConn,$ID_Wpis_queue); // <= INSERT do ID_Wpis_queue
                if(!$ID_Wpis_q){
                    echo "Error: [$ID_Wpis_queue]";
                }
                
                // Skoro wszedł Form1 to wprowadzanie Formularz_2  !!!!!!!!!!!!!!!!!!!!!!!!!!!!
                
//                $dataUtw_rok = $id_temp + "/" +  substr($data_utworzenia, 0,3);

            }else{
                echo ", [Formularz insert NOT OK] [$FormularzSql]"; 
            }
        }else{
            echo ", [Formularz BYŁ w BD lub złe id:($NEW_FORM_ID)]"; 
        }
        
// FORM2 - wprowadzanie jęśli wszedł form 1       
        If($IsForm1OK){
            // FORM2                 
                $Formularz2Sql = "INSERT INTO `Formularz_2`"
                        . "(`Formularz_ID_Wpisu`, `pierwsze_karmienie`, `problem_dziecko`, "
                        . "`problem_dziecko_opis`,`problem_mama`, `problem_mama_opis`,`karimienie_piersia`,"
                        . "`karimienie_piersia_opis`,`kapturek`,`kapturek_opis`,`dopajanie`,`dopajanie_czym`,`dopajanie_jak_dlugo`,"
                        . "`dopajanie_opis`,`nawal`,`nawal_opis`,`pobyt`,`karmienie_piers`,`karmienie_piers_czest`,"
                        . "`karmienie_piers_dlugo`,`kapturek2`,`kapturek2_opis`,`dopajanie2`,`dopajanie2_czym`,`dopajanie2_jak_dlugo`,"
                        . "`dopajanie2_opis`,`karmienie_noc`,`karmienie_noc_opis`,`sciaganie_pokarm`,`sciaganie_pokarm_cel`,"
                        . "`sciaganie_pokarm_ile`,`pieluchy`,`stolec`,`aktywnosc`,`zachowanie_karmienia`,`kolka`,"
                        . "`uspokajacz`,`uspokajacz_opis`,`leki_matka`,`leki_dziecko`) "
                        . "VALUES "
                        . "('$NEW_FORM_ID','$pierwsze_karmienie','$problem_dziecko',"
                        . "'$problem_dziecko_opis','$problem_mama','$problem_mama_opis','$karimienie_piersia',"
                        . "'$karimienie_piersia_opis','$kapturek','$kapturek_opis','$dopajanie','$dopajanie_czym','$dopajanie_jak_dlugo',"
                        . "'$dopajanie_opis','$nawal','$nawal_opis','$pobyt','$karmienie_piers','$karmienie_piers_czest',"
                        . "'$karmienie_piers_dlugo','$kapturek2','$kapturek2_opis','$dopajanie2','$dopajanie2_czym','$dopajanie2_jak_dlugo',"
                        . "'$dopajanie2_opis','$karmienie_noc','$karmienie_noc_opis','$sciaganie_pokarm','$sciaganie_pokarm_cel',"
                        . "'$sciaganie_pokarm_ile','$pieluchy','$stolec','$aktywnosc','$zachowanie_karmienia','$kolka',"
                        . "'$uspokajacz','$uspokajacz_opis','$leki_matka','$leki_dziecko');";
                
                $mq2 = mysqli_query($DBConn, $Formularz2Sql);
                if($mq2){
                    echo "[Form2 w BD!!][$Formularz2Sql]";
                }else{
                    echo "[Form2 ERROR][$Formularz2Sql]";
                }
                
                $Formularz3Sql = "INSERT INTO `formularz_3`"
                        . "(`Formularz_ID_Wpisu`, `piers_wielkosc`) "
                        . "VALUES "
                        . "('$NEW_FORM_ID','$piers_wielkosc');";
                
                $mq3 = mysqli_query($DBConn, $Formularz3Sql);
                if($mq3){
                    echo "[Form3 w BD!!][$Formularz3Sql]";
                }else{
                    echo "[Form3 ERROR][$Formularz3Sql]";
                }
                
        }
        
