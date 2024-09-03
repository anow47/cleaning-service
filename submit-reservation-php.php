<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $date = $_POST["date"];

    $to = "your_email@example.com"; // Replace with your email address
    $subject = "New Cleaning Service Reservation";
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Date: $date\n";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Reservation submitted successfully!";
    } else {
        echo "Failed to submit reservation. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
