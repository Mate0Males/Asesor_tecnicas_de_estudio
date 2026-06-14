export class TiempoDisponible {

    static MENOS_DE_UNA_HORA = "MENOS_DE_UNA_HORA";
    static ENTRE_UNA_Y_TRES = "ENTRE_UNA_Y_TRES";
    static MAS_DE_TRES = "MAS_DE_TRES";

    static esValido(tiempo) {
        return [
            TiempoDisponible.MENOS_DE_UNA_HORA,
            TiempoDisponible.ENTRE_UNA_Y_TRES,
            TiempoDisponible.MAS_DE_TRES
        ].includes(tiempo);
    }
}