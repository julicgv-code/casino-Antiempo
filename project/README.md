GuitarTrainer
Video Demo: <PEGAR LINK AQUÍ>
Description:

CASINO ANTIEMPO – Simulador de Máquina Tragamonedas
Descripción del Proyecto

CASINO ANTIEMPO es una aplicación web interactiva que simula el funcionamiento de una máquina tragamonedas. El sistema permite al usuario realizar apuestas, girar los rodillos, obtener premios según combinaciones y visualizar estadísticas en tiempo real.

El proyecto está desarrollado utilizando HTML, CSS y JavaScript, con enfoque en lógica de programación, manipulación del DOM y experiencia de usuario.

Objetivos
Objetivo General

Desarrollar un simulador funcional de máquina tragamonedas que implemente lógica de juego, interfaz gráfica interactiva y control de ganancias.

Objetivos Específicos
Implementar un sistema de apuestas dinámico.
Simular el giro de rodillos con animaciones.
Aplicar probabilidades mediante pesos en los símbolos.
Calcular premios según combinaciones en filas y diagonales.
Mostrar estadísticas en tiempo real.
Integrar efectos visuales y sonoros.
Funcionamiento del Sistema

El juego opera bajo la siguiente lógica:

El usuario inicia con un saldo de 100 unidades.
Selecciona el valor de la apuesta.
Presiona el botón GIRAR.
El sistema descuenta la apuesta y ejecuta una animación por columnas.
Se generan símbolos aleatorios con probabilidad ponderada.
Se evalúan combinaciones ganadoras.
Se actualiza el saldo y las estadísticas.
Características Principales
Sistema de tragamonedas de 3 filas por 4 columnas.
Control de saldo en tiempo real.
Probabilidad ponderada por símbolo.
Reproducción de sonido al girar y al ganar.
Animaciones visuales dinámicas.
Panel de estadísticas con total ganado, total perdido y ganancia real.
Sistema de retiro que reinicia la partida.
Persistencia del nombre del jugador mediante LocalStorage.
Lógica de Ganancias

La ganancia real se calcula mediante la siguiente expresión:

Ganancia real = saldo actual - saldo inicial

Esto permite reflejar correctamente el beneficio obtenido por el jugador.

Tecnologías Utilizadas
HTML5 para la estructura del sistema.
CSS3 para estilos y animaciones.
JavaScript para la lógica del juego.
LocalStorage para persistencia de datos del usuario.
Estructura del Proyecto

casino-god/

index.html
styles.css
script.js

sounds/
spin.mp3
win.mp3

Instalación y Uso
Descargar o clonar el proyecto.
Verificar que exista la carpeta sounds con los archivos de audio necesarios.
Abrir el archivo index.html en un navegador web.
Posibles Mejoras
Implementación de música de fondo.
Mejora de efectos visuales en premios altos.
Adaptación a dispositivos móviles.
Integración con backend y base de datos.
Sistema de ranking de jugadores.
Aplicación Académica

Este proyecto permite aplicar conceptos de programación estructurada, manipulación del DOM, manejo de eventos, simulación de sistemas probabilísticos y diseño de interfaces.

Autor

Julián Camilo Peña Gómez

Acknowledgments / Uso de Ayuda Externa

Durante el desarrollo de este proyecto se utilizaron herramientas de apoyo para mejorar la implementación y corregir errores.

Se empleó ChatGPT (OpenAI) como herramienta de asistencia para:

Identificación y corrección de errores en la lógica del sistema.
Corrección del cálculo de la ganancia real.

La idea, diseño y estructura general del proyecto fueron desarrolladas por el autor. La herramienta fue utilizada como apoyo, similar al uso de documentación técnica.
