////////////////////SUPRESSION DES TACHES/////////////////
export function addDeleteListener(cont) {
  const container = document.querySelector(cont);
  const list = container.querySelector("#container_body_list");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.delete")) {
      event.target.closest("li").remove();
    }
  });
}
