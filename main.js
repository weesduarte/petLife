var elementsAsk = document.querySelectorAll(".ask")

elementsAsk.forEach(function (ask){
    ask.addEventListener('click', function () {
        ask.classList.toggle("active")
    })
})