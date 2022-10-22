const image = document.querySelectorAll(".image img")

image.forEach(img => {
    img.addEventListener("click", () => {
        document.querySelector(".modelBox").style.display = 'block';
        document.querySelector(".modelBox .image img").src = img.getAttribute("src")
    })
})

const close = document.querySelector(".close")

close.addEventListener("click", () => {
    document.querySelector(".modelBox").style.display = 'none'
})  