const IniciativaDecorator =
    require("./IniciativaDecorator");

class ComentarioDecorator
    extends IniciativaDecorator {

    constructor(iniciativa, comentario) {
        super(iniciativa);
        this.comentario = comentario;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            comentario: this.comentario
        };
    }

}

module.exports = ComentarioDecorator;