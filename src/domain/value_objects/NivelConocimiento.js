export class NivelConocimiento {

    static BAJO = "BAJO";
    static MEDIO = "MEDIO";
    static ALTO = "ALTO";

    static esValido(nivel) {
        return [
            NivelConocimiento.BAJO,
            NivelConocimiento.MEDIO,
            NivelConocimiento.ALTO
        ].includes(nivel);
    }
}