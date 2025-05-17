
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the root element and ensure it exists
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Check your HTML structure.");
}
