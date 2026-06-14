# Asesor de Técnicas de Estudio

## Descripción

Asesor de Técnicas de Estudio es una aplicación web desarrollada con HTML, CSS y JavaScript que permite recomendar técnicas de aprendizaje según el perfil de un estudiante.

El sistema analiza factores como el tiempo disponible para estudiar, el tipo de materia, el nivel de conocimiento y los días restantes para un examen. A partir de estas características, aplica reglas de negocio para sugerir las técnicas de estudio más adecuadas.

Este proyecto fue desarrollado siguiendo una estructura inspirada en Domain-Driven Design (DDD), separando claramente las responsabilidades de dominio, aplicación, infraestructura y presentación.

---

## Objetivo

Brindar recomendaciones personalizadas de técnicas de estudio que ayuden a los estudiantes a mejorar su proceso de aprendizaje y preparación para evaluaciones.

---

## Funcionalidades

* Ingreso de días restantes para el examen.
* Selección del tiempo disponible para estudiar.
* Selección del tipo de materia.
* Selección del nivel de conocimiento.
* Generación automática de recomendaciones.
* Visualización de descripción y ventajas de cada técnica sugerida.

---

## Técnicas de Estudio Disponibles

* Active Recall
* Pomodoro
* Spaced Repetition
* Método Feynman
* Aprendizaje Basado en Problemas
* Interleaving
* Microaprendizaje
* Mapas Conceptuales
* Estudio Activo

---

## Arquitectura del Proyecto

El proyecto utiliza una arquitectura basada en capas inspirada en Domain-Driven Design.

### Dominio

Contiene las reglas de negocio y la lógica principal del sistema.

* PerfilEstudiante
* NivelConocimiento
* TipoMateria
* TiempoDisponible
* ServicioRecomendacionTecnicas

### Aplicación

Coordina la ejecución de los casos de uso.

* RecomendarTecnicaEstudio
* ResultadoRecomendacionDTO

### Infraestructura

Gestiona el acceso a los datos.

* TecnicasEstudioData
* RepositorioTecnicasMemoria

### Presentación

Gestiona la interacción con el usuario.

* ControladorRecomendacion
* VistaRecomendacion
* ComponenteFormulario
* ComponenteResultado

---

## Estructura del Proyecto

```text
asesor-tecnicas-estudio/

index.html

src/
├── dominio/
├── aplicacion/
├── infraestructura/
├── presentacion/
└── principal.js

recursos/
├── css/
├── images/
└── icons/

README.md
```

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript ES6 Modules
* Bootstrap 5

---

## Ejecución Local

### Opción 1: Live Server

Abrir el proyecto en Visual Studio Code y ejecutar la extensión Live Server sobre el archivo index.html.

### Opción 2: Servidor HTTP de Python

```bash
python -m http.server 8000
```

Luego acceder a:

```text
http://localhost:8000
```

---

## Posibles Mejoras Futuras

* Historial de consultas.
* Exportación de resultados a PDF.
* Persistencia de datos en base de datos.
* Autenticación de usuarios.
* API REST con Spring Boot.
* Panel administrativo.
* Estadísticas de uso.
