var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car19 = document.querySelector('.car19')
let car20 = document.querySelector('.car20')
let imagesArray = ["./img/manu1.jpg", "./img/manu2.jpg"]

car19.src = imagesArray[0]
car20.src = imagesArray[1]