# AGENTS.md
## Instrucciones para reutilizar esta miniweb educativa

### Objetivo
Utilizar esta miniweb como plantilla pedagógica para nuevos cursos, sustituyendo únicamente el contenido.

## Diseño (OBLIGATORIO)

- Mantener exactamente la estructura de navegación.
- Mantener el diseño visual, estilos CSS y componentes existentes.
- No modificar colores, tipografías ni distribución salvo necesidad técnica.
- No eliminar tarjetas ni secciones; adaptarlas al nuevo contenido.

## Contenido

- Leer los PDF proporcionados.
- Identificar los conceptos más importantes.
- Reestructurar el contenido para alumnado adulto en teleformación.
- Utilizar lenguaje claro y didáctico.
- Priorizar ejemplos prácticos y casos reales.
- Evitar copiar literalmente grandes bloques de texto.
- Sintetizar y reorganizar pedagógicamente.



## Lectura de PDF

Antes de solicitar que el usuario copie manualmente el contenido:

- Intentar localizar los PDF del proyecto.
- Comprobar si contienen texto seleccionable.
- Utilizar herramientas compatibles con Node.js y ES Modules para extraer el texto.
- Informar del error exacto si la extracción falla.
- Solo como último recurso solicitar intervención manual del usuario.
## Validación previa obligatoria antes de modificar la miniweb

Antes de realizar cambios en la miniweb definitiva, deberá seguirse siempre el siguiente procedimiento:

### 1. Análisis del material fuente

* Leer y analizar los documentos proporcionados (PDF, Markdown o TXT).
* Identificar los conceptos principales y la estructura temática.
* Elaborar una propuesta de organización pedagógica adaptada al perfil del alumnado.
* Presentar un esquema con bloques, tarjetas y contenido previsto.
* No modificar ningún archivo en esta fase.

### 2. Creación de una demo navegable

Una vez aprobado el esquema:

* Crear una carpeta independiente denominada `demo/` o `preview/`.
* Generar una versión de prueba reutilizando exactamente la estructura, navegación, estilos CSS y componentes de la miniweb original.
* La demo deberá incluir, como mínimo:

  * una portada;
  * una tarjeta representativa del primer bloque;
  * una tarjeta representativa de un bloque posterior;
  * una pantalla de cierre o conclusión.
* No sobrescribir ni modificar la miniweb definitiva.

### 3. Validación del usuario

Esperar la aprobación explícita del usuario antes de continuar.

El usuario validará, entre otros aspectos:

* la progresión pedagógica;
* la longitud y densidad del contenido;
* la claridad de las explicaciones;
* la adecuación al perfil del alumnado adulto en teleformación;
* el equilibrio entre texto y elementos visuales;
* la navegación y experiencia de uso.

No continuar hasta recibir dicha aprobación.

### 4. Generación definitiva

Solo después de la aprobación del usuario:

* actualizar la miniweb completa;
* mantener el diseño, estructura y navegación originales;
* aplicar todas las instrucciones recogidas en este archivo AGENTS.md;
* conservar la estructura destinada a imágenes sin reutilizar las existentes;
* utilizar marcadores temporales y sugerencias visuales para futuras imágenes.

## Regla fundamental

No modificar nunca archivos de producción ni sustituir la miniweb definitiva sin haber presentado previamente una demo navegable y haber recibido la aprobación explícita del usuario.


## Uso de fuentes y enriquecimiento del contenido

Los PDF proporcionados constituyen la fuente principal y delimitan el alcance temático de la miniweb.

- El contenido generado debe cubrir exclusivamente los conceptos presentes en los PDF.
- No introducir temas nuevos que no estén relacionados directamente con el material proporcionado.
- Se permite enriquecer el contenido únicamente para facilitar la comprensión del alumnado.

El enriquecimiento puede incluir:

- ejemplos reales y actuales;
- casos históricos relevantes;
- analogías o comparaciones cotidianas;
- curiosidades que ayuden a mantener la atención;
- datos actualizados que ilustren el concepto explicado;
- aclaraciones de terminología financiera.

No está permitido:

- ampliar el temario hacia contenidos no contemplados en los PDF;
- incorporar teorías, modelos o herramientas ajenas al tema tratado;
- convertir la miniweb en una enciclopedia del área;
- sustituir el contenido del manual por información externa.

### Regla de oro

El alumnado debe reconocer el contenido del manual, pero entenderlo mejor gracias a ejemplos, contexto y explicaciones complementarias.

El material externo debe actuar como "luz que ilumina el temario", nunca como un desvío del mismo.

## Perfil del alumnado

Adultos trabajadores en modalidad online.

El contenido debe:
- ser práctico,
- ir al grano,
- evitar tecnicismos innecesarios,
- relacionar conceptos con situaciones reales.

## Imágenes (MUY IMPORTANTE)

- NO reutilizar ninguna imagen existente de la carpeta `imagenes`.
- Mantener exactamente los contenedores HTML y clases CSS destinados a imágenes.
- Conservar el tamaño y posición visual.
- Sustituir únicamente el atributo `src` por un marcador temporal.

Ejemplo:

src="imagenes/pendiente_reemplazar.jpg"

- Mantener o crear textos `alt` descriptivos.
- Añadir comentarios HTML sugiriendo el tipo de imagen adecuado.

Ejemplo:

<!-- IMAGEN SUGERIDA: infografía sobre globalización financiera -->

## Ejemplos

Incluir ejemplos reales cuando aporten valor:
- empresas conocidas,
- acontecimientos históricos,
- situaciones cotidianas,
- casos prácticos.

## Salida esperada

Entregar una miniweb completamente funcional con:
- mismo diseño,
- nuevo contenido,
- imágenes pendientes de sustituir,
- estructura coherente,
- enfoque pedagógico.