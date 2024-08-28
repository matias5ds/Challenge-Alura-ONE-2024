# Encriptador de Mensajes Secretos

Este proyecto es una aplicación que encripta y desencripta textos para intercambiar mensajes secretos con otras personas que conozcan el método de encriptación utilizado. La encriptación se basa en la transformación de ciertas letras en cadenas específicas de caracteres.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Requisitos](#requisitos)
- [Uso](#uso)
- [Ejemplos](#ejemplos)
- [Instalación](#instalación)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

La aplicación toma un texto ingresado por el usuario y lo convierte en su versión encriptada utilizando las siguientes reglas de transformación:

- La letra `"e"` se convierte en `"enter"`.
- La letra `"i"` se convierte en `"imes"`.
- La letra `"a"` se convierte en `"ai"`.
- La letra `"o"` se convierte en `"ober"`.
- La letra `"u"` se convierte en `"ufat"`.

El usuario también puede desencriptar un mensaje que ha sido encriptado previamente con estas reglas.

## Funcionalidades

- **Encriptación de textos**: Convierte un texto común en su versión encriptada.
- **Desencriptación de textos**: Convierte un texto encriptado de vuelta a su forma original.
- **Interfaz amigable**: La aplicación permite al usuario ingresar texto y seleccionar entre encriptar o desencriptar.
- **Copia rápida**: Un botón dedicado para copiar el texto encriptado/desencriptado al portapapeles, facilitando compartir el mensaje.

## Requisitos

- Solo letras minúsculas son permitidas.
- No se deben utilizar acentos ni caracteres especiales.

## Uso

1. Ingresa el texto que deseas encriptar o desencriptar.
2. Selecciona si deseas **Encriptar** o **Desencriptar**.
3. El resultado será mostrado en pantalla.
4. Utiliza el botón de **Copiar** para guardar el resultado en el portapapeles.

## Ejemplos

- Encriptación:
  - `"gato"` se convierte en `"gaitober"`.
  - `"hola"` se convierte en `"hoberlai"`.

- Desencriptación:
  - `"gaitober"` se convierte en `"gato"`.
  - `"hoberlai"` se convierte en `"hola"`.

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/matias5ds/Alura-Challenge.git

2. Abre el archivo `index.html` en tu navegador preferido.

3. ¡Listo! Ahora puedes encriptar y desencriptar mensajes desde la aplicación.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

