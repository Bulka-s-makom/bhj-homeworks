const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("tab_active"));

    tab.classList.add("tab_active");

    tabContents.forEach((content) => content.style.display = "none");
    tabContents[index].style.display = "block";
  });
});