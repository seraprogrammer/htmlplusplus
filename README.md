# HTML++

HTM++ is a simple, lightweight JavaScript framework for creating reactive web applications. It allows you to bind data to the DOM and handle events with ease, making it simple to create interactive user interfaces.

## Features

- **Reactive Data Binding:** Automatically update the DOM when data changes.
- **Event Handling:** Bind JavaScript functions to various DOM events using simple attributes.
- **Minimalistic Design:** Lightweight and easy to integrate with existing projects.

## Getting Started

### Installation
```html
  <script src="https://cdn.jsdelivr.net/gh/seraprogrammer/htmlplusplus@main/htmlplusplus.js"></script>
```
### or
Include the framework in your HTML file by linking to the `app.js` script.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReactiveJS Example</title>
  <script src="app.js"></script>
</head>
<body>
  <script>
    const post = reactive({
      count: 10,
      change: function () {
        this.count++;
      }
    });
  </script>

  <p x-bind="{count}"></p>
  <button on:click="change">Update</button>
</body>
</html>
```
## Usage
Create Reactive Objects:
Use the reactive function to create reactive objects.

```js
const post = reactive({
  count: 10,
  change: function () {
    this.count++;
  }
});
```
## Bind Data to DOM:
Use the x-bind attribute to bind data properties to DOM elements.

```html
<p x-bind="{count}"></p>
```
## Handle Events:
Use on:event attributes to bind functions to DOM events.

```html
<button on:click="change">Update</button>
```
# Advanced Features
Nested Properties:
ReactiveJS supports nested properties within reactive objects.

```js
const post = reactive({
  user: {
    name: 'John Doe'
  }
});
```
```html
<p x-bind="{user.name}"></p>
```
Event Attributes
Bind functions to various DOM events using attributes like on:click, on:mouseover, etc.
```html
<button on:click="change">Update</button>
```
```html
<button on:click="change">Update</button>
```
# Example
Here is a complete example demonstrating the basic usage of ReactiveJS:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ReactiveJS Example</title>
  <script src="app.js"></script>
</head>
<body>
  <script>
    const post = reactive({
      count: 10,
      change: function () {
        this.count++;
      }
    });
  </script>

  <p x-bind="{count}"></p>
  <button on:click="change">Update</button>
</body>
</html>
```
# Contributing
We welcome contributions to enhance ReactiveJS. Please fork the repository and submit pull requests.

