`En esta pagina se crea un usuario para las tareas` [`http://127.0.0.1:8000/signup/`](http://127.0.0.1:8000/signup/)

`En esta pagina se logea un usuario para ver sus tareas` [`http://127.0.0.1:8000/signin/`](http://127.0.0.1:8000/signin/)

`En esta pagina si el usuario esta logeado puede ver sus tareas` [`http://127.0.0.1:8000/tasks/`](http://127.0.0.1:8000/tasks/)

## Correr el proyecto

📝: Agregar o actualizar documentación.

⏪️: Revertir cambios.

🚧: Trabajo en curso.

🔥: Quitar código o archivos.

🐛: Corregir errores.

## Como hacer un commit

**`new(Componente o Función): Descripción de lo añadió al repositorio Emoji`**.

**`edit(Componente o Función): Descripción de lo editó del codigo Emoji`**.

**`docs(README o Code): Descripción de lo que comentó del codigo Emoji`**.

## Ejemplo de algo nuevo en el repositorio

### Queremos subir esto nuevo en nuestro repositorio porque ya lo terminamos.

```jsx
export default function Button({ title }) {
  return (
    <button className="flex text-white bg-pink-500 hover:bg-pink-600 rounded py-1 px-2 m-4">
      {title}
    </button>
  )
}
```

Añadimos eso al **`stage`** y cuando vamos a hacer commit hacemos esto.

**`new(Button.jsx): Añadí un componente boton que recibe un titulo como props✨.`**

### Editamos este componente y cuando lo terminamos.

```jsx
export default function Button({ title }) {
  return (
    <button
      className="flex text-white bg-pink-500 hover:bg-pink-600 rounded py-1 px-2 m-4"
      onClick={() => alert('Clickeado')}>
      {title}
    </button>
  )
}
```

Añadimos eso al **`stage`** y cuando vamos a hacer el commit hacemos esto.

**`edit(Button.jsx): Añadí comportamiento al boton✨.`**

## Editar el último commit

- Para editar el ultimo commit: `git commit --amend`
- Para ver si se editó el commit: `git log --oneline`
- Para guardar el cambio en el repositorio: `git push --force`

## Install Django Proyect

```bash
🖿/example-django
λ py -m venv my_venv
🖿/example-django
λ .\my_venv\Scripts\activate
(my_venv) 🖿/example-django
λ pip install django
(my_venv) 🖿/example-django
λ django-admin startproject my_app .
(my_venv) 🖿/example-django
λ py manage.py runserver PORT?
```

`Starting server default` [`https://localhost:8000`](https://localhost:8000)

## Empezar con el proyecto los colaboradores

**Clonamos el repositorio.**

```bash
🖿/~
λ git clone https://github.com/Alexisxde/TP-Argentina-Programa.git
```

**Nos vamos a la carpeta que clonó del repositorio.**

```bash
🖿/~
λ cd TP-Argentina-Programa
```

**Instalamos el entorno virtual.**

```bash
🖿/TP-Argentina-Programa
λ py -m venv .venv
```

**Activamos el entorno virtual.**

```bash
🖿/TP-Argentina-Programa
λ .\.venv\Scripts\activate
```

**Instalamos Django.**

```bash
(.venv) 🖿/TP-Argentina-Programa
λ pip install django
```

**Abrimos con _Visual Studio Code_ la carpeta/proyecto.**

```bash
(.venv) 🖿/TP-Argentina-Programa
λ code .
```

**Para correr el proyecto** _(Por defecto es el PORT **8000**, donde esta PORT podemos poner el puerto donde se va abrir el proyeto ejemplo el 3000)_

```bash
(.venv) 🖿/TP-Argentina-Programa
λ py manage.py runserver PORT?
```
