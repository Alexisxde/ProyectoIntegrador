## Emojis para los commits

✨: Añadir algo nuevo al repositorio.

🚚: Mover o cambiar el nombre de los recursos (ej: archivos, rutas, rutas).

🙈: Agregar o actualizar el archivo .gitignore.

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
git clone https://github.com/Alexisxde/TP-Argentina-Programa.git
```

**Nos vamos a la carpeta que clonó del repositorio.**

```bash
cd TP-Argentina-Programa
```

**Abrimos con _Visual Studio Code_ la carpeta/proyecto.**

```bash
code .
```
