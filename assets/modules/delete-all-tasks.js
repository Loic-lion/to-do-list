export function deleteAllTasks() {
  const list = document.querySelector("#container_body_list");
  const checkedBoxes = list.querySelectorAll('input[type="checkbox"]:checked');
  const deletedElements = [];

  checkedBoxes.forEach((checkbox) => {
    const task = checkbox.closest("li");
    deletedElements.push(task.outerHTML);
    task.remove();
  });

  const savedElements = list.innerHTML.replace(deletedElements.join(""), "");
  localStorage.setItem("tasks", savedElements);
}
