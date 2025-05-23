# Quiz App

This is a web-based quiz application that allows users to test their knowledge through multiple-choice questions. The app fetches questions from an external API and provides real-time feedback, scoring, and a high-score leaderboard.

---

## Table of Contents

- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Installation and Setup](#installation-and-setup)  
- [Project Structure](#project-structure)  
- [App Flow](#app-flow)  
- [Styling](#styling)  
- [Deployment](#deployment)  
- [License](#license)  
- [Contributing](#contributing)  
- [Contact](#contact)  

---

## Tech Stack

**Frontend Only**

- **HTML5** – Markup structure of the app  
- **CSS3** – Styling using modular CSS files  
- **JavaScript (ES6)** – App logic, event handling, API integration  
- **External Trivia API** – Fetches quiz questions dynamically  

---

## Features

- Dynamic question loading using external API  
- Multiple choice questions with immediate feedback  
- Score tracking based on correct answers  
- High score leaderboard using browser `localStorage`  
- Separate result screen at the end of the quiz  
- Responsive layout for different screen sizes  
- User-friendly animations and transitions  

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/quiz-app.git
Navigate to the Project Directory
bash
Copy
Edit
cd quiz-app
Run the App
Open index.html in your browser directly
Or serve it using a static server like Live Server in VS Code.

Project Structure
plaintext
Copy
Edit
quiz-app/  
├── README.md  
├── app.css                  # Common styling for app layout  
├── end.html                 # End screen template  
├── end.js                   # Logic to display final score  
├── game.css                 # Styling for game screen  
├── game.html                # Main quiz screen  
├── game.js                  # Core quiz logic and API fetching  
├── highscores.css           # Styling for leaderboard  
├── highscores.html          # High score display screen  
├── highscores.js            # Logic to fetch/store/display high scores  
├── index.html               # Start screen with "Start Quiz" button  
└── questions.json           # Optional backup/mock questions  
App Flow
Start Quiz
Users begin from index.html and start the quiz.

Quiz in Progress
Questions are fetched via API in game.js, displayed in game.html.

Scoring
Each correct answer adds points. Incorrect answers show immediate feedback.

Quiz End
On completion, users are redirected to end.html, displaying the final score.

High Scores
Users can save their score and view the leaderboard in highscores.html.

Styling
The app is styled using vanilla CSS, separated into different files (app.css, game.css, highscores.css) to maintain modularity and readability. Animations and transitions enhance user interaction without external frameworks.

Deployment
The app can be deployed using any static hosting provider such as:

GitHub Pages

Netlify

Vercel

Deployment Steps:
Push your repository to GitHub

Go to GitHub → Settings → Pages → Select main branch

Or connect your GitHub repo to Netlify or Vercel for auto-deployment

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contributing
We welcome contributions to this project. Please follow these steps:

Fork the repository

Create a new branch

Make your changes and test thoroughly

Submit a pull request with a detailed description of changes

Contact
📧 Email: kondasaikrishna13@gmail.com
💻 GitHub: saikrishna1909