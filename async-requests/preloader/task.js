document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var items = document.getElementById("items");
  
    fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var valute = data.response.Valute;
  
        for (var currencyCode in valute) {
          var currencyData = valute[currencyCode];
  
          var item = document.createElement("div");
          item.classList.add("item");
  
          var codeElement = document.createElement("div");
          codeElement.classList.add("item__code");
          codeElement.textContent = currencyData.CharCode;
          item.appendChild(codeElement);
  
          var valueElement = document.createElement("div");
          valueElement.classList.add("item__value");
          valueElement.textContent = currencyData.Value;
          item.appendChild(valueElement);
  
          var currencyElement = document.createElement("div");
          currencyElement.classList.add("item__currency");
          currencyElement.textContent = "руб.";
          item.appendChild(currencyElement);
  
          items.appendChild(item);
        }
  
        loader.classList.remove("loader_active");
      })
      .catch(function(error) {
        console.log(error);
        loader.classList.remove("loader_active");
      });
  });