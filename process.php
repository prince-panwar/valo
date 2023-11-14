
<?php
$servername = "your_servername";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $teamName = $_POST['team-name'];
    $college = $_POST['Select College'];
    $game = $_POST['game'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    if (isset($_POST['playerTypeUGI'])) {
        $playerTypeUGI = $_POST['playerTypeUGI'];

        if ($playerTypeUGI === 'single') {
            $memberNameUGI = $_POST['member1'];
            $sql = "INSERT INTO ugi_table (team_name, college, game, player_type, member_name, phone, email) VALUES ('$teamName', '$college', '$game', '$playerTypeUGI', '$memberNameUGI', '$phone', '$email')";
        } else {
            $memberNamesUGI = array(
                $_POST['member1'],
                $_POST['member2'],
                $_POST['member3'],
                $_POST['member4'],
                $_POST['member5']
            );

            $memberNamesUGIString = implode(", ", $memberNamesUGI);
            $sql = "INSERT INTO ugi_table (team_name, college, game, player_type, member_name, phone, email) VALUES ('$teamName', '$college', '$game', '$playerTypeUGI', '$memberNamesUGIString', '$phone', '$email')";
        }

        if ($conn->query($sql) === TRUE) {
            header("Location: index.html");
            exit;
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } elseif (isset($_POST['playerTypeNonUGI'])) {
        $playerTypeNonUGI = $_POST['playerTypeNonUGI'];

        if ($playerTypeNonUGI === 'single') {
            $memberNameNonUGI = $_POST['member1'];
            $sql = "INSERT INTO non_ugi_table (team_name, college, game, player_type, member_name, phone, email) VALUES ('$teamName', '$college', '$game', '$playerTypeNonUGI', '$memberNameNonUGI', '$phone', '$email')";
        } else {
            $memberNamesNonUGI = array(
                $_POST['member1'],
                $_POST['member2'],
                $_POST['member3'],
                $_POST['member4'],
                $_POST['member5']
            );
   
            $memberNamesNonUGIString = implode(", ", $memberNamesNonUGI);
            $sql = "INSERT INTO non_ugi_table (team_name, college, game, player_type, member_name, phone, email) VALUES ('$teamName', '$college', '$game', '$playerTypeNonUGI', '$memberNamesNonUGIString', '$phone', '$email')";
        }

        if ($conn->query($sql) === TRUE) {
            header("Location: index.html");
            exit;
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
}
?>


