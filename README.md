# Ejercicio 1: Servidor Express con Redirección Dinámica

Este proyecto es parte de la evaluación de la unidad curricular **Programación con Node.js**. El objetivo es implementar un servidor web básico utilizando **Express** que gestione peticiones GET y POST, procesamiento de formularios y redirecciones dinámicas con parámetros de consulta (query params).

## 👤 Información del Estudiante

- **Nombre:** Samuel Jimenez
- **Cédula de Identidad:** 31.192.094
- **Universidad:** UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática)
- **Materia:** Programación III

## 📋 Descripción del Ejercicio

El programa consiste en un servidor Express que:
- Sirve una página de inicio (`index.html`) con un formulario.
- Procesa el envío del formulario mediante una ruta POST (`/procesar-animal`).
- Realiza una redirección dinámica hacia una página de resultados (`resultado.html`), pasando la información capturada a través de la URL.
- Utiliza middlewares como `express.static` para archivos estáticos y `express.urlencoded` para el manejo de datos de formularios.

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión recomendada: v18 o superior)
- [NPM](https://www.npmjs.com/) (Viene incluido con Node.js)

### Instalación

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución

Para iniciar el servidor:
```bash
npm start
```
*Nota: Este comando es un atajo para `node app.js`. Una vez iniciado, puedes acceder al sistema en [http://localhost:3000](http://localhost:3000).*

---
*Evaluación 1 - Trayecto 3, Módulo 1*
