var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car11 = document.querySelector('.car11')
let car12 = document.querySelector('.car12')
let imagesArray = ["./img/popof1.jpg", "./img/popof2.jpg"]

car11.src = imagesArray[0]
car12.src = imagesArray[1]