const rotatorCases = document.querySelectorAll('.rotator__case')

setInterval(function() {
  const activeCases = document.querySelectorAll('.rotator__case_active');
  
  rotatorCases.forEach(function(rotatorCase) {
    rotatorCase.classList.remove('rotator__case_active');
  });

  const randomIndex = Math.floor(Math.random()*rotatorCases.length);
  rotatorCases[randomIndex].classList.add('rotator__case_active')
}, 1000);