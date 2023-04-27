/////////////////////IMPORT///////////////////////
import { nouvelleTache } from "./modules/nouvelle-tache.js";
import { deleteTache } from "./modules/delete-task.js";
import { checkbox } from "./modules/checkbox-task.js";

//////////////////VARIABLES////////////////////////
const boutonAd = document.getElementById("bouton-add");
const form = document.querySelector("form");
////////////////PROGRAMME///////////////////
boutonAd.addEventListener("click", nouvelleTache);
deleteTache(".container");
checkbox(".container");
/////PAS DE REFRESH DES FORMs/////////////////
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
///////////////Local Stotage///////////////////
window.addEventListener("load", () => {
  const list = document.getElementById("container_body_list");
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
  }
});

/////////////////////////TEST ANIMATION///////////////
