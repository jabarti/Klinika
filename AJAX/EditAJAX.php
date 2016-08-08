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
            
//            UPDATE `formularz` SET `ID_Wpisu`=[value-1],`data_utworzenia`=[value-2],`Matka_idMatka`=[value-3],`imie_dziecka`=[value-4],`data_urodzenia_dziecko`=[value-5],`ktore_dziecko`=[value-6],`urodzone_czas`=[value-7],`ile_wczesniej`=[value-8],`porod`=[value-9],`jaki_porod`=[value-10],`leki_porod`=[value-11],`leki_polog`=[value-12],`powod_zgloszenia`=[value-13],`miejsce`=[value-14],`id_SzpitalOrInne`=[value-15] WHERE 1
//            UPDATE `formularz_2` SET `ID_Wpisu`=[value-1],`pierwsze_karmienie`=[value-2],`problem_dziecko`=[value-3],`problem_dziecko_opis`=[value-4],`problem_mama`=[value-5],`problem_mama_opis`=[value-6],`karimienie_piersia`=[value-7],`karimienie_piersia_opis`=[value-8],`kapturek`=[value-9],`kapturek_opis`=[value-10],`dopajanie`=[value-11],`dopajanie_czym`=[value-12],`dopajanie_jak_dlugo`=[value-13],`dopajanie_opis`=[value-14],`nawal`=[value-15],`nawal_opis`=[value-16],`pobyt`=[value-17],`karmienie_piers`=[value-18],`karmienie_piers_czest`=[value-19],`karmienie_piers_dlugo`=[value-20],`kapturek2`=[value-21],`kapturek2_opis`=[value-22],`dopajanie2`=[value-23],`dopajanie2_czym`=[value-24],`dopajanie2_jak_dlugo`=[value-25],`dopajanie2_opis`=[value-26],`karmienie_noc`=[value-27],`karmienie_noc_opis`=[value-28],`sciaganie_pokarm`=[value-29],`sciaganie_pokarm_cel`=[value-30],`sciaganie_pokarm_ile`=[value-31],`pieluchy`=[value-32],`stolec`=[value-33],`aktywnosc`=[value-34],`zachowanie_karmienia`=[value-35],`kolka`=[value-36],`uspokajacz`=[value-37],`uspokajacz_opis`=[value-38],`leki_matka`=[value-39],`leki_dziecko`=[value-40] WHERE 1
//            UPDATE `formularz_3` SET `ID_Wpisu`=[value-1],`piers_wielkosc`=[value-2],`cycki`=[value-3],`obszar`=[value-4],`zmiana_opis_pict`=[value-5],`brodawka`=[value-6],`brodawka_jaka`=[value-7],`zmiany`=[value-8],`zmiany_opis`=[value-9],`stan_emocjonalny`=[value-10],`obserwacja_dziecka`=[value-11],`masa_ur`=[value-12],`data_01`=[value-13],`masa_min`=[value-14],`data_02`=[value-15],`masa_inne_a`=[value-16],`data_03a`=[value-17],`masa_inne_b`=[value-18],`data_03b`=[value-19],`masa_inne_c`=[value-20],`data_03c`=[value-21],`masa_inne_d`=[value-22],`data_03d`=[value-23],`masa_inne_e`=[value-24],`data_03e`=[value-25],`masa_inne_f`=[value-26],`data_03f`=[value-27],`masa_obecna`=[value-28],`data_04`=[value-29],`przyrost_sredni`=[value-30],`zachowanie_dziecka_wizyta`=[value-31],`otwieranie_ust`=[value-32],`ulozenie_ust`=[value-33],`ulozenie_jezyka`=[value-34],`ruchy_kasajace`=[value-35],`ruchy_ssace`=[value-36],`ocena_karmienie_piers`=[value-37],`rozpoznanie`=[value-38],`korekta_poz`=[value-39],`trening_ssania`=[value-40],`dokarmianie`=[value-41],`zalecenia_inne`=[value-42] WHERE 1
//            UPDATE `matka` SET `idMatka`=[value-1],`mama_firstname`=[value-2],`mama_lastname`=[value-3],`data_urodzenia_matka`=[value-4],`ulica`=[value-5],`ulica_nr`=[value-6],`ulica_nr_mieszkanie`=[value-7],`kod_poczt`=[value-8],`miasto`=[value-9],`telefon`=[value-10],`email`=[value-11] WHERE 1
//            UPDATE `szpital` SET `idSzpital`=[value-1],`nazwa`=[value-2],`urodz_ulica`=[value-3],`urodz_ulica_nr`=[value-4],`urodz_ulica_nr_mieszkanie`=[value-5],`urodz_kod_poczt`=[value-6],`urodz_miasto`=[value-7],`urodz_kraj`=[value-8],`czyNIESzpital`=[value-9] WHERE 1
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

$SQL_get_Record = "SELECT * FROM $baza.`FullForm` WHERE `ID_Wpisu` = '$id_wpisu'";
//echo "<br>SQL_get_Record: [$SQL_get_Record]<br>";

$result = mysqli_query($DBConn, $SQL_get_Record);

$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    array_push($rows, $r);
}

echo json_encode($rows);
