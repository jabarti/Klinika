<?php

/****************************************************
 * Project:     Klinika_Local
 * Filename:    LoginAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-07-13
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
include 'DB/Connection.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$baza = "`bartilev_klinika`";

$error = "";
$valid = false;
$actions = '';
$SQL = '';
$SQL_set_crud = '';
$outp = '';
$name = '';
$IP = '';
$IP_DB = '';


// sprawdzenie bieżącego IP!!!!!!!
$u = "http://ipv4.myexternalip.com/raw";
$IP =  file_get_contents($u);

if(isset($_GET['action'])){
    $actions = "AKCJA JEST";
    
    switch($_GET['action']){
        case 'IP':

            $Fin_Arr = array(
                "valid"=>$valid,
                "actions"=>$actions,
                "error"=>$error, 
                "SQL"=>$SQL, 
                "outp"=>"$outp", 
                "IP"=>$IP,
                "SQL_set_crud"=>$SQL_set_crud);
            
            
            break;
        
        case 'logOut':  
            
            
            $SQL_Logg_out = "UPDATE $baza.`users` SET `activ`=false, `IP` = null WHERE `activ` = 1;";
            if( mysqli_query($DBConn, $SQL_Logg_out)){
                $actions .="SQL_set_crud OK";
                $SQL .=$SQL_Logg_out;
            }else{
                $error .="nie poszedł SQL_set_crud:[$SQL_Logg_out]";
                $SQL .= $SQL_Logg_out;
            }
            
            $Fin_Arr = array(
                "valid"=>false,
                "actions"=>$actions,
                "error"=>$error, 
                "SQL"=>$SQL, 
                "outp"=>$outp, 
                "SQL_set_crud"=>$SQL_set_crud);
            break;
            
        case 'init':
//            $count = 0;
            $SQL_init = "SELECT `idUsers`, `imie`, `nazwisko`,`IP` FROM `users` WHERE `activ` = 1;";
//            $SQL_init = "SELECT count(*) FROM `users` WHERE `activ` = 1;";
            
            // liczymy ile zalogowanych userów
            $result = mysqli_query($DBConn, $SQL_init);
            $ile_zalog = mysqli_num_rows($result);
            
            $outp .= "Zalogowanych: $ile_zalog ";

                    
            switch($ile_zalog){
                case 0:         // nikt nie zalogowany - można logować nowego
                    $outp .= "[0 zalogowanych!!!]";
                    $valid = false;
                    break;
                case 1:         // ktoś zalogowany, albo bieżący albo ktoś źle wylogowany - spr: po IP i czasie zalogowania
                    $outp .= "[1 zalogowany!!!]";
                    $valid = true;
                    $result = mysqli_query($DBConn, $SQL_init);
                    while ($row = mysqli_fetch_array($result)){
                        $name = $row['imie']." ".$row['nazwisko'];
                        $IP_DB = $row['IP'];
                    }
                    
                    if($IP == $IP_DB){
                        $valid = true;
                        $outp .= "[IP zgodne]";
                    }else{
                        $valid = false;
                        $outp .= "[IP NIE zgodne]";
                    }
                    
                    break;
                default:        // więcej niż 1 zalogowany (error) - wylogować wszystkich!! - TEMP!!!
                    $outp .= "[więcej niż jeden zalogowany!!!]";
                    $valid = false;
                    
                    // Kasuję lagowanie wszystkich
                        $SQL_set_crud = "UPDATE $baza.`users` SET `activ`=false WHERE `activ` = 1;";
                        if( mysqli_query($DBConn, $SQL_set_crud)){
                            $actions .="SQL_set_crud OK";
                        }else{
                            $error .="nie poszedł SQL_set_crud:[$SQL_set_crud]";
                        }
                    
                    break;
            }
    
            $Fin_Arr = array(
                "valid"=>$valid,
                "actions"=>$actions,
                "error"=>$error, 
                "SQL"=>$SQL_init, 
                "outp"=>$outp, 
                "name"=>$name,
                "IP"=>$IP,
                "IP_DB"=>$IP_DB,
                "SQL_set_crud"=>$SQL_set_crud);

            break;
        
        case 'login':
            $log = $request->email;
            $pass = $request->pass;
            
            if($log!="" && $pass!=""){
                $SQL = "SELECT * FROM $baza.`users` WHERE (`anvandersnamn` = '$log' OR `losenord` = '$pass') AND `email` = '$log';";

                if($result = mysqli_query($DBConn, $SQL)){
                    $rs = $result->fetch_array(MYSQLI_ASSOC);
                    $outp = $rs['imie']." ".$rs['nazwisko'];
                                        
                    if($rs['idUsers']!=""){
                        $valid = true;

                        $SQL_set_crud = "UPDATE $baza.`users` SET `activ`=true,`last_logg`=CURRENT_TIMESTAMP ,`IP` = '$IP' WHERE `idUsers` = '".$rs['idUsers']."';";
                        if( mysqli_query($DBConn, $SQL_set_crud)){
                            $actions .="SQL_set_crud OK";
                        }else{
                            $error .="nie poszedł SQL_set_crud:[$SQL_set_crud]";
                        }
                    }
                }else{
                    $error .="nie poszedł SQL:$SQL";
                }
                
                $Fin_Arr = array(
                                "valid"=>$valid,
                                "actions"=>$actions,
                                "error"=>$error, 
                                "SQL"=>$SQL, 
                                "outp"=>$outp, 
                                "SQL_set_crud"=>$SQL_set_crud);
            }else{
                $error = "puste:(log:$log)lub/i(pass:$pass)";
            }
            break;
            
        default:
                $Fin_Arr = array(
                    "valid"=>'default',
                    "actions"=>'default',
                    "error"=>'default', 
                    "SQL"=>'default', 
                    "outp"=>'default', 
                    "SQL_set_crud"=>'default');
            break;
    }
}else{
    $actions = "NIE JEST AKCJA";
}

 echo json_encode($Fin_Arr);


