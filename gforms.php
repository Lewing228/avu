<?php

function sendGoogleTable($name, $phone, $product){
    $formUrl = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScEdocKVRszTxuv9V-2mNnFhXJk9RK2Fu3V_Wrdve5-ymVqKg/formResponse';
        
    $data = [
        'entry.208056556' => $name,
        'entry.1082856124' => $phone,
        'entry.321572634' => $product
    ];
        
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $formUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Pragma: no-cache"));
    $result = [];
    $result['EXE'] = curl_exec($ch);
    $result['INF'] = curl_getinfo($ch);
    $result['ERR'] = curl_error($ch);
        
    var_dump($result);
};

function sendGoogleTableMail($mail){
    $formUrl = 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScXlf0ArBIFaq3ZJ4p74XT_BfvJUJtCd4sNeSTi9xuhGGyQIw/formResponse';
        
    $data = [
        'entry.962662079' => $mail
    ];
        
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $formUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Pragma: no-cache"));
    $result = [];
    $result['EXE'] = curl_exec($ch);
    $result['INF'] = curl_getinfo($ch);
    $result['ERR'] = curl_error($ch);
        
    var_dump($result);
};