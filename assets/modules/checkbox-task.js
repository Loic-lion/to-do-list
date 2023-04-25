export function checkbox(cont) {
  const containerCheck = document.querySelector(cont);
  const list = containerCheck.querySelector("#container_body_list");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("input.check")) {
      const isChecked = event.target.checked;
      if (isChecked) {
        event.target.closest("li").style.textDecoration = "line-through";
      } else {
        event.target.closest("li").style.textDecoration = "none";
      }
    }
  });
}
