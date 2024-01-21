var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

//let test1 = document.querySelector('#test')
//test1.addEventListener('mouseenter',function () {
//    console.log("J'ai survolé sur le bouton !! ")
//})

//let test2 = document.querySelector('#test')
//test2.addEventListener('mouseleave',function () {
//    console.log("J'ai survolé sur le bouton !! ")
//})

function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode")
}
  

document.addEventListener('DOMContentLoaded', function() {
    let liste = document.querySelectorAll('li');
  
    liste.forEach(function(item) {
      item.addEventListener('click', function() {
        // Retire la classe 'tab-active' de tous les li
        document.querySelectorAll('li').forEach(function(elt) {
          elt.classList.remove('tab-active');
        });
  
        // Retire la classe 'active' de tous les div
        document.querySelectorAll('div').forEach(function(elt) {
          elt.classList.remove('active');
        });
  
        // Ajoute la classe 'tab-active' à l'onglet cliqué
        item.classList.add('tab-active');
  
        // Vérifie la classe de l'onglet cliqué et ajoute la classe 'active' au contenu correspondant
        if (item.classList.contains('tab-Synopsis')) {
          document.querySelector(".Synopsiss").classList.add('active');
        } else if (item.classList.contains('tab-Planete')) {
          document.querySelector(".Planetee").classList.add('active');
        } else if (item.classList.contains('tab-ville')) {
          document.querySelector(".vville").classList.add('active');
        } else if (item.classList.contains('tab-villee')) {
          document.querySelector(".villeee").classList.add('active');
        }
      });
    });
  });
  


let form = document.querySelector('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    
    let email = document.querySelector('#email')

    if(email.value == ''){
        console.log("invalide")
    } else {
        email.classList.add('success')
    }
})

//Section d'erreur
let errorContainer = document.querySelector('.message-error')
let errorList = document.querySelector('.message-error ul')
//Je vide les erreurs avant la nouvelle verification et recache le message
errorList.innerHTML = ""
errorContainer.classList.remove('visible')

//Elements du formulaire
let email = document.querySelector('#email')

// Verif email
if(email.value == '') {

    //Je rend visible la zone d'erreur et enleve le succes du mail s'il a existé
    errorContainer.classList.add('visible')
    email.classList.remove('success')

    //Creation du message d'erreur
    let err = document.createElement('li')
    err.innerText = "Le champ email ne peut pas etre vide"

    // Ajout du container
    errorList.appendChild(err)
} else {
    // Je met l'email en succès
    email.classList.add('success')
}

let nom = document.querySelector('#nom')

// Verif nom
if(nom.value == '') {

    //Je rend visible la zone d'erreur et enleve le succes du nom s'il a existé
    errorContainer.classList.add('visible')
    nom.classList.remove('success')

    //Creation du message d'erreur
    let err = document.createElement('li')
    err.innerText = "Le champ nom ne peut pas etre vide"

    // Ajout du container
    errorList.appendChild(err)
} else {
    // Je met le nom en succès
    nom.classList.add('success')
}

let prenom = document.querySelector('#prenom')

// Verif prenom
if(prenom.value == '') {

    //Je rend visible la zone d'erreur et enleve le succes du prenom s'il a existé
    errorContainer.classList.add('visible')
    prenom.classList.remove('success')

    //Creation du message d'erreur
    let err = document.createElement('li')
    err.innerText = "Le champ prenom ne peut pas etre vide"

    // Ajout du container
    errorList.appendChild(err)
} else {
    // Je met le prenom en succès
    prenom.classList.add('success')
}


let successContainer = document.querySelector('.message-success')
successContainer.classList.remove('visible')

if(
    nom.classList.contains('success') &&
    prenom.classList.contains('success') &&
    email.classList.contains('success') 
) {
    successContainer.classList.add('visible')
}

