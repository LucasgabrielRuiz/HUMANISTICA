# Contexto del Proyecto
Eres un desarrollador Frontend experto en React. Necesito que construyas una Landing Page interactiva de una sola página (SPA). El tema de la página es el Capítulo 4 de la exhortación apostólica "Gaudete et Exsultate" del Papa Francisco. 

El objetivo es presentar un resumen del documento y ofrecer un Quiz interactivo al usuario.

# Requerimientos de Diseño y UI/UX
1. **Estilo General:** El diseño debe ser moderno, limpio, no genérico. Usa una paleta de colores cálida (tonos amarillos, naranjas, blancos y grises oscuros).
2. **Responsive:** Debe verse perfecto en dispositivos móviles y de escritorio (Mobile First). 
3. **Animaciones:** Usa `motion.dev` (Framer Motion) para transiciones fluidas de página, apariciones de elementos (fade-in, slide-up) y animaciones de hover en botones y tarjetas.
4. **Componentes Especiales:** Integra componentes inspirados en `reactbits.dev`. Por ejemplo:
   - Un fondo animado o interactivo para la sección "Hero" (inicio).
   - Tarjetas animadas (Animated Cards) para presentar los 5 puntos del capítulo.

# Estructura de la Landing Page
La página debe tener las siguientes secciones:

## 1. Hero Section
- Un título grande y llamativo: "La Santidad en Zapatillas".
- Un subtítulo que invite a explorar el Capítulo 4 de Gaudete et Exsultate.
- Un botón de Call to Action (CTA) animado que diga "Descubrir las 5 notas" y que haga scroll suave a la siguiente sección.
- *Requerimiento:* Usa un efecto de fondo sutil pero tecnológico/moderno (tipo React Bits).

## 2. Sección de Contenido (Las 5 Notas)
- Muestra 5 tarjetas interactivas, debes usar "Scroll Stack" de reactbits.dev para las tarjetas y usando Framer Motion para que el texto aparezcan al hacer scroll.
- Cada tarjeta debe tener un ícono, un título y una breve descripción:
  1. Aguante y paciencia.
  2. Alegría y sentido del humor.
  3. Audacia y fervor.
  4. En comunidad.
  5. En oración constante.

## 3. Quiz Interactivo
- Crea un componente de Quiz con estado en React (usa `useState`).
- Haz 3 a 5 preguntas de opción múltiple sobre situaciones de la vida cristiana (ej. "¿Qué haces si alguien te insulta en redes sociales?", "¿Cómo se vive mejor la fe?").
- Muestra una pregunta a la vez con transiciones suaves entre preguntas.

## 4. Pantalla de Resultados (¡CRÍTICO!)
- Al finalizar el quiz, calcula un puntaje (ej. 3/5).
- **Lógica de renderizado:** Sin importar si el usuario sacó 0/5 o 5/5, la interfaz debe celebrar.
- Muestra el siguiente mensaje con un efecto de aparición destacada: 
  *"Tu puntaje es [X]. Pero recuerda: Dios no lleva un marcador de tus errores. Él te ama incondicionalmente, te perdona y te invita a su reino. ¡La santidad es dejarse amar e intentarlo de nuevo todos los días!"*
- Agrega confeti o una animación de celebración alegre.

# Restricciones Técnicas
- el código debe estar dividido por sections en .jsx.
- Usa css convencional con clases.
- Simula las importaciones de `framer-motion` y componentes de UI estándar.