let listArr =  []
const submit = document.querySelectorAll('input')[1]
submit.addEventListener('click', (e) => {
    e.preventDefault()
    new Task(document.querySelectorAll('input')[0].value)
})

class Task {
  constructor(name = name) {
    this.name = name
    listArr.push(this)
    renderTask()
  }
}

const renderTask = () => {
  let li = document.createElement('li')
  let val = document.getElementById('new-task-description').value
  li.innerText = val
  if (document.getElementById('high').selected === true){
    li.style.color = "red"
  }
  else if (document.getElementById('medium').selected === true){
    li.style.color = "yellow"
  }
  else if (document.getElementById('low').selected === true){
    li.style.color = "green"
  }
  let del = document.createElement('button')
  del.innerText = "Delete Task"
  li.append(del)
  del.addEventListener("click", function (e){
    e.target.parentNode.parentNode.removeChild(li)
  })
  taskContainer.append(li)
}
