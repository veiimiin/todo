import { Task } from "/Task.js";


const input = document.getElementById("inputTask");
const taskList =  document.getElementById("taskList");

const tasks = [];

function addTask(){
  const title = input.value.trim();
  if (title === '') return;

  const newTask = new Task(1, title, false);
  tasks.push(newTask);

  const taskLIst =  document.getElementById("taskList");
  const li = document.createElement("li");
  li.className = "task-item";
  li.textContent = title;

  li.style.opacity = 0;
  li.style.transform = "translateY(-10px)";
  li.style.transition = "all 0.4s ease";

  taskList.appendChild(li);

  requestAnimationFrame(() => {
    li.style.opacity = 1;
    li.style.transform = "translateY(0)";
  })

  taskList.style.maxHeight = taskList.scrollHeight + "px";
  refreshList();
  input.value = "";
}

function refreshList(){
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.title;

    li.addEventListener('dblclick', () => {

      const input = document.createElement('input');
      input.type = 'text';
      input.value = task.title;
      input.classList.add('edit-input');

      li.innerHTML = '';
      li.appendChild(input);
      input.focus();

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const newTitle = input.value.trim();
          if(newTitle !== '' ){
            tasks[index].title = newTitle;
          }
          refreshList();
        }
      });

      input.addEventListener('blur', () => {
        task.title = input.value.trim();
        refreshList();
      });
    });

    taskList.appendChild(li);
  });
}



input.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    addTask();

  }
});

