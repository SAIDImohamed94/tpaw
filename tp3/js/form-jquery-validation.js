$().ready(function() {
    $("#mainForm").validate({
    rules : {
      nom : {
        required : true
      },
      prenom : {
        minlength : 3
      },	
      email : {
        required : true,
        email : true
      }
    },
    messages : {
      nom : "Veuillez fournir un nom",
      prenom : "Veuillez fournir un prenom d'au moins trois lettres",
      email : "L'email est incorrect"
    }
   });
  });






















/*
        $(document).ready(function(){
    
            var $nom = $('#nom'),
                $prenom = $('#prenom'),
                $date = $('#date'),
                $Adresse = $('#Adresse'),
                $email = $('#email'),
                $envoi = $('#envoi'),
                $erreur = $('#erreur'),
                $champ = $('.champ');
        
            $champ.keyup(function(){
                if($(nom).val().length < 5){ // si la chaîne de caractères est inférieure à 5
                    $(nom).css({ // on rend le champ rouge
                        borderColor : 'red',
                    color : 'red'
                    });
                 }
                 else{
                     $(nom).css({ // si tout est bon, on le rend vert
                     borderColor : 'green',
                     color : 'green'
                 });
                 }
            });
        
            $envoi.click(function(e){
                e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi
        
                // puis on lance la fonction de vérification sur tous les champs :
                verifier($nom);
                verifier($prenom);
                verifier($date);
                verifier($Adresse);
                verifier($email);
            });
        
            $reset.click(function(){
                $champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
                    borderColor : '#ccc',
                    color : '#555'
                });
                $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur
            });
        
            function verifier(champ){
                if(champ.val() == ""){ // si le champ est vide
                    $erreur.css('display', 'block'); // on affiche le message d'erreur
                    champ.css({ // on rend le champ rouge
                        borderColor : 'red',
                        color : 'red'
                    });
                }
            }
        
        });
        */