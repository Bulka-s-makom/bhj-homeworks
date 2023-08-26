document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    var progress = document.getElementById('progress');
  
    // Создание объекта XMLHttpRequest
    var xhr = new XMLHttpRequest();
  
    // Отправка запроса на сервер
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
        var percent = (event.loaded / event.total) * 100;
        progress.value = percent;
      }
    };
  
    // Обработка ответа от сервера
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('Файл успешно загружен!');
      } else {
        console.log('Ошибка загрузки файла');
      }
    };
  
    xhr.send(file);
  });
  