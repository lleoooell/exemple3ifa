console.log("je fonctionne");
var data = srcListe;



var monUl = document.createElement("ul");
monUl.classList.add("list-group")
var monWrap = document.getElementById("wrap");
// var monWrap = document.querySelector("div#wrap ul li.eleve");

// function qui ajoute un li dans le ul, prends en paramètre l'objet eleve
function bindList(eleve){
	var monLi = document.createElement("li");
    monLi.innerHTML = eleve.nom + ' ' + eleve.prenom;
    // monLi.classList.add("eleve");
    monLi.classList.add("list-group-item");
    monLi.setAttribute("data-idEleve", eleve.id);
    monLi.addEventListener("click", detectClick);
    monUl.appendChild(monLi);
}


data.forEach(function(eleve) {
    // console.log(eleve);
    bindList(eleve);
});
monWrap.appendChild(monUl);

function detectClick(event) {
    // console.log(this);
    console.log(event);
    console.log(event.target);
    var myTarget = event.target;
    var eleveId = myTarget.getAttribute("data-idEleve");
    console.log(eleveId);

    window.location = "./profil.html" + '#' + myTarget.getAttribute("data-idEleve");
}

var monBtn = document.getElementById("addNew");
monBtn.addEventListener("click", function(event){
	document.getElementById("myForm").classList.toggle("show");

});


function submitForm(event){
	// event.preventDefault();
	console.log("submitted");
	var monForm = document.getElementById("newUser").elements;
	var newUser = {
		id : data.length + 1
	};
	console.log(typeof monForm);
	// console.log( monForm[0]);
	_.forIn(monForm, function(item) {
	  console.log(item);
	  newUser[item.name] = item.value;

	});
	console.log(newUser);
	data.push(newUser);
	bindList(newUser);
	console.log(data);
	
}
