import { PerfilEstudiante } from "../../domain/entities/PerfilEstudiante.js";
import { RecomendacionTecnicaService } from "../../domain/services/RecomendacionTecnicaService.js";
import { TecnicasMemoriaRepository } from "../../infraestructure/repositories/TecnicasMemoriaRepository.js";
import { ResultadoRecomendacionDTO } from "../dto/ResultadoRecomendacionDTO.js";

export class RecomendarTecnicaEstudio {

    constructor() {

        this.servicioRecomendacion = new RecomendacionTecnicaService();

        this.repositorioTecnicas = new TecnicasMemoriaRepository();

    }

    ejecutar(datosFormulario) {

        const perfilEstudiante =
            new PerfilEstudiante(
                datosFormulario.diasParaExamen,
                datosFormulario.tiempoDisponible,
                datosFormulario.tipoMateria,
                datosFormulario.nivelConocimiento
            );

        const nombresTecnicas = this.servicioRecomendacion.recomendar(
            perfilEstudiante
        );

        const recomendaciones = nombresTecnicas
            .map(nombre => this.repositorioTecnicas.buscarPorNombre(nombre))
            .filter(tecnica => tecnica);

        return new ResultadoRecomendacionDTO(recomendaciones);

    }

}