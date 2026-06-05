# Especificación de Requisitos de Software

## Sistema Voz del Ciudadano

---

# 1. Introducción

## 1.1 Propósito

Este documento define los requisitos funcionales y la arquitectura general del sistema web "Voz del Ciudadano", una plataforma que permitirá a los colectivos civiles registrar iniciativas legislativas y a los ciudadanos participar mediante comentarios y firmas digitales.

## 1.2 Alcance

El sistema permitirá registrar iniciativas legislativas, consultar información de las propuestas, registrar comentarios, apoyar iniciativas mediante firmas digitales y consultar el estado de cada propuesta.

## 1.3 Definiciones

| Término                | Definición                                                         |
| ---------------------- | ------------------------------------------------------------------ |
| Iniciativa Legislativa | Propuesta presentada por ciudadanos para promover una norma o ley. |
| Colectivo Civil        | Grupo de ciudadanos que registra iniciativas legislativas.         |
| Firma Digital          | Registro electrónico de apoyo a una iniciativa.                    |
| Comentario             | Opinión o sugerencia realizada por un ciudadano.                   |

---

# 2. Requisitos Funcionales

Los requisitos funcionales se derivan de los casos de uso definidos.

---

## RF-01 — Registrar iniciativa legislativa (CU-01)

* El sistema debe permitir registrar una iniciativa legislativa.
* El sistema debe permitir ingresar el título de la propuesta.
* El sistema debe permitir ingresar una descripción de la propuesta.
* El sistema debe generar un código único para identificar cada iniciativa.
* El sistema debe almacenar la fecha de registro.
* La iniciativa debe quedar disponible para consulta pública.

---

## RF-02 — Comentar iniciativa legislativa (CU-02)

* El sistema debe permitir visualizar las iniciativas registradas.
* El sistema debe permitir registrar comentarios sobre una iniciativa.
* El sistema debe almacenar la fecha de cada comentario.
* Los comentarios deben quedar asociados a la iniciativa correspondiente.
* El sistema debe mostrar los comentarios registrados.

---

## RF-03 — Firmar iniciativa legislativa (CU-03)

* El sistema debe permitir que un ciudadano firme una iniciativa.
* El sistema debe validar la identidad del ciudadano antes de registrar la firma.
* El sistema no debe permitir firmas duplicadas para una misma iniciativa.
* El sistema debe almacenar la fecha de la firma.
* El sistema debe actualizar automáticamente la cantidad de firmas registradas.

---

## RF-04 — Consultar estado de iniciativa (CU-04)

* El sistema debe permitir buscar iniciativas registradas.
* El sistema debe mostrar la información general de la iniciativa.
* El sistema debe mostrar la cantidad de firmas obtenidas.
* El sistema debe mostrar el estado actual de la iniciativa.
* El sistema debe mostrar los comentarios asociados a la propuesta.

---

# 3. Arquitectura del Sistema

## 3.1 Estilo arquitectónico

El sistema utilizará una arquitectura de tres capas: presentación, negocio y datos.

```text
┌─────────────────────────────────────────────┐
│          CAPA DE PRESENTACIÓN               │
│             Navegador Web                   │
│        React + TypeScript + Vite            │
└──────────────────┬──────────────────────────┘
                   │ HTTPS / REST API
┌──────────────────▼──────────────────────────┐
│             CAPA DE NEGOCIO                 │
│             Fastify (Node.js)               │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │ Gestión de Iniciativas               │   │
│  │ Gestión de Comentarios               │   │
│  │ Gestión de Firmas                    │   │
│  └──────────────────────────────────────┘   │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│               CAPA DE DATOS                 │
│               PostgreSQL                    │
└─────────────────────────────────────────────┘
```

### 3.2 Componentes principales

#### Frontend (Capa de presentación)

* React con TypeScript.
* Tailwind CSS para la interfaz de usuario.
* Axios para el consumo de servicios.
#### Backend (Capa de negocio)

- Node.js.
- Fastify.
- API REST.

#### Base de datos (Capa de datos)

* PostgreSQL.

### 3.3 Modelo de datos

```text
CIUDADANO
  id,
  nombre,
  email

INICIATIVA
  id,
  codigo,
  titulo,
  descripcion,
  estado,
  fecha_registro

COMENTARIO
  id,
  iniciativa_id,
  contenido,
  fecha

FIRMA
  id,
  iniciativa_id,
  ciudadano_id,
  fecha_firma
```

---

# 4. Restricciones del sistema

* Solo los colectivos civiles podrán registrar iniciativas.
* Un ciudadano solo podrá firmar una vez una misma iniciativa.
* Toda firma deberá ser validada antes de registrarse.
* Las iniciativas deberán permanecer visibles para consulta pública.

---

# 5. Trazabilidad: Casos de Uso → Requisitos

| Caso de uso                            | Requisitos funcionales asociados |
| -------------------------------------- | -------------------------------- |
| CU-01 Registrar iniciativa legislativa | RF-01                            |
| CU-02 Comentar iniciativa legislativa  | RF-02                            |
| CU-03 Firmar iniciativa legislativa    | RF-03                            |
| CU-04 Consultar estado de iniciativa   | RF-04                            |
