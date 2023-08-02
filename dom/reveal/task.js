const reveal = document.querySelectorAll('.reveal')

reveal.forEach((reveal) => {
    reveal.classList.remove('reveal_active')
    window.addEventListener('scroll', 
    function() {
        const viewportHeight = window.innerHeight;
        const elTop = reveal.getBoundingClientRect().top;
        const elBottom = reveal.getBoundingClientRect().bottom;
        if(elTop < viewportHeight && elBottom > 0) {
            reveal.classList.add('reveal_active')
        } else {
          reveal.classList.remove('reveal_active')
        }
    }
)
})