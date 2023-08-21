const tasksAdd = document.querySelector(".tasks__add")
const tasksList = document.querySelector(".tasks__list")
const tasksInput = document.querySelector(".tasks__input")

tasksAdd.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = tasksInput.value.trim();
  if (inputValue !== '') {
    tasksList.insertAdjacentHTML('afterEnd', '<div class="task"><div class="tasktitle"></div><a href="#" class="taskremove">&times;</a></div>')
  const taskTitle = document.querySelector(".task__title")
  taskTitle.insertAdjacentHTML('afterBegin', inputValue)
  tasksInput.value = '';
  const taskRemove = document.querySelector('.task__remove')
  const task = document.querySelector('.task')
  taskRemove.addEventListener('click', () => {
    task.remove();
  })
  }
})

function check() {
  
}