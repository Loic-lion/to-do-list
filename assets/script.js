/////////////////////IMPORT///////////////////////
import { nouvelleTache } from "./modules/nouvelle-tache.js";
import { deleteTache } from "./modules/delete-task.js";
import { checkbox } from "./modules/checkbox-task.js";
import { deleteAllTasks } from "./modules/delete-all-tasks.js";
//////////////////VARIABLES////////////////////////
const boutonAd = document.getElementById("bouton-add");
const form = document.querySelector("form");
const boutonalldeletechecked = document.getElementById("checked_delete");
////////////////PROGRAMME///////////////////
boutonAd.addEventListener("click", nouvelleTache);
deleteTache();
checkbox();
/////PAS DE REFRESH DES FORMs/////////////////
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

boutonalldeletechecked.addEventListener("click", deleteAllTasks);

///////////////Local Stotage///////////////////
window.addEventListener("load", () => {
  const list = document.getElementById("container_body_list");
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
  }
});
