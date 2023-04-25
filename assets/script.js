/////////////////////IMPORT///////////////////////
import { nouvelleTache } from "./modules/add-task.js";
import { addDeleteListener } from "./modules/delete-task.js";
import { checkbox } from "./modules/checkbox-task.js";

//////////////////VARIABLES////////////////////////
const boutonAd = document.getElementById("bouton-add");

////////////////PROGRAMME///////////////////
boutonAd.addEventListener("click", nouvelleTache);
addDeleteListener(".container");
checkbox(".container");
