<?php
// Set the header to return JSON
header('Content-Type: application/json');

// Specify the path to the JSON file
$jsonFilePath = '../assets/dummy.json';

// Check if the file exists
if (file_exists($jsonFilePath)) {
    // Read the file content
    $jsonContent = file_get_contents($jsonFilePath);
    
    // Output the content of the JSON file
    echo $jsonContent;
} else {
    // Return an error message if the file does not exist
    echo json_encode(['error' => 'File not found']);
}
