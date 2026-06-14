export class ResultadoComponent {

    renderizar(recomendaciones) {

        const contenedor =
            document.getElementById("resultado");

        contenedor.innerHTML =
            recomendaciones
                .map(recomendacion => `
                    <div class="card mb-3 shadow-sm">
                        <div class="card-body">

                            <h5 class="card-title">
                                ${recomendacion.nombre}
                            </h5>

                            <p class="card-text">
                                ${recomendacion.descripcion}
                            </p>

                            <ul>
                                ${recomendacion.ventajas
                                    .map(ventaja =>
                                        `<li>${ventaja}</li>`
                                    )
                                    .join("")}
                            </ul>

                        </div>
                    </div>
                `)
                .join("");

    }

}