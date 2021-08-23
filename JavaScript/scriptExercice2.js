window.addEventListener("load", function(){
    window.document.querySelector("#btnSend").addEventListener('click', setName);
});

function setName(){
    const str = document.getElementById("inputName").value;
    const name = str.split(' ');

    if(name != ""){
        name.forEach(n => {
            document.getElementById("listName").innerHTML += "<li>" + n + "</li>";
        });
    }else{
        alert("Aucun prénom saisie !");
    }
    document.getElementById("inputName").value = "";
}