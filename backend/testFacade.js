const IniciativaFacade =
    require(
        "./src/facade/IniciativaFacade"
    );

const facade =
    new IniciativaFacade();

const iniciativa =
    facade.registrarIniciativa(
        "Ley de Seguridad Ciudadana",
        "Incrementar cámaras de vigilancia"
    );

console.log(iniciativa);