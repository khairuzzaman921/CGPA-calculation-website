<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Details</title>
</head>
<body>
    <h2>Student Details</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);
        $DOB = htmlspecialchars($_POST['DOB']);
        $Gender = htmlspecialchars($_POST['Gender']);
        $choose a city= htmlspecialchars($_POST['choose a city']);
        $submit = htmlspecialchars($_POST['submit']);
        $reset = htmlspecialchars($_POST['reset']);

        echo "<p><strong>Name:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo"<p><strong>password:</strong>$password</p>";
        echo"<p><strong>DOB:</strong>$DOB</p>";
        echo"<p><strong>Gender:</strong>$Gender</p>";
        echo "<p><strong>Choose a city:</strong> $choose a city</p>";
        echo "<p><strong>submit:</strong> $submit</p>";
        echo "<p><strong>reset:</strong> $reset</p>";
        
        
        
        
    } else {
        echo "<p>No data received. Please go back to the registration form.</p>";
    }
    ?>
</body>
</html>
