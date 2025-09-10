# 🐶 React Simple Data Fetching Lab

This lab is a small React application that demonstrates how to fetch data from an external API using `useEffect`, dynamically update the DOM, and trigger new fetches via user interaction.

## Live Demo
Visit the GitHub repository for code and context:  
[Forked Repo](https://github.com/walbeck85/react-hooks-simple-data-fetching-lab-vite)

---

## Features

- Uses the `useEffect` hook to fetch a random dog image from an external API on load.
- Displays a loading indicator while fetching.
- Updates the image by clicking a single button.
- Clean component structure and React best practices.
- Fully passes automated test suite.

---

## Getting Started

Follow these steps to run the application locally:

### 1. Clone the Repo
```bash
git clone https://github.com/walbeck85/react-hooks-simple-data-fetching-lab-vite.git
cd react-hooks-simple-data-fetching-lab-vite
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the App Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## How to Use

- When the app loads, it fetches a random dog image from [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random).
- While the image is being fetched, a `<p>` element with the text "Loading..." is displayed.
- Once the image is loaded, it's shown inside an `<img>` tag.
- Clicking the `<button>` fetches a new random dog image.

---

## Running Tests

To run the automated test suite:
```bash
npm run test
```
All tests must pass for lab completion.

---

## Screenshots

Additional screenshots are available here:  
[View Screenshots on Imgur](https://imgur.com/a/lVyzxsn)

---