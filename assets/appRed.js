var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car7 = document.querySelector('.car7')
let car8 = document.querySelector('.car8')
let imagesArray = ["./img/red1.jpg", "./img/red2.jpg"]

car7.src = imagesArray[0]
car8.src = imagesArray[1]