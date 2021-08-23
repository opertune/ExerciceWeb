window.addEventListener("load", function(){
    exercice4();
});

function exercice4(){
    var tab = ["JavaScript", "JScript", "ActionScript", "EX4"];

    var div = document.createElement("div");
    div.id = "myDiv";

    var paragraphe = document.createElement("p");
    paragraphe.appendChild(document.createTextNode("Langages basés sur ECMAScript: "));

    div.appendChild(paragraphe);

    var liste = document.createElement("ul");

    tab.forEach(e => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(e));
        liste.appendChild(li);
    });
    
    div.appendChild(liste);
    document.body.appendChild(div);

    var div2 = document.createElement("div");
    div2.className = "lien"

    var linkIndex = document.createElement("a")
    linkIndex.href = "index.html";
    linkIndex.title = "Index";
    linkIndex.appendChild(document.createTextNode("Index"));

    div2.appendChild(linkIndex);
    document.body.appendChild(div2);
}
