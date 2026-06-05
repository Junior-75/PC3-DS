# Voz del Ciudadano - Patrones Estructurales


# Descripción del Proyecto

Voz del Ciudadano es una plataforma que permite registrar iniciativas legislativas, agregar comentarios, validar ciudadanos para registrar firmas digitales y consultar el estado de las iniciativas.

Para la implementación se utilizaron los siguientes patrones estructurales:

* Facade
* Decorator
* Adapter

---

# Patrón Facade

## Objetivo

Simplificar el proceso de registro y consulta de iniciativas legislativas mediante una única interfaz.

## Archivo

```text
src/facade/IniciativaFacade.js
```

## Código principal

```javascript
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

        return {
            codigo,
            titulo,
            descripcion,
            fechaRegistro,
            estado: "Activa"
        };
    }

    consultarEstado(codigo) {

        return {
            codigo,
            titulo:
                "Ley de Seguridad Ciudadana",

            descripcion:
                "Incrementar cámaras de vigilancia",

            estado:
                "Activa",

            totalFirmas:
                120
        };
    }
}
```

## Ejecución

```bash
node testFacade.js
```

## Resultado esperado

```javascript
{
  codigo: 'INI-123',
  titulo: 'Ley de Seguridad Ciudadana',
  descripcion: 'Incrementar cámaras de vigilancia',
  fechaRegistro: '2026-06-05',
  estado: 'Activa'
}
```

## Caso de uso asociado

* CU-01 Registrar iniciativa legislativa
* CU-04 Consultar estado de iniciativa

---

# Patrón Decorator

## Objetivo

Agregar comentarios a una iniciativa sin modificar la clase original.

## Archivos

```text
src/decorator/IniciativaDecorator.js
src/decorator/ComentarioDecorator.js
```

## Código principal

### IniciativaDecorator

```javascript
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
```

### ComentarioDecorator

```javascript
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
```

## Ejecución

```bash
node testDecorator.js
```

## Resultado esperado

```javascript
{
  codigo: 'INI-001',
  titulo: 'Ley de Seguridad Ciudadana',
  descripcion: 'Incrementar cámaras de vigilancia',
  estado: 'Activa',
  comentario: 'La propuesta ayudará a reducir la delincuencia.'
}
```

## Caso de uso asociado

* CU-02 Comentar iniciativa legislativa

---

# Patrón Adapter

## Objetivo

Adaptar la interfaz de un servicio externo de validación de identidad a la interfaz utilizada por el sistema.

## Archivos

```text
src/adapter/Reniec.js
src/adapter/ReniecAdapter.js
```

## Código principal

### ReniecAPI

```javascript
class Reniec {

    verificarDni(dni) {

        if (dni === "12345678") {
            return true;
        }

        return false;
    }
}
```

### ReniecAdapter

```javascript
const ReniecAPI =
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
```

## Ejecución

```bash
node testAdapter.js
```

## Resultado esperado

```javascript
{
  dni: '12345678',
  valido: true
}
```

## Caso de uso asociado

* CU-03 Firmar iniciativa legislativa

---

# Estructura del Proyecto

```text

backend/
│
├── src/
│   │
│   ├── models/
│   │   └── Iniciativa.js
│   │
│   ├── decorators/
│   │   ├── IniciativaDecorator.js
│   │   └── ComentarioDecorator.js
│   │
│   ├── adapters/
│   │   ├── ReniecAPI.js
│   │   └── ReniecAdapter.js
│   │
│   ├── facades/
│   │   └── IniciativaFacade.js
│   │
│   └── routes/
│
├── testFacade.js
├── testDecorator.js
└── testAdapter.js
```

---

# Casos de Uso y Patrones Utilizados

| Caso de Uso                            | Requisito Funcional | Patrón    |
| -------------------------------------- | ------------------- | --------- |
| CU-01 Registrar iniciativa legislativa | RF-01               | Facade    |
| CU-02 Comentar iniciativa legislativa  | RF-02               | Decorator |
| CU-03 Firmar iniciativa legislativa    | RF-03               | Adapter   |
| CU-04 Consultar estado de iniciativa   | RF-04               | Facade    |

---

# Tecnologías Utilizadas

* Node.js
* Fastify
* PostgreSQL
* JavaScript
