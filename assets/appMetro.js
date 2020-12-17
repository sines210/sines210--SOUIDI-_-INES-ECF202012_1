var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car9 = document.querySelector('.car9')
let car10 = document.querySelector('.car10')
let imagesArray = ["./img/metro1.jpg", "./img/metro2.jpg"]

car9.src = imagesArray[0]
car10.src = imagesArray[1]