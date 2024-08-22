

const infoContent = document.querySelectorAll('.attributs');

const infoBtn = document.querySelectorAll('.click button');

const typeProduits = document.querySelectorAll('.produits .box');

const closeBtn = document.querySelectorAll('.attributs button');



for(let i = 0; i < typeProduits.length; i++) {

    infoBtn[i].addEventListener('click', () =>{
        infoContent[i].style.display = "block";
    })

}


for(let i = 0; i < typeProduits.length; i++) {

    closeBtn[i].addEventListener('click', () =>{
        infoContent[i].style.display = "none";
    })

}