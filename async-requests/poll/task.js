fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    console.log('Пришли данные', data)
    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');

    pollTitleElement.innerText = data.data.title;

    data.data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.innerText = answer;
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      pollAnswersElement.appendChild(button);
    });
  })
  .catch(error => console.error(error));