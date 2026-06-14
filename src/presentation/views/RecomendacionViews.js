import { ResultadoComponent } from "../components/ResultadoComponent.js";

export class RecomendacionViews {

    constructor() {
        this.componenteResultado = new ResultadoComponent();
    }

    mostrarResultado(resultadoDTO) {
        this.componenteResultado.renderizar(
            resultadoDTO.recomendaciones
        );
    }

}