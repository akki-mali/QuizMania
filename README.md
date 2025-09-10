# QuizMania

QuizMania is a modern, responsive quiz application built with React and Vite. It features multiple topics, a timed quiz experience, and personalized feedback based on your performance.

## Features

- Choose from multiple quiz topics: JavaScript, Angular, React, and Flutter.
- 10-second timer for each question.
- Manual navigation and skip options.
- Final score and performance feedback.
- Responsive design using Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akki-mali/QuizMania.git
   cd QuizMania
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # React components
│   ├── data/            # Quiz data
│   ├── pages/           # App entry point
│   ├── index.css        # Tailwind CSS styles
│   └── main.jsx         # Main React entry
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── .gitignore
```

## Customization

- Add or edit quiz questions in [`src/data/quizData.js`](src/data/quizData.js).
-