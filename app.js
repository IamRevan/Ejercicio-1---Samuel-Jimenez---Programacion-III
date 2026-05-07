/**
 * Archivo Principal: app.js
 * Descripción: Configuración y lógica del servidor Express para la actividad de programación.
 * Este servidor gestiona la navegación entre el formulario inicial y la página de resultados.
 */

// 1. IMPORTACIÓN DE MÓDULOS
// Importamos express para la gestión del servidor y path para manejar rutas de archivos de forma segura.
const express = require('express');
const path = require('path');

// 2. CONFIGURACIÓN INICIAL
const app = express();
const PORT = 3000;

// 3. MIDDLEWARE (Interceptores de peticiones)
/**
 * express.urlencoded: Permite al servidor entender los datos enviados desde un formulario HTML (POST).
 * Sin esto, req.body llegaría vacío.
 * extended: true permite el uso de librerías de parsing más ricas.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * express.static: Definimos la carpeta 'views' como origen de archivos estáticos (CSS, JS, Imágenes).
 * Esto permite que el navegador acceda directamente a archivos como resultado.html.
 */
app.use(express.static(path.join(__dirname, 'views')));


// 4. RUTAS (Routing)

/**
 * Ruta de Inicio (GET /):
 * Despacha el archivo index.html ubicado en la carpeta views.
 * Usamos path.join para garantizar que la ruta sea válida tanto en Windows como en Linux/Mac.
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

/**
 * Ruta de Procesamiento (POST /procesar-animal):
 * Captura la información del animal favorito enviada por el usuario.
 */
app.post('/procesar-animal', (req, res) => {
    // Extraemos el valor del campo 'animal' del formulario.
    const animalFavorito = req.body.animal;

    // Validación básica: Si no hay animal, redirigimos al inicio.
    if (!animalFavorito) {
        return res.redirect('/');
    }

    /**
     * Redirección Dinámica:
     * Enviamos al usuario a resultado.html pasando el nombre por la URL (Query Params).
     * encodeURIComponent asegura que caracteres especiales o espacios no rompan la URL.
     */
    res.redirect(`/resultado.html?nombre=${encodeURIComponent(animalFavorito)}`);
});


// 5. INICIO DEL SERVIDOR
app.listen(PORT, () => {
    console.log('==================================================');
    console.log(`Servidor ejecutándose con éxito.`);
    console.log(`Localhost: http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detener el servidor.');
    console.log('==================================================');
});
