<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Risques naturels recensés</title>
    <!-- les deux lignes qui suivent permettent d'écrire des scripts en python dans la page html -->
    <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
    <script defer src="https://pyscript.net/latest/pyscript.js"></script> 
    <!-- Feuille de style pour les cartes -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/> 
    <!-- Script nécessaire pour les cartes -->
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>
    <link rel="stylesheet" href="georisques.css">
    <script src="georisques.js"></script>
</head>

<body>
    <h1>
        Risques naturels recensés
    </h1>
    <section id="resultats">
        <h2 id="commune"></h2>
        <p id="tmp">
            <?php 
            echo "Latitude :" . $_GET['latlon'];
            ?>
        </p>
    </section>
    

    <py-script>
        
    </py-script>
    
</body>

</html>