const loadtask = ()=>{
    const task = JSON.parse(localStorage.getItem('tasks'));
    const tasklist = document.getElementById("tasklist");
    
   task.forEach(li=>{
    let lid = document.createElement('li');
    lid.innerHTML = `${li} <button onclick="removeTask(this)">Delete</button>`;
    tasklist.appendChild(lid)
   })

 }
document.addEventListener('DOMContentLoaded',loadtask)
const submit=()=>{
    const data =  document.getElementById('task').value.trim();
     const tasklist = document.getElementById("tasklist");
     const li = document.createElement('li');
     li.innerHTML = `${data} <button onclick="removeTask(this)">Delete</button>`;
     tasklist.appendChild(li);
     saveTask()
   
 }
const removeTask =(button)=>{
    button.parentElement.remove();
    saveTask();
}

const saveTask = ()=>{
    let task = [];
   document.querySelectorAll("#tasklist li").forEach(li=>{
    task.push(li.textContent.replace('Delete',''));
   })
  console.log(task)
   localStorage.setItem('tasks',JSON.stringify(task));

}



