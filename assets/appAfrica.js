var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future

let car13 = document.querySelector('.car13')
let car14 = document.querySelector('.car14')
let imagesArray = ["./img/af1.jpg", "./img/af2.jpg"]

car13.src = imagesArray[0]
car14.src = imagesArray[1]