#! node
let chiffre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let grp = []; let tab = []; let sol = [];
//Fonction qui fait des groupes de trois chiffre différents
let groupe = (chiffre) => {
  let n = 0
  for (let x = 0; x < chiffre.length - 2; x++) {
    for (let y = 0; y < chiffre .length; y++) {
      for (let z = 0; z < chiffre.length; z++) {
        if (chiffre[x] !== chiffre[y] && chiffre[y] !== chiffre[z] && chiffre[x] !== chiffre[z]) {
          grp[n] = [chiffre[x], chiffre[y], chiffre[z]]
          n++
        }
      }
    }
  }
}
//Fonction qui tri les groupes de manière croissante
let tri = (grp) => {
  for (let t = 0; t < grp.length; t++) {
    let sol = grp[t];
    let res = []
    let i = 0;
    let j = 0;

    while(sol.length != res.length) {
      if ((sol[i] <= res[j]) || (res[j] == undefined))  {
        res.splice(j, 0, sol[i]);
        i++;
        j = 0;
      } else {
        j++;
      }
    }
    tab.push(res)
    tab.sort()
  }
}
//Gestion des erreurs
if (process.argv.length > 2) {
  console.log("Le script n'a pas besoin d'argument pour fonctionner.")
  return
}
//Résolution du problème
groupe(chiffre)
tri(grp)
sol.push(tab[0])
    //Boucle qui supprime les doublons
for (let a = 0; a < tab.length; a++) {
  for (let b = 0; b < tab.length; b++) {
    if (JSON.stringify(tab[a]) == JSON.stringify(tab[b])) {
      tab.splice(a, 1)
    }
  }
}
    //Boucle qui regroupe les 3 chiffres
for (a = 0; a < tab.length; a++) {
  tab[a] = tab[a].join('')
}

//Affichage du résultat
console.log(tab.toString())
