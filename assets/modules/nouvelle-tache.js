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
  newTask.innerHTML = `<input type="checkbox" class="check"> </input> <p>${inputTask}</p> <button type="button" class="button delete hidden"></button> `;
  newTask.classList.add("animate");
  list.appendChild(newTask);

  const tasks = list.innerHTML;
  localStorage.setItem("tasks", tasks);
  input.value = "";
}
