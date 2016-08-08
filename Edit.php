<?php
/* * **************************************************
 * Project:     Klinika_Local
 * Filename:    Edit.php
 * Encoding:    UTF-8
 * Created:     2016-08-06
 *
 * Author       Bartosz M. Lewiński <jabarti@wp.pl>
 * ************************************************* */
?>
<html>
    <head>
        <script src="Controllers/EditController.js" type="text/javascript"></script>
        <script src="js_source/mapper/mapper.js" type="text/javascript"></script> 
        <script src="js_source/mapper/maputil.js" type="text/javascript"></script>       
    </head>
    <body >
        <div  class="container">
            <div class="row">
                <div class="col-md-12">

                    <?php echo "<p id='id_wpis_get' >ID_Wpisu: " . $_GET['id_record'] . "</p>" ?>

                    <form class="form-horizontal" role="form" id="EditForm" name="EditForm" >



                    </form>
                    <button id="submit" class="btn btn-success btn-lg btn-block">
                        <span class="glyphicon glyphicon-flash"></span> Edytuj!
                    </button>

                    <button id="delete" class="btn btn-warning btn-lg btn-block">
                        <span class="glyphicon glyphicon-flash"></span> Kasuj!
                    </button>

                </div>
            </div>
        </div>
    </body>
</html>

