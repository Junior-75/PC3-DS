const IniciativaFacade =
require("./src/facade/IniciativaFacade");

const facade =
new IniciativaFacade();

const resultado =
facade.consultarEstado(
    "INI-001"
);

console.log(resultado);