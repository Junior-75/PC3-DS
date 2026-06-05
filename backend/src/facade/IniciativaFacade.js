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

}

module.exports =
    IniciativaFacade;