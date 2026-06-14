import { TecnicasEstudioData } from "../data/TecnicasEstudioData.js";

export class TecnicasMemoriaRepository {

    obtenerTodas() {
        return TecnicasEstudioData;
    }

    buscarPorNombre(nombre) {
        return TecnicasEstudioData.find(
            tecnica => tecnica.nombre === nombre
        );
    }

}