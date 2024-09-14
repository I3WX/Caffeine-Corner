# Coffee Café - Landing Page

Welcome to **Coffee Café**, a dynamic landing page project for a café website that tells a story with every cup. This project is built using HTML, CSS, and JavaScript, and dynamically displays coffee quotes using JavaScript. It also utilizes Webpack to manage the build process, including bundling assets like JavaScript, CSS, and images.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Dynamic Quotes](#dynamic-quotes)
- [Screenshots](#screenshots)
- [License](#license)

## Project Overview

**Coffee Café** is a fictional café website designed to provide visitors with a seamless browsing experience. It showcases the café's history, interiors, coffee selection, and a contact section. The page includes a dynamic coffee quote that changes every time the page is loaded, creating a unique experience for every visitor.

The main objective of this project is to create a visually appealing and responsive landing page that features:

- A hero section with an overlay and call-to-action button.
- An about section describing the café's journey.
- A coffee gallery showcasing the café’s coffee offerings.
- A dynamic quote section that displays a random coffee-related quote upon page load.
- A contact section with email and phone details.

## Features

- **Dynamic Quotes**: A coffee quote is dynamically generated and displayed in the about section each time the page is loaded.
- **Responsive Design**: The website is fully responsive, ensuring a great user experience across all devices, from desktops to smartphones.
- **Masonry Layout**: The coffee gallery section uses a masonry layout for the images, offering a visually engaging design.
- **Modern UI/UX**: The layout and design are optimized to provide a modern and user-friendly interface.
- **Webpack Integration**: The project uses Webpack to bundle all assets, manage styles, and images, and streamline development.

## Technologies Used

- **HTML**: Structuring the content and layout of the website.
- **CSS**: Styling the website, including flexbox and responsive design techniques.
- **JavaScript**: Adding interactivity to the website, such as dynamic quotes.
- **Webpack**: Module bundler to handle asset management, including CSS, JavaScript, and images.
- **Node.js & npm**: Managing dependencies and running development scripts.

## Installation

To run this project locally, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/coffee-cafe.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd coffee-cafe
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the project**:
   Start the development server using Webpack Dev Server:
   ```bash
   npm start
   ```
   This will open the landing page in your default browser. The page will automatically reload if you make edits.

5. **Build the project for production**:
   To generate a production build of the project, run:
   ```bash
   npm run build
   ```
   This will create a `dist` folder with the production-ready files.

## Folder Structure

```bash
.
├── dist/                   # Compiled output (after build)
├── node_modules/           # Project dependencies
├── src/                    # Source files for the project
│   ├── images/             # Images used in the project
│   ├── index.js            # JavaScript file for dynamic quotes
│   ├── style.css           # Stylesheet for the landing page
│   ├── template.html       # HTML template file used by Webpack
├── .gitignore              # Files and directories to ignore in Git
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Lockfile to ensure consistent dependency versions
├── webpack.config.js       # Webpack configuration
└── README.md               # Project documentation
```

## Dynamic Quotes

The website features a section where a random coffee-related quote is displayed each time the page loads. This is implemented using JavaScript, where an array of quotes is stored, and a random one is selected and displayed in the `blockquote` section.

### Quote Array Example:

```javascript
const coffeeQuotes = [
  "Coffee is a hug in a mug.",
  "Life happens, coffee helps.",
  "A day without coffee is like... just kidding, I have no idea.",
  "Coffee: because adulting is hard.",
  "First I drink the coffee, then I do the things.",
  ...
];
```

The quote is inserted dynamically using JavaScript, and each page load generates a new random quote.

## Screenshots

*Include screenshots of the project to visually showcase the design and layout.*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
