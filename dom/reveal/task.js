const reveal = document.querySelectorAll('.reveal')

reveal.forEach((reveal) => {
    window.addEventListener('scroll', 
    function() {
        const viewportHeight = window.innerHeight;
        const elTop = reveal.getBoundingClientRect().top;
        const elBottom = reveal.getBoundingClientRect().bottom;
        if(elTop < viewportHeight && elBottom > 0) {
            reveal.classList.toggle('reveal_active')
        }
    }
)
})
