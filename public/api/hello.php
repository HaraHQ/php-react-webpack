<?php
// Set the header to return JSON
header('Content-Type: application/json');

// Create the data array
$data = [
    'message' => 'hello world'
];

// Encode the data array to JSON and print it
echo json_encode($data);
