window.addEventListener("load", function(){
    createDOMHyperLink();
});

function createDOMHyperLink(){
    var div = document.createElement("div");
    div.id = "dom";
    var ul = document.createElement("ul");

    for(let i = 0; i < 10; i++){
        var li = document.createElement("li");

        var lien = document.createElement("a");
        lien.href = "./DOM/DOM" + (i+1) + ".html";
        lien.title = "DOM " + i;
        lien.appendChild(document.createTextNode("DOM " + (i+1)));

        li.appendChild(lien);
        ul.appendChild(li);
    }

    div.appendChild(ul);
    document.body.appendChild(div);

    var div = document.createElement("div");
    div.id = "tab";
    var ul = document.createElement("ul");

    for(let i = 0; i < 3; i++){
        var li = document.createElement("li");

        var lien = document.createElement("a");
        lien.href = "./TABLEAUX/tab" + (i+1) + ".html";
        lien.title = "Tableau " + i;
        lien.appendChild(document.createTextNode("Tableau " + (i+1)));

        li.appendChild(lien);
        ul.appendChild(li);
    }

    div.appendChild(ul);
    document.body.appendChild(div);
}