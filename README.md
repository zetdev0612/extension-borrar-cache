# Borrador de Caché

Extensión de Chrome que permite borrar caché, cookies y datos de navegación con un solo clic.

## Descripción

Esta extensión ofrece una forma rápida y sencilla de limpiar los datos de navegación en Chrome. Permite seleccionar qué tipos de datos eliminar y el período de tiempo específico.

## Características

- Borrar caché de navegador
- Eliminar cookies
- Limpiar almacenamiento local
- Borrar historial de navegación
- Seleccionar período de tiempo (última hora, 24 horas, semana, mes o todo)
- Interfaz simple y accesible desde el menú de extensiones

## Permisos

La extensión requiere los siguientes permisos:
- `cookies`: Para gestionar y eliminar cookies
- `browsingData`: Para acceder a los datos de navegación

## Instalación

1. Clona o descarga el repositorio
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa el "Modo de desarrollador" (esquina superior derecha)
4. Haz clic en "Cargar extensión sin empaquetar"
5. Selecciona la carpeta de la extensión

## Uso

1. Haz clic en el ícono de la extensión en la barra de herramientas
2. Selecciona los datos que deseas borrar (caché, cookies, almacenamiento, historial)
3. Elige el período de tiempo
4. Haz clic en "Borrar Ahora"

## Estructura del Proyecto

- `manifest.json` - Configuración de la extensión
- `popup.html` - Interfaz de usuario
- `popup.js` - Lógica del popup
- `background.js` - Service worker que ejecuta la limpieza
- `styles.css` - Estilos de la interfaz
- `images/` - Iconos de la extensión

## Versión

v1.0
