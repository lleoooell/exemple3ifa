console.log("je fonctionne");

var data = srcListe;

// console.table(data);


var monUl = document.createElement("ul");
var monWrap = document.getElementById("wrap");
monWrap.appendChild(monUl);

data.forEach(function(eleve) {
    // console.log(eleve);
    var monLi = document.createElement("li");
    monLi.innerHTML = eleve.nom + ' ' + eleve.prenom;
    monLi.classList.add("eleve");
    monLi.setAttribute("data-idEleve", eleve.id);
   	monLi.addEventListener("click", detectClick);
    monUl.appendChild(monLi);
});

function detectClick(event){
	// console.log(this);
	console.log(event);
	console.log(event.target);
	var myTarget = event.target;
	var eleveId = myTarget.getAttribute("data-idEleve");
	console.log(eleveId);
	
	window.location = "/profil.html" +'#'+ myTarget.getAttribute("data-idEleve") ;
}

