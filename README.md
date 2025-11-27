# 🎮 MediaQuest - Plataforma Multimedia Web

![Status](https://img.shields.io/badge/Status-Terminado-success)
![Technology](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blueviolet)
![Style](https://img.shields.io/badge/Style-Neon%20Gamer-00ffff)

**MediaQuest** es una aplicación web *frontend* diseñada para simular un sistema de acceso y visualización de contenido multimedia (videojuegos/películas). El proyecto destaca por su diseño estético "Neon Gamer" y el uso de lógica JavaScript para la manipulación del DOM en tiempo real.

---

## 🎯 Propósito del Proyecto

El objetivo principal es demostrar competencias fundamentales en desarrollo web:
1.  **Autenticación Simulada:** Flujo de Login/Logout con validación de credenciales.
2.  **Seguridad Frontend:** Protección de rutas mediante `localStorage`.
3.  **Renderizado Dinámico:** Generación de catálogo HTML a partir de *Arrays* de objetos.
4.  **Interactividad:** Buscador en tiempo real y efectos visuales CSS.

---

## 🚀 Características Principales

* **🔐 Sistema de Login:** Validación de correo y contraseña (simulado).
* **🛡️ Protección de Sesión:** Si intentas acceder a `catalog.html` sin loguearte, el sistema te redirige al inicio.
* **🎨 Diseño Neon Gamer:** Interfaz oscura con degradados, fuentes futuristas (*Orbitron*) y efectos de brillo (Glow).
* **📱 Totalmente Responsivo:** Uso de **CSS Grid** y **Flexbox** para adaptarse a móviles y escritorio.
* **🔍 Buscador Inteligente:** Filtrado de juegos por título o categoría sin recargar la página.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica (`<header>`, `<form>`, `<section>`).
* **CSS3:** Variables, animaciones `hover`, `box-shadow` y diseño responsivo.
* **JavaScript (ES6):**
    * Manipulación del DOM.
    * `localStorage` para persistencia de sesión.
    * Métodos de Array (`map`, `filter`, `forEach`).

---

## ⚙️ Instalación y Uso

Este proyecto no requiere instalación de dependencias ni servidores complejos.

1.  **Descargar:** Clona el repositorio o descarga el archivo `.zip`.
2.  **Ejecutar:** Abre el archivo `index.html` en tu navegador web favorito (Chrome, Edge, Firefox).
3.  **Probar:**

### 🔑 Credenciales de Acceso (Demo)
Para ingresar al sistema, utiliza los siguientes datos:

| Campo | Valor |
| :--- | :--- |
| **Email** | `user@mediaquest.com` |
| **Password** | `12345` |

---

## 📸 Capturas de Pantalla

### 1. Pantalla de Login
*(Inserta aquí tu captura del login)*
![Login Screen](./screenshots/login.png)

### 2. Catálogo Dinámico
*(Inserta aquí tu captura del catálogo)*
![Catalog Dashboard](./screenshots/catalog.png)

---

## 📂 Estructura del Proyecto

```text
MediaQuestWeb/
├── index.html      # Pantalla de inicio de sesión
├── catalog.html    # Pantalla principal del catálogo
├── styles.css      # Estilos globales y tema Neon
├── app.js          # Lógica de autenticación y renderizado
└── README.md       # Documentación del proyecto
