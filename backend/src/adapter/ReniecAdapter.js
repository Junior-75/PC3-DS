const Reniec =
require("./Reniec");

class ReniecAdapter {

    constructor() {
        this.reniec =
            new Reniec();
    }

    validarCiudadano(dni) {

        const resultado =
            this.reniec.verificarDni(dni);

        return {
            dni,
            valido: resultado
        };
    }

}

module.exports = ReniecAdapter;