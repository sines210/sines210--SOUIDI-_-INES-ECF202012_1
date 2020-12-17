var cl = console.log

//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car3 = document.querySelector('.car3')
let car4 = document.querySelector('.car4')
let imagesArray = ["./img/gori1.jpg", "./img/gori2.jpg"]

car3.src = imagesArray[0]
car4.src = imagesArray[1]
