class IniciativaDecorator {

    constructor(iniciativa) {
        this.iniciativa = iniciativa;
    }

    getInfo() {
        return this.iniciativa.getInfo
            ? this.iniciativa.getInfo()
            : this.iniciativa;
    }
}

module.exports = IniciativaDecorator;