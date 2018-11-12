$(document).ready(function () {

    //date();
    $("#Valider").on("click", function (e) {
        e.preventDefault();

        // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
        // voir plus : https://www.w3schools.com/js/js_htmldom.asp
        console.log("DOM ready!");

        // Y mettre le code jQuery pour valider tous les champs du formulaire




        if ($('#nom').val().length < 5 || $('#nom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#date').val().length < 5 || $('#date').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else if ($('#mail').val().length < 5 || $('#mail').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else {
            $('#myModal2').modal("show");
            document.getElementById('welcome').innerHTML= "Bienvenue  "+ document.querySelector("#prenom").value;
            document.getElementById('message').innerHTML= "Vous etes nés le  "+ document.querySelector("#date").value +" et vous habitez ";
            document.getElementById('message2').innerHTML=  document.querySelector("#adresse").value ;

            
        
        var urls = document.querySelectorAll('.mapUrl');

        [].forEach.call(urls, function (item) {
            // do whatever
            item.setAttribute("href", "http://maps.google.com/maps?q="+document.querySelector("#adresse").value);
        });

        }





       

    });
});