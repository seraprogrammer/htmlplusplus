// Store reactive data objects in a global registry
const reactiveObjects = [];

// Create a reactive object and add it to the registry
function reactive(obj) {
  const handlers = {
    get(target, prop) {
      if (typeof target[prop] === 'object' && target[prop] !== null) {
        return new Proxy(target[prop], handlers);
      }
      return target[prop];
    },
    set(target, prop, value) {
      target[prop] = value;
      updateDOM(); // Update DOM on property change
      return true;
    },
  };
  const proxy = new Proxy(obj, handlers);
  reactiveObjects.push(proxy);
  return proxy;
}

// Function to update DOM elements
function updateDOM() {
  const elements = document.querySelectorAll(
    '[x-bind], [on\\:click], [on\\:dblclick], [on\\:mouseover], [on\\:mouseout], [on\\:keydown], [on\\:keyup], [on\\:keypress], [on\\:submit], [on\\:reset], [on\\:focus], [on\\:blur], [on\\:load], [on\\:resize], [on\\:scroll], [on\\:play], [on\\:pause], [on\\:dragstart], [on\\:drag], [on\\:dragend], [on\\:dragenter], [on\\:dragover], [on\\:dragleave], [on\\:drop], [x-src]'
  );

  elements.forEach(element => {
    const bindValue = element.getAttribute('x-bind');
    if (bindValue !== null) {
      // Ensure bindValue is not null
      const matches = bindValue.match(/\{(.+?)\}/g);
      if (matches) {
        let updatedText = bindValue;
        matches.forEach(match => {
          const propName = match.substring(1, match.length - 1); // Remove {}
          reactiveObjects.forEach(reactiveObject => {
            if (propName in reactiveObject) {
              updatedText = updatedText.replace(
                match,
                reactiveObject[propName]
              );
            }
          });
        });
        element.textContent = updatedText;
      }
    }

    // Handle x-bind-src for image src attribute binding
    const srcBindValue = element.getAttribute('x-src');
    if (srcBindValue !== null) {
      const matches = srcBindValue.match(/\{(.+?)\}/g);
      if (matches) {
        let updatedSrc = srcBindValue;
        matches.forEach(match => {
          const propName = match.substring(1, match.length - 1); // Remove {}
          reactiveObjects.forEach(reactiveObject => {
            if (propName in reactiveObject) {
              updatedSrc = updatedSrc.replace(match, reactiveObject[propName]);
            }
          });
        });
        element.setAttribute('src', updatedSrc);
      }
    }

    // Event attributes handling
    [
      'click',
      'dblclick',
      'mouseover',
      'mouseout',
      'keydown',
      'keyup',
      'keypress',
      'submit',
      'reset',
      'focus',
      'blur',
      'load',
      'resize',
      'scroll',
      'play',
      'pause',
      'dragstart',
      'drag',
      'dragend',
      'dragenter',
      'dragover',
      'dragleave',
      'drop',
    ].forEach(event => handleEventAttribute(element, `on:${event}`, event));
  });
}

// Helper function to handle event attributes
function handleEventAttribute(element, attribute, eventName) {
  if (element.hasAttribute(attribute)) {
    const methodName = element.getAttribute(attribute);
    element.addEventListener(
      eventName,
      function (event) {
        reactiveObjects.forEach(reactiveObject => {
          if (typeof reactiveObject[methodName] === 'function') {
            reactiveObject[methodName](event);
          }
        });
      },
      { once: true }
    );
  }
}

document.addEventListener('DOMContentLoaded', updateDOM);
