import { NivelConocimiento } from "../value_objects/NivelConocimiento.js";
import { TipoMateria } from "../value_objects/TipoMateria.js";
import { TiempoDisponible } from "../value_objects/TiempoDisponible.js";

export class RecomendacionTecnicaService {

    recomendar(perfilEstudiante) {

        const recomendaciones = [];

        if (
            perfilEstudiante.diasParaExamen <= 3 &&
            perfilEstudiante.nivelConocimiento === NivelConocimiento.BAJO
        ) {
            recomendaciones.push("Active Recall");
            recomendaciones.push("Pomodoro");
        }

        if (perfilEstudiante.diasParaExamen > 7) {
            recomendaciones.push("Spaced Repetition");
        }

        if (
            perfilEstudiante.tipoMateria ===
            TipoMateria.TEORICA
        ) {
            recomendaciones.push("Método Feynman");
        }

        if (
            perfilEstudiante.tipoMateria ===
            TipoMateria.PRACTICA
        ) {
            recomendaciones.push(
                "Aprendizaje Basado en Problemas"
            );
        }

        if (
            perfilEstudiante.tipoMateria ===
            TipoMateria.MIXTA
        ) {
            recomendaciones.push("Interleaving");
        }

        if (
            perfilEstudiante.tiempoDisponible ===
            TiempoDisponible.MENOS_DE_UNA_HORA
        ) {
            recomendaciones.push("Microaprendizaje");
        }

        if (
            perfilEstudiante.tiempoDisponible ===
            TiempoDisponible.MAS_DE_TRES
        ) {
            recomendaciones.push("Mapas Conceptuales");
        }

        if (recomendaciones.length === 0) {
            recomendaciones.push("Estudio Activo");
        }

        return [...new Set(recomendaciones)];

    }

}