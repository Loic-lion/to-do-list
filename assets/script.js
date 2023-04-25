/////////////////////IMPORT///////////////////////
import { nouvelleTache } from "./modules/add-task.js";
import { addDeleteListener } from "./modules/delete-task.js";

//////////////////VARIABLES////////////////////////
const boutonAd = document.getElementById("bouton-add");

////////////////PROGRAMME///////////////////
boutonAd.addEventListener("click", nouvelleTache);
addDeleteListener(".container");
