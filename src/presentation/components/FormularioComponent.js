export class FormularioComponent {

    obtenerDatos() {

        return {
            diasParaExamen: Number(
                document.getElementById("diasParaExamen").value
            ),
            tiempoDisponible:
                document.getElementById("tiempoDisponible").value,
            tipoMateria:
                document.getElementById("tipoMateria").value,
            nivelConocimiento:
                document.getElementById("nivelConocimiento").value
        };

    }

}