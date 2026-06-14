import { NivelConocimiento } from "../value_objects/NivelConocimiento.js";
import { TipoMateria } from "../value_objects/TipoMateria.js";
import { TiempoDisponible } from "../value_objects/TiempoDisponible.js";

export class PerfilEstudiante {

    constructor(
        diasParaExamen,
        tiempoDisponible,
        tipoMateria,
        nivelConocimiento
    ) {

        if (!TiempoDisponible.esValido(tiempoDisponible)) {
            throw new Error("Tiempo disponible inválido");
        }

        if (!TipoMateria.esValido(tipoMateria)) {
            throw new Error("Tipo de materia inválido");
        }

        if (!NivelConocimiento.esValido(nivelConocimiento)) {
            throw new Error("Nivel de conocimiento inválido");
        }

        this.diasParaExamen = diasParaExamen;
        this.tiempoDisponible = tiempoDisponible;
        this.tipoMateria = tipoMateria;
        this.nivelConocimiento = nivelConocimiento;
    }
}