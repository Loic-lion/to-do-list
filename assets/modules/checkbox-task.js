///////////////////CHECKBOX + MAJ LOCAL STORAGE//////////////////////
export function checkbox() {
  
  const list = document.querySelector("#container_body_list");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("input.check")) {
      const isChecked = event.target.checked;
      const listItem = event.target.closest("li");
      const deleteButton = listItem.querySelector(".delete");
      if (isChecked) {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "red";
        deleteButton.classList.remove("hidden");
        listItem.classList.add("anim__shake");
      } else {
        listItem.style.textDecoration = "none";
        listItem.style.color = "black";
        deleteButton.classList.add("hidden");
        listItem.classList.remove("anim__shake");
      }
      const tasks = list.innerHTML;
      localStorage.setItem("tasks", tasks);
    }
  });
}
