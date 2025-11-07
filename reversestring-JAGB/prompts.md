
# 🧠 Prompts usados para `reversestring-JAGB`
**Chatbot utilizado:** ChatGPT 5 Instant

---

## 🥇 Prompt 1 — Primera versión
> “Genera una microaplicación HTML + JS + CSS que invierta strings. Debe tener un input, un botón para invertir y un historial en memoria.”

**Resultado:**
La app lograba invertir correctamente el texto en pantalla, pero el alcance era limitado. No incluía los botones de **copiar** ni **recargar**, y el historial no tenía interacción con el usuario. Fue un buen punto de partida, pero era necesario aumentar la complejidad para cumplir los requisitos del ejercicio.

---

## 🧩 Prompt 2 — Mejora (funcional y completa)
> “Corrige el código anterior: añade historial en memoria (no localStorage), cada entrada del historial debe tener:
> - un botón *Copiar* (que guarda la entrada en el historial cuando se copia),
> - un botón *Recargar* (que devuelve el texto al input),
> - y un checkbox ‘Modo automático’ activado por defecto que invierta automáticamente al escribir, pero **solo** guarde la cadena al presionar ‘Copiar’. Asegúrate de que la inversión soporte correctamente emojis y caracteres Unicode.”

**Resultado:**
✨ Implementación exitosa y completa. El chatbot entregó una versión funcional con todo lo solicitado.

**Cumplía:**
- ✅ Historial en memoria (sin usar localStorage)
- ✅ Botón “Copiar” → guarda la cadena solo al copiar
- ✅ Botón “Recargar” → reinyecta el texto al input
- ✅ Checkbox “Modo automático” → activo por defecto
  - Invierte automáticamente al escribir.
  - Solo guarda al presionar “Copiar”.
- ✅ Soporte para emojis y Unicode usando `Array.from()`
  - (porque `.split('')` no maneja correctamente caracteres multibyte)

La respuesta fue clara, bien estructurada y explicaba por qué cada decisión técnica era necesaria.

---

## ⚠️ Prompt que no funcionó
> “Guíame con el HTML y JS para invertir strings y guarda el historial en localStorage.”

**Problema:**
Este prompt incumplía uno de los requisitos del ejercicio (“no usar localStorage”). El resultado generó una app funcional, pero con persistencia incorrecta, lo cual invalidaba la entrega. Decidí descartarlo y reformular el pedido, dejando claro que el historial debía mantenerse **solo en memoria (RAM)** durante la sesión.

---

## 💡 Cómo lo corregí y qué aprendí
- Especifiqué claramente **qué quería y qué no** (por ejemplo, “sin localStorage” y cuándo exactamente debía guardarse el historial).
- Aprendí que los *prompts detallados y secuenciales* producen resultados más fieles a los requisitos.
- Entendí la importancia de manejar correctamente **Unicode y emojis** usando `Array.from()` en lugar de `.split('')`.
- Incorporé retroalimentación visual al copiar, mejorando la experiencia del usuario.

En resumen, aprendí que un buen prompt no es solo “pedir código”, sino **describir comportamiento, restricciones y contexto**. Esa claridad marcó la diferencia entre una versión básica y una aplicación completa.

---

## 🚀 Prompt final (incluido también en el comentario del PR)
> “Genera un `index.html` y `app.js` para una microaplicación llamada *ReverseString* que:
> 1. Invierta el texto ingresado.
> 2. Tenga historial en memoria (no localStorage) con entradas que incluyan botones *Copiar* y *Recargar*.
> 3. Tenga un modo automático activado por defecto que invierta el texto al escribir, pero **solo** guarde la cadena en el historial cuando el usuario haga clic en *Copiar*.
> 4. Soporte emojis y Unicode.
> 5. Incluya retroalimentación visual al copiar.
> Devuélvelo listo para copiar en archivos.”

---

📘 **Reflexión final:**
Trabajar con ChatGPT 5 Instant fue como tener un compañero de desarrollo rápido y atento a los detalles. La clave estuvo en **iterar con precisión**, pedir aclaraciones específicas y mantener un diálogo técnico. Cada iteración mejoró no solo el código, sino mi forma de comunicar requisitos a una IA.


---
