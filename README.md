# Aplicación Web de Gestión de Tareas

Es una aplicación sencilla de "Lista de Tareas" que te permite gestionar y realizar un seguimiento de tus tareas pendientes. Con una interfaz simple y funcionalidades básicas, podrás agregar, marcar como completadas y eliminar tareas de manera efectiva.

## Instalación del Back-End

Instalar el entorno virtual:

```bash
py -m venv .venv
```

### Activamos el entorno virtual

```bash
.\.venv\Scripts\activate
```

### Instalamos django

```bash
pip install django
```

### Y ahora si tendria que funcionar el proyecto.

```bash
py manage.py runserver
```

### Links de la api

[http://localhost:8000/api/tasks/](http://localhost:8000/api/tasks/) <- Link de la api de tareas.
[http://localhost:8000/api/docs/](http://localhost:8000/api/docs/) <- Link de la documentación de la api de tareas.

## Instalación del Front-End

Para instalar las dependencias, ejecuta:

```bash
npm install
```

## Uso

Para ejecutar el proyecto en modo desarrollo, utiliza

```bash
npm run dev
```

Y abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.
