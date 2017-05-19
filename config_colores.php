<?php
	// DEFINICION DE VARIABLES GLOBALES DE COLORES
	function read(){
		$string = file_get_contents("http://localhost:8080/config_colores.json");
	 	$json_a = json_decode($string, true);
		return $json_a;
	}
?>
