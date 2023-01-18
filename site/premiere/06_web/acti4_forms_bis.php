<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Activité 4 : Formulaires </title>
    <meta charset="utf-8">
</head>

<body style="width: 70%; margin: 0 auto;">
    <h1 style="text-align: center;"> 
        <?php
        echo "Bienvenue " . $_POST['user_id'] . " !";
        ?>
    </h1>
    <h1 style="text-align: center;">Alors ? Tu as encore oublié ton mot de passe ?</h1>
    <h1 style="text-align: center;">Quelle tête en l'air !</h1>
    <?php
    echo "<h1 style='text-align: center;'>Bon, je te pardonne pour cette fois<br> et je t'envoie ton mot de passe à l'adresse<br>". $_POST['user_email'] . "</h1>";
    ?>
    <img src="elephant-1090828_1280.jpg" width = "70%" alt="image ne pas oublier" style="display: block; margin: 0 auto;">
</body>

</html>