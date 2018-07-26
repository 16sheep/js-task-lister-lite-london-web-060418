const taskContainer = document.getElementById('tasks')
// const input = document.querySelectorAll('input')[0].value
// const submit = document.querySelectorAll('input')[1]


class TaskList {
  addLastTask() {
    let lastTask = listArr[-1]
    lastTask = document.createElement('li')
    taskContainer.append(lastTask)
  }

}
