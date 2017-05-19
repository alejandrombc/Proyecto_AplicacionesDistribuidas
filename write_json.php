<?php
  if ('POST' === $_SERVER['REQUEST_METHOD']){
    $myFile = $_POST["file"];
    $fh = fopen($myFile, 'w') or die("can't open file");
    $stringData = $_POST["data"];
    fwrite($fh, $stringData);
    fclose($fh);
    print json_encode(array('msg' => "Nice!"));
  }
?>
