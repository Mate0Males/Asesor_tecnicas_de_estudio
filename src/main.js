import { RecomendacionController } from "./presentation/controllers/RecomendacionCotroller.js";

document.addEventListener("DOMContentLoaded", () => {

    const controlador =
        new RecomendacionController();

    controlador.inicializar();

});