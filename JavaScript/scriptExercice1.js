window.addEventListener("load", function(){
    window.document.querySelector("#inputAge").addEventListener('change', setCommentaireSwitch);
});

/*function setCommentaire(){
    var age = document.getElementById("inputAge").value;

    if(age <= 6){
        document.getElementById("commentaire").innerHTML = "Vous êtes un jeune enfant.";
    }else if(age >= 7 && age <= 11){
        document.getElementById("commentaire").innerHTML = "Vous êtes un enfant qui a atteint l'âge de raison.";
    }else if(age >= 12 && age <= 17){
        document.getElementById("commentaire").innerHTML = "Vous êtes un adolescent.";
    }else{
        document.getElementById("commentaire").innerHTML = "Vous êtes un adulte.";
    }
}*/

function setCommentaireSwitch(){
    var age = document.getElementById("inputAge").value;

    switch(true){
        case (age <= 6): document.getElementById("commentaire").innerHTML = "Vous êtes un jeune enfant."; break;
        case (age >= 7 && age <= 11): document.getElementById("commentaire").innerHTML = "Vous êtes un enfant qui a atteint l'âge de raison."; break;
        case (age >= 12 && age <= 17): document.getElementById("commentaire").innerHTML = "Vous êtes un adolescent."; break;
        default: document.getElementById("commentaire").innerHTML = "Vous êtes un adulte."; break;
    }
}