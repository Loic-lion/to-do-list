///////Ajout des tâches//////
export function nouvelleTache() {
  const input = document.getElementById("searchbar");
  const list = document.getElementById("container_body_list");

  const inputTask = input.value;
  const newTask = document.createElement("li");
  newTask.innerHTML = `<button type="submit" class="delete hidden">X</button> ${inputTask} <input type="checkbox" class="check"> </input> `;

  list.appendChild(newTask);

  input.value = "";
}
