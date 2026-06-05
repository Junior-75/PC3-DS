const ComentarioDecorator =
require("./src/decorator/ComentarioDecorator");

const iniciativa = {

    codigo: "INI-001",

    titulo:
        "Ley de Seguridad Ciudadana",

    descripcion:
        "Incrementar cámaras de vigilancia",

    estado:
        "Activa"
};

console.log(
    " SIN DECORATOR"
);

console.log(
    iniciativa
);

const iniciativaComentada =
new ComentarioDecorator(
    iniciativa,
    "La propuesta ayudará a reducir la delincuencia."
);

console.log(
    "\n CON DECORATOR"
);

console.log(
    iniciativaComentada.getInfo()
);