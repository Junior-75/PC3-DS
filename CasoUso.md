# Casos de Uso - Sistema Voz del Ciudadano

---

## CU-01: Registrar iniciativa legislativa

**Actor principal:**
Colectivo Civil.

**Precondición:**
El representante del colectivo ha iniciado sesión en el sistema.

**Objetivo:**
Registrar una nueva iniciativa legislativa para que pueda ser visualizada y apoyada por los ciudadanos.

**Postcondición:**
La iniciativa queda almacenada en el sistema.

### Flujo principal

1. El representante accede al módulo de iniciativas.
2. Ingresa el título de la propuesta.
3. Ingresa la descripción de la propuesta.
4. Confirma el registro.
5. El sistema almacena la iniciativa.

---

## CU-02: Comentar iniciativa legislativa

**Actor principal:**
Ciudadano.

**Precondición:**
Existe una iniciativa registrada en el sistema.

**Objetivo:**
Permitir que los ciudadanos expresen opiniones sobre una iniciativa.

**Postcondición:**
El comentario queda asociado a la iniciativa.

### Flujo principal

1. El ciudadano selecciona una iniciativa.
2. Ingresa un comentario.
3. Confirma el envío.
4. El sistema registra el comentario.

---

## CU-03: Firmar iniciativa legislativa

**Actor principal:**
Ciudadano.

**Precondición:**
Existe una iniciativa activa.

**Objetivo:**
Brindar apoyo ciudadano a una iniciativa legislativa.

**Postcondición:**
La firma queda registrada en el sistema.

### Flujo principal

1. El ciudadano accede a una iniciativa.
2. Selecciona la opción "Firmar".
3. El sistema valida la identidad del ciudadano.
4. El sistema registra la firma.
5. El contador de firmas es actualizado.

---

## CU-04: Consultar estado de iniciativa

**Actor principal:**
Ciudadano.

**Precondición:**
La iniciativa existe en el sistema.

**Objetivo:**
Conocer el estado actual de una iniciativa legislativa.

**Postcondición:**
El ciudadano visualiza la información actualizada.

### Flujo principal

1. El ciudadano busca una iniciativa.
2. El sistema muestra sus datos.
3. El sistema muestra la cantidad de firmas registradas.
4. El sistema muestra el estado actual de la iniciativa.
