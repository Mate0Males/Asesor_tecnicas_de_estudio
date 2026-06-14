export class TipoMateria {

    static TEORICA = "TEORICA";
    static PRACTICA = "PRACTICA";
    static MIXTA = "MIXTA";

    static esValido(tipo) {
        return [
            TipoMateria.TEORICA,
            TipoMateria.PRACTICA,
            TipoMateria.MIXTA
        ].includes(tipo);
    }
}