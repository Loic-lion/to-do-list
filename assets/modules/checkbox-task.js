///////////////////CHECKBOX + MAJ LOCAL STORAGE//////////////////////
export function checkbox(cont) {
  const containerCheck = document.querySelector(cont);
  const list = containerCheck.querySelector("#container_body_list");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("input.check")) {
      const isChecked = event.target.checked;
      const listItem = event.target.closest("li");
      const deleteButton = listItem.querySelector(".delete");
      if (isChecked) {
        listItem.style.textDecoration = "line-through";
        deleteButton.classList.remove("hidden");
      } else {
        listItem.style.textDecoration = "none";
        deleteButton.classList.add("hidden");
      }
      const tasks = list.innerHTML;
      localStorage.setItem("tasks", tasks);
    }
  });
}
