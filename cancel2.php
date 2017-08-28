<?php

sleep(2);

header("Content-Type: application/json; charset=UTF-8");

if ($_POST['naujSlp'] !== $_POST['pakartSlp']) {
    $response = [
        success => false,
        error => 'Slaptazodziai nesutampa'
    ];
// } else if (strlen($_POST['pakartSlp']) <= 5) {
//     $response = [
//         success => false,
//         token => 'Slaptazodis turi buti sudarytas is ne maziau kaip 6 simboliu'
//     ];
} else {
    $response = [
        success => true,
        token => 'Slaptazodis pakeistas... Prisijungti pavyko...'
    ];
}
echo json_encode($response);