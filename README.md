# HTML Import Compiler

This project provides a powerful compiler that allows developers to import HTML files into other HTML files, similar to how JavaScript modules work. The compiler processes these imported files and generates a structured output containing a single `index.html`, `styles.css`, and `index.js`. This approach makes HTML development more modular and maintainable.

## Features
- **Import HTML files inside another HTML file** just like JavaScript modules.
- **Automatic Compilation**: All HTML files are merged into a single `index.html`.
- **CSS Aggregation**: All styles from different HTML files are combined into a single `styles.css`.
- **JavaScript Consolidation**: All JavaScript files are gathered and merged into `index.js`.
- **Simple and easy-to-use setup**.

## Installation
### Step 1: Clone the Repository
Run the following command in your terminal to clone the repository:
```sh
   git clone https://github.com/seraprogrammer/htmlplusplus.git
   cd htmlplusplus
```

### Step 2: Install Dependencies
Before using the compiler, you need to install the required dependencies:
```sh
   npm install
```

## How It Works
### Project Structure
Your project should be structured like this:
```
/project-root
│── /pages
│   ├── app.html
│   ├── about.html
│   ├── counter.html
│── main.html
│── package.json
```

### Creating Modular HTML Files
Inside the `/pages` folder, create individual HTML components. For example:
```html
<!-- /pages/app.html -->
<div>
    <h1>Welcome to My App</h1>
</div>
```

### Importing HTML Files in `main.html`
Instead of manually copying content, you can import HTML files inside `main.html` just like JavaScript:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        import Main from "./pages/app.html";
        import About from "./pages/about.html";
        import Counter from "./pages/counter.html";
    </script>

    <Main />
    <About />
    <Counter />
</body>
</html>
```

### Compiling the Project
Run the following command in the terminal:
```sh
   npm run dev
```

This triggers the compiler, which processes the imported HTML files and generates a structured output in the `dist/` folder.

### Output Files
After running `npm run dev`, the compiler generates the following files:
```
/dist
│── index.html     (Merged HTML output)
│── styles.css     (All CSS combined into one file)
│── index.js       (All JavaScript compiled together)
```

### Example Output
Your final `index.html` will look something like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compiled Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div>
        <h1>Welcome to My App</h1>
    </div>
    <div>
        <h2>About Page</h2>
    </div>
    <div>
        <button>Counter</button>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

## Benefits
- **Modular HTML Development**: No more messy copy-pasting of HTML content.
- **Automatic Styling Aggregation**: Keeps styles in one place for better maintainability.
- **JavaScript File Consolidation**: Ensures all scripts are properly merged into one file.
- **Easy Maintenance**: Editing a single file automatically updates the compiled output.
- **Scalability**: Ideal for large projects requiring multiple HTML components.

## Contribution
We welcome contributions! Feel free to submit issues or pull requests to improve the project.

## License
This project is licensed under the **MIT License**. You are free to use and modify it as needed.

---
Now, anyone can import HTML files into another like JavaScript! 🚀

