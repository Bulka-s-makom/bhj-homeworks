const dropdownList = document.querySelector(".dropdown__list")
const dropdownValue = document.querySelector(".dropdown__value")

dropdownValue.addEventListener('click', () => {
dropdownList.classList.toggle('dropdown__list_active')
})

dropdownList.addEventListener('click', function(event) {
  if(event.target.closest('.dropdown__list') === dropdownList) {
    const selectedValue = event.target.textContent;
  dropdownValue.textContent = selectedValue;
  }
  dropdownList.classList.remove('dropdown__list_active');
})