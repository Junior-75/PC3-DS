class Iniciativa {

    constructor(
        codigo,
        titulo,
        descripcion,
        fechaRegistro,
        estado
    ) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaRegistro = fechaRegistro;
        this.estado = estado;
    }

}

module.exports = Iniciativa;