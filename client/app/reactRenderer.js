import {createRoot} from 'react-dom/client';

class Renderer {
  static render(el) {
    
    const root = createRoot(document.getElementById(el.selector));
    // Initial render: Render an element to the root.
    console.log("RENDERING: " + el.selector);
    root.render(el.component);
  }
}

export default Renderer;