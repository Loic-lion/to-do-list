///////AJOUT DES TACHES + SAVE DANS LE LOCAL STORAGE//////
export function nouvelleTache() {
  const input = document.getElementById("searchbar");
  const list = document.getElementById("container_body_list");

  const inputTask = input.value;
  const newTask = document.createElement("li");
  newTask.innerHTML = `<input type="checkbox" class="check"> </input> ${inputTask} <button type="submit" class="delete hidden">🗑</button> `;

  list.appendChild(newTask);

  const tasks = list.innerHTML;
  localStorage.setItem("tasks", tasks);
  input.value = "";
}
