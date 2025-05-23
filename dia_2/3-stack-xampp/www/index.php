<?php
$mysqli = new mysqli("db", "user", "userpass", "testdb");

if ($mysqli->connect_error) {
    die("Conexión fallida: " . $mysqli->connect_error);
}
echo "Conexión exitosa a MySQL desde PHP!";
echo "Conexión exitosa a MySQL desde PHP!";
echo "Conexión exitosa a MySQL desde PHP!";
?>
