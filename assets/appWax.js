var cl = console.log


//Images artistes
// Intégration des images à la source en image pour une meilleure responsivité et pour une application future


let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let imagesArray = ["./img/wax2.jpg", "./img/wax1.jpg"]

car1.src = imagesArray[0]
car2.src = imagesArray[1]



