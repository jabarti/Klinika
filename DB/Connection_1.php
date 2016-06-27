<?php

/****************************************************
 * Project:     Klinika
 * Filename:    Connection.php
 * Encoding:    UTF-8
 * Created:     2016-06-20
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
$dbhost = "";
$dbuser	= "";
$dbpass	= "";
$dbname	= "";
$DBConn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname) or die('<br>Selection failed!');
    if ($DBConn){
//        echo '<br>Connection DBConn OK';
    }else{
//        echo '<br>Connection DBConn failed';
    }

