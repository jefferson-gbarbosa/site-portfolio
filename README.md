# Astro Simple Portfolio

Is a free and open-source portfolio template built with Astro. It's a great starting point for building your own
portfolio site.

This project leverages **Astro v5**, incorporating the latest features that Astro has to offer.
<p  style="text-align: center;">
  <img style="display: block; margin: 0 auto;" alt="Portfolio preview" src="/public/preview.png"/>
</p>

<a href="https://astro.build"><img src="https://astro.badg.es/v2/built-with-astro/tiny.svg" alt="Built with Astro" width="120" height="20"></a>

## 🔥 DEMO

- [VIEW DEMO](https://portfolio-jefferson-dev.netlify.app/)

### Features
**Now upgraded to Astro v5**: the latest release of Astro.

- **Astro v5**: Utilizes the latest features of Astro for a fast and optimized static site.
- **Tailwind CSS**: Includes Tailwind CSS for easy and efficient styling.
- **ShadCN**: Implements ShadCN components for a modern and cohesive design system.
- **TypeScript**: Written in TypeScript for type safety and better developer tooling.
- **React Components**: Supports React components to provide a familiar component-based development workflow.
- **MDX Support**: Includes MDX support for writing content with Markdown and JSX.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd astro-simple-portfolio
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm run dev
    ```

This will start the Astro development server. Open a browser and visit `http://localhost:4321` to see the site.

## Project Structure

| File/Folder      | Description                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| `src/assets`     | Contains images and other assets used in the project.                                          |
| `src/components` | Contains React components used in the project.                                                 | 
| `src/icons`      | Contains SVG icons used in the project.                                                        |
| `src/layouts`    | Contains the layout components for the site.                                                   |
| `src/pages`      | Contains the pages for the site.                                                               |
| `src/styles`     | Contains global styles for the site.                                                           |
| `public`         | Contains static files such as images, favicons, and other assets.                              |


## Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vito8916/simple-portfolio.git#NODE_VERSION=20)

Or follow the steps below:

1. **Build the project:**

    ```sh
    npm run build
    ```

   This will generate the static files in the `dist` directory.

2. **FTP Deployment:**

   Upload the contents of the `dist` directory to your web server using FTP.

3. **Vercel Deployment:**

   Follow the steps on the [Vercel website](https://vercel.com/docs) to deploy your Astro project.

4. **GitHub Pages Deployment:**

   You can also deploy to GitHub Pages by pushing the `dist` folder to the `gh-pages` branch of your repository.

---

## Contributing

[GitHub Repository](https://github.com/jefferson-gbarbosa/site-portfolio.git)

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

---

## License

This project is licensed under the [MIT License](LICENSE).