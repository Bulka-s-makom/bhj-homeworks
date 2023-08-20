const tasksAdd = document.querySelector(".tasks__add")
const tasksList = document.querySelector(".tasks__list")
const tasksInput = document.querySelector(".tasks__input")

tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = tasksInput.value;
  tasksList.insertAdjacentHTML('afterEnd', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>')
  const taskTitle = document.querySelector(".task__title")
  taskTitle.insertAdjacentHTML('afterBegin', inputValue)
  const taskRemove = document.querySelector('.task__remove')
  const task = document.querySelector('.task')
  taskRemove.addEventListener('click', () => {
    task.remove();
  })
})