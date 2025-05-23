# Bottom Sheet Demo

A React application showcasing a smooth and responsive bottom sheet (modal-like drawer) that snaps to different heights. Built with performance and interactivity in mind.

## 🚀 Features

- Smooth drag and snap animation
- Snap to predefined positions (e.g., 0%, 50%, 100%)
- Responsive to touch and mouse events
- Easily customizable and reusable
- Simple and clean UI

## 🖥️ Demo

![Bottom Sheet Demo](https://user-images.githubusercontent.com/your-placeholder/demo-gif.gif)

## 📁 Project Structure

.
├── public/
├── src/
│ ├── App.js
│ ├── BottomSheet.js
│ ├── App.test.js
│ ├── BottomSheet.test.js
│ └── index.js
├── package.json
└── README.md
## 🛠️ Installation

1. **Clone the repository** 
   git clone https://github.com/Sumant3086/Flam-Assignment.git
   cd bottom-sheet-demo
Install dependencies 
npm install 
npm start
Run tests 
🧪 Testing
The app uses React Testing Library for unit tests. Two test files are provided:

App.test.js: Verifies UI elements like headings and buttons.

BottomSheet.test.js: Verifies core logic for determining snap points.

📦 Dependencies
react

react-dom

@testing-library/react

@testing-library/jest-dom

📌 Snap Points Logic
The getNearestSnapPoint(currentPosition, snapPoints) function calculates the closest snap point to a given vertical position, enabling natural snapping behavior.
 
export function getNearestSnapPoint(current, snapPoints) {
  return snapPoints.reduce((prev, curr) =>
    Math.abs(curr - current) < Math.abs(prev - current) ? curr : prev
  );
}
🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License.

Made with ❤️ by Sumant



"# Flam-Assignment" 
