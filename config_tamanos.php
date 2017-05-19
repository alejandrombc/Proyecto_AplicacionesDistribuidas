<?php
	function readT(){
		$string = file_get_contents("http://localhost:8080/config_tamanos.json");
		$json_a = json_decode($string, true);
		return $json_a;
	}
?>
