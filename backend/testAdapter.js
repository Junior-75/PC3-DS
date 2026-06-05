const ReniecAdapter =
require("./src/adapter/ReniecAdapter");

const adapter =
new ReniecAdapter();

console.log(
    " DNI VÁLIDO "
);

console.log(
    adapter.validarCiudadano(
        "12345678"
    )
);

console.log(
    "\n DNI INVÁLIDO "
);

console.log(
    adapter.validarCiudadano(
        "87654321"
    )
);