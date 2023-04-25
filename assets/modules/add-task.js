 ///////Ajout des tâches//////
export function nouvelleTache() {
 
  const input = document.getElementById("searchbar");
  const list = document.getElementById("container_body_list");
  console.log(input.value);
  const inputTask = input.value;
  const newTask = document.createElement("li");
  newTask.textContent = inputTask;
  newTask.innerHTML = `<button class="delete">X</button> ${inputTask} <input type="checkbox" class="button_check"> </input> `;

  list.appendChild(newTask);

  input.value = "";
}
