let plats = ["pâtes", "ratatouille", "soupe"];
let repas = [];
let ingredient = [];
let reponse1 = "";

/*function tirage() {
  if (plats != "") {
    var rand = Math.floor(Math.random()*plats.length);
    alert("Le plat séléctionner est " + plats[rand]);
  }else {
    alert("Veuillez ajouter des noms")
  }
}*/

function tirage() {
  if (repas != "") {
    var rand = Math.floor(Math.random()*repas.length);
    alert("Le plat séléctionner est " + repas[rand]);
    document.getElementById("repaschoix").innerHTML= repas[rand];
  }else {
    alert("Veuillez ajouter des repas")
  }
}

function ajouter_repas() {
  repas.push(prompt("Veuillez entrez un repas"));
  document.getElementById("repasdisp").innerHTML= repas;
}

function ajouter_ingredient() {
  ingredient.push(prompt("Veuillez entrez un ingrédient"));
  document.getElementById("ingredientdisp").innerHTML= ingredient;
}

function recettes() {
  if (ingredient != "") {
    tomate = 0;
    courgette = 0;
    champignon = 0;
    pate = 0;
    if(ingredient == "tomates" || "tomate") {
      tomate = 1;
    }

    if(ingredient == "courgettes" || "courgette") {
      courgette = 1;
    }

    if(ingredient == "champigons" || "champignon") {
      champignon = 1;
    }

    if(ingredient == "pâtes" || "pâtes") {
      pate = 1;
    }

    if(tomate == 1 && courgette == 1) {

    }
  }
  else {
    alert("Veuillez ajouter des ingrédients.")
  }
}
