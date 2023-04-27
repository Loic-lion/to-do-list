///////AJOUT DES TACHES + SAVE DANS LE LOCAL STORAGE//////
export function nouvelleTache() {
  const input = document.getElementById("searchbar");
  const list = document.getElementById("container_body_list");

  const inputTask = input.value;
  if (inputTask.trim() == "") {
    alert("Entrez du texte pour créer une nouvelle tâche");
    return false;
  }
  const newTask = document.createElement("li");
  newTask.innerHTML = `<input type="checkbox" class="check"> </input> ${inputTask} <button type="submit" class="delete hidden">X</button> `;
  newTask.classList.add("animate");
  list.appendChild(newTask);

  const tasks = list.innerHTML;
  localStorage.setItem("tasks", tasks);
  input.value = "";
}
