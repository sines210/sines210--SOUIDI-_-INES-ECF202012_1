var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car5 = document.querySelector('.car5')
let car6 = document.querySelector('.car6')
let imagesArray = ["./img/nn1.jpg", "./img/nn2.jpg"]

car5.src = imagesArray[0]
car6.src = imagesArray[1]
