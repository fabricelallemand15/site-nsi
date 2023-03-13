var lat = "46.0"
var lon = "3.0"

function req(){
    lat = document.getElementById("latitude").value;
    lon = document.getElementById("longitude").value;
    console.log(lat, lon);
    var requete = {
        method: 'GET',
        latlon: lon + ',' +lat
    }
    fetch("https://www.georisques.gouv.fr/api/v1/gaspar/risques", requete)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for (const nom_commune of data.libelle_commune){
                document.getElementById("commune").innerHTML = nom_commune;
            }
        })
        .catch((error) => {
            console.log(`Error: ${error.message}`);
          });
    };