<?php
/**
 * Created by PhpStorm.
 * User: lihb
 * Date: 4/27/16
 * Time: 11:16 AM
 */
error_reporting(E_ALL ^ E_DEPRECATED);
$openid = $_GET["openid"];
$sudu = $_GET["sudu"];
echo $openid.">>".$sudu;
$con = mysql_connect("localhost", "root", "lihb123456");
if (!$con) {
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("test", $con);

$result = mysql_query("SELECT * FROM wfj51 WHERE openid='" . $openid . "'");
$row = mysql_fetch_array($result);
if (!empty($row)) {
    if ($row['sudu'] > $sudu) {
        mysql_query("update wfj51 set sudu=" . $sudu . " WHERE openid='" . $openid."'");
    }
} else {
    mysql_query("INSERT INTO wfj51 (sudu,openid, createtime) VALUES (" . $sudu . ", '" . $openid . "'," . time() . ")");
}
mysql_close($con);