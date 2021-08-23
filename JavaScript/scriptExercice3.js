window.addEventListener("load", function(){
    exercice1();
});

function exercice1(){
    var div = document.createElement("div");
    div.id = "divTP1";
    
    div.appendChild(document.createTextNode("Le "));

    var strong1 = document.createElement("STRONG");
    strong1.appendChild(document.createTextNode("World Wide Web Consortium"));
    div.appendChild(strong1);

    div.appendChild(document.createTextNode(", abrégé par le sigle "))

    var strong2 = document.createElement("STRONG");
    strong2.appendChild(document.createTextNode("W3C"));
    div.appendChild(strong2);

    div.appendChild(document.createTextNode(", est un "));

    var link = document.createElement("a");
    link.href = "http://fr.wikipedia.org/wiki/Organisme_de_normalisation/";
    link.title = "Organisme de normalisation";
    link.appendChild(document.createTextNode("Organisme de normalisation"));
    div.appendChild(link);

    div.appendChild(document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du "));

    var link2 = document.createElement("a");
    link2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
    link2.title = "World Wide Web";
    link2.appendChild(document.createTextNode("World Wide Web."));
    div.appendChild(link2);
    
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