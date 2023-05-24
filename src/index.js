document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm=document.querySelector("form#create-task-form")
  const date=new Date()
  const newDate=`${date.getFullYear()}-0${date.getMonth()}-${date.getDate()}`
  document.querySelector("input#date-due").value=newDate
  createTaskForm.addEventListener("submit",addTask)
});

const addTask=e=>{
  e.preventDefault()
  const newTaskDescription=e.target["new-task-description"].value
  const dateDue=e.target['date-due'].value
  const tasks=document.querySelector("ul#tasks")
  const li=document.createElement("li")
  const span=document.createElement("span")
  span.addEventListener("click",editTask)
  li.append(span)
  span.textContent=`${newTaskDescription} due ${dateDue}`
  const priority=document.querySelector("select#priority").value
  if(priority==="low"){
    span.style.color="green"
    span.parentNode.setAttribute("priority",0)
  }
  else if(priority==="medium"){
    span.style.color="orange"
    span.parentNode.setAttribute("priority",1)
  }
  else{
    span.style.color="red"
    span.parendNode.setAttribute("priority",2)
  }
  const deleteBtn=document.createElement("button")
  deleteBtn.textContent="x"
  deleteBtn.addEventListener("click",deleteTask)
  li.append(deleteBtn)
  tasks.append(li)
  sortTasks()
}

const deleteTask=e=>{
  e.target.parentNode.remove()
}

const editTask=e=>{
  const newTask=prompt("Edit task:")
  const dateDue=document.querySelector("#date-due").value
  e.target.textContent=`${newTask} due ${dateDue}`
}

const sortTasks=()=>{
  const tasks=document.querySelector("ul#tasks")
  const tasksLis=tasks.getElementsByTagName("li")
  tasksLis.sort((first,second)=>{
    if(first.getAttribute("priority")<second.getAttribute("priority")){
      return -1
    }
    else if(first.getAttribute("priority")>second.getAttribute("priority")){
      return 1
    }
    else{
      return 0
    }
  })
  console.log("tasks sorted")
}
