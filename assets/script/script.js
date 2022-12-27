totalSlides = document.querySelectorAll(".slider-item").length
let currentSlide = 0;


document.querySelector(".slider-width").style.width = `calc(100vw * ${totalSlides})`
document.querySelector(".slider-controls").style.height = `${document.querySelector(".slider").clientHeight}px`


function goPrev() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1
    }
    updateMargin()
}

function goNext() {
    currentSlide++ 
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0
    }
    updateMargin()
}

function updateMargin() {
    let sliderWidthItem = document.querySelector(".slider-item").clientWidth        //pegando largura da imagem
    let newMargin = (currentSlide * sliderWidthItem)                                //Pegando a posição do slide e multiplicado pela largura da imagem, ou seja, a variável newMargin vai ter a posição do slide x a largura da imagem
    document.querySelector(".slider-width").style.marginLeft = `-${newMargin}px`    //Atribuindo o resultado do newMargin como margem a esquerda do slider-width que é o slide como um todo, isso vai fazer com que dependendo do valor do currentSlide (que vai somar ou subtrair de acordo com os clicks do usuario) será setado mais ou menos margen no slide, isso fará com que ele se mova
}

setInterval(() => {
    goNext()
}, 4000);

document.querySelector(".slider-control.next").addEventListener("click", goPrev)
document.querySelector(".slider-control.previous").addEventListener("click", goNext)