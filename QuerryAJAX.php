<?php

/****************************************************
 * Project:     Klinika
 * Filename:    QuerryAJAX.php
 * Encoding:    UTF-8
 * Created:     2016-06-22
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 ***************************************************/
include 'DB/Connection.php';

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
