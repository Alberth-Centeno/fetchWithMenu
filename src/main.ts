
/*
(async () => {
  console.time("post");
  await renderUser();
  console.timeEnd("post");
})();*/

//hacemos un menu para selceccionar si queremos ver un post o un usuario, la opcion la tomaremos desde la consola
import { renderPost } from "./controllers";
import { renderUser } from "./controllers/userRender.controller";
import * as readlineSync from 'readline-sync'

async function showMenu() {
  let exit = false;
  while (!exit) {
    const option = readlineSync.question(`Seleccione una opcion:\n1. Ver Post\n2. Ver Usuario\n3. Salir\nIngrese su opcion: `);
    switch (option) {
      case '1':
        await renderPost();
        break;
      case '2':
        await renderUser();
        break;
      case '3':
        exit = true;
        break;
      default:
        console.log("Opción no válida, por favor intente de nuevo.");
    }
  }
}

showMenu();