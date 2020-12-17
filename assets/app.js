var cl = console.log


//FONCTION MENU DEROULANT et effet fading marchant avec une keyframe CSS pour faire apparaître les liens sur menu déroulant avec une opacité graduelle 


//Ici on initialise des variables sur le menu burger, la navbarre et les liens de navigation de la navbarre
//ensuite on ajoute un écouteur au clic de l'utilisateur auquel on ajoute une fonction : au clic, la navigation prendra la classe deploy et le burger la classe toggle (avec transformation pour déploiement et croix burger codée en CSS). La classe ajoutée avec la méthode toggle et pas la méthode add, cela permettra au clic suivant donc clic sur la croix d'éxecuter la fonction dans l'autre sens (ainsi la nav se réenroulera et ne dépendra plus de la classe deploy idem pour la croix qui redeviendra le burger). 
// On boucle sur chaque lien de nav et on ajoute une condition pour avoir les liens de nav qui apparaîssent de manière graduelle : ainsi pour chaque lien (chaque lien est relié à un index) : si l'élément lien n'a pas de propriété animation en CSS on vient lui ajouter une propriété animation avec comme attribut de mettre ne oeuvre la keyframe 'links-fading' avec un délai initial à 0.5sec et un mouvement vers l'avant dans le sens du flow. Ensuite on fait apparaitre chaque lien graduellement avec une division du délai d'apparition sur chaque index

let deployMenu =  () =>
{let burgerMenu = document.querySelector("#menu-burger");
let navigation = document.querySelector(".head-nav");
let navLinks = document.querySelectorAll(".head-nav li");


burgerMenu.addEventListener("click", () =>
{navigation.classList.toggle("deploy");
burgerMenu.classList.toggle("toggle");
navLinks.forEach((element, index)=> {
    if(element.style.animation)
    {element.style.animation = ''}
    else
    {element.style.animation = `links-fading 0.5s ease forwards ${index/6 + 0.5}s`} //la division permet d'avoir un effet graduelle proportionné et .5s pour délai initial commun
  });})

}
deployMenu()



//Les ajouts images des pages individuelles se font page par page avec un script pour chaque page car j'ai essayé de consigner toutes mes variables et images dans ce fichier unique js mais cela me renvoie une erreur sur chaque page puisqu'il ne reconnaît pas les variables des autres pages.

// Image accueil concert
// let imageConcert = "./img/concert.jpg"
// let img = document.querySelector(".cc3")
// img.src = imageConcert


//variables cartes photos pages artistes individuelles

// let car1 = document.querySelector('.car1');
// let car2 = document.querySelector('.car2');
// let car3 = document.querySelector('.car3');
// let car4 = document.querySelector('.car4');
// let car5 = document.querySelector('.car5');
// let car6 = document.querySelector('.car6');
// let car7 = document.querySelector('.car7');
// let car8 = document.querySelector('.car8');
// let car9 = document.querySelector('.car9');
// let car10 = document.querySelector('.car10');
// let car11 = document.querySelector('.car11');
// let car12 = document.querySelector('.car12');
// let car13 = document.querySelector('.car13');
// let car14 = document.querySelector('.car14');
// let car15 = document.querySelector('.car15');
// let car16 = document.querySelector('.car16');
// let car17 = document.querySelector('.car17');
// let car18 = document.querySelector('.car18');
// let car19 = document.querySelector('.car19');
// let car20 = document.querySelector('.car20');


// let imagesArray = ["./img/wax2.jpg", "./img/wax1.jpg", "./img/gori1.jpg", "./img/gori2.jpg", "./img/nn1.jpg", "./img/nn2.jpg", "./img/red1.jpg", "./img/red2.jpg", "./img/metro1.jpg", "./img/metro2.jpg", "./img/popof1.jpg", "./img/popof2.jpg", "./img/af1.jpg", "./img/af2.jpg", "./img/chin1.jpg", "./img/chin2.jpg", "./img/hendrix2.jpg", "./img/hendrix1.jpg", "./img/manu1.jpg", "./img/manu2.jpg"]

// car1.src = imagesArray[0]
// car2.src = imagesArray[1]
// car3.src = imagesArray[2]
// car4.src = imagesArray[3]
// car5.src = imagesArray[4]
// car6.src = imagesArray[5]
// car7.src = imagesArray[6]
// car8.src = imagesArray[7]
// car9.src = imagesArray[8]
// car10.src = imagesArray[9]
// car11.src = imagesArray[10]
// car12.src = imagesArray[11]
// car13.src = imagesArray[12]
// car14.src = imagesArray[13]
// car15.src = imagesArray[14]
// car16.src = imagesArray[15]
// car17.src = imagesArray[16]
// car18.src = imagesArray[17]
// car19.src = imagesArray[18]
// car20.src = imagesArray[19]




// console.log(car14)










// STICKY-NAV A TRAVAILLER

//  window.onscroll = () => {scrollFunction()};

// let scrollFunction= () => {
//   if ( document.documentElement.scrollTop > 50) {
//     document.querySelector("header").style.top = "10";
//   } else {
//     document.querySelector("header").style.top = "0px";
//   }
// }




// Idée peut être des slider sur les cartes sur page artiste et index permettant de voir 3 ou 4 photos par artiste.

// Les recherches récentes pourraient marcher avec le systeme de la shopping list


