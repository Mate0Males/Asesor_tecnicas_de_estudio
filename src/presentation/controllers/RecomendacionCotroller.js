import { FormularioComponent } from "../components/FormularioComponent.js";
import { RecomendacionViews } from "../views/RecomendacionViews.js";
import { RecomendarTecnicaEstudio } from "../../application/use_cases/RecomendarTecnicaEstudio.js";

export class RecomendacionController {

    constructor() {
        this.formulario = new FormularioComponent();
        this.vista = new RecomendacionViews();
        this.casoUso = new RecomendarTecnicaEstudio();
    }

    inicializar() {

        const boton =
            document.getElementById("btnRecomendar");

        boton.addEventListener("click", () => {

            const datos =
                this.formulario.obtenerDatos();

            const resultado =
                this.casoUso.ejecutar(datos);

            this.vista.mostrarResultado(resultado);

        });

    }

}