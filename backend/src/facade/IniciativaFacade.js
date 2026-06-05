const Iniciativa =
    require("../models/Iniciativa");

class IniciativaFacade {

    registrarIniciativa(
        titulo,
        descripcion
    ) {

        const codigo =
            "INI-" +
            Math.floor(
                Math.random() * 500
            );

        const fechaRegistro =
            new Date()
                .toISOString()
                .split("T")[0];

        const estado =
            "Activa";

        return new Iniciativa(
            codigo,
            titulo,
            descripcion,
            fechaRegistro,
            estado
        );
    }

    consultarEstado(codigo) {

        return {
            codigo: codigo,
            titulo: "Ley de Seguridad Ciudadana",
            descripcion: "Incrementar cámaras de vigilancia",
            estado: "Activa",
            totalFirmas: 120,
            comentarios: [
                "La propuesta ayudará a reducir la delincuencia.",
                "Debería implementarse en todo el país."
            ]
        };
    }
}

module.exports =
    IniciativaFacade;