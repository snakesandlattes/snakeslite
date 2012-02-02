<?php


define('ENVIROMENT', $_SERVER['SERVER_NAME']);

switch(ENVIROMENT){

case 'snakeslite':
    $connecton = mysql_connect('localhost', 'root', '');
    $db = mysql_selectdb('snakeslite');
break;
case 'snakesandlattes.com':
    $connecton = mysql_connect('127.0.0.1', 'snakeslite', 'yaPGs6eFfmkJRXhP');
    $db = mysql_selectdb('snakeslite');
    break;

}

if(isset($_GET['q'])){
    
    $sql = "SELECT name FROM games WHERE name LIKE '%". $_GET['q']. "%' ORDER BY name";
    
} else {

    $sql = "SELECT name FROM games ORDER BY name";

}

$groups=array();
$groups['!'] = array();
$groups['1'] = array();
$groups['2'] = array();
$groups['3'] = array();
$groups['5'] = array();
$groups['7'] = array();

$query = mysql_query($sql);

while($row = mysql_fetch_array($query)){    
    $a[] = $row['name'];
}

if(!$a){
    die('<dl><dt>No Results</dt></dl><dd>Please try another search</dd>');
}
foreach ($a as $name) {
    $groups[strtolower($name[0])][] = $name;
}



$nums = array_merge($groups['!'], $groups['1'], $groups['2'], $groups['3'], $groups['5'], $groups['7']);



unset($groups['!'], $groups['1'], $groups['2'], $groups['3'], $groups['5'], $groups['7']);

if(sizeof($nums) < 1){
    $list = $groups;    
} else {
    $list = array_merge(array($nums), $groups);
}

$html = '';
foreach($list as $key => $value){
    
    $presentation = strtoupper($key);
    if($key == '0') { $presentation = "0-9"; }

    $html .= '<dl class="header" id="header_'. strtolower($presentation) .'"><dt>'.$presentation.'</dt>';
    $html .= '<dd>' . join('</dd><dd>',$value) . '</dd>';
    $html .= '</dl>';

}

echo $html;



?>