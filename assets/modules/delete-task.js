////////////////////SUPRESSION DES TACHES + MAJ DU LOCAL STORAGE/////////////////

export function deleteTache() {
  const list = document.querySelector("#container_body_list");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.delete")) {
      const listTask = event.target.closest("li");
      const tasks = list.innerHTML;
      const patchTasks = tasks.replace(listTask.outerHTML, "");
      localStorage.setItem("tasks", patchTasks);
      listTask.remove();
    }
  });
}
