// src/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-light: #F8FAFC;
    --bg-surface: #FFFFFF;
    --bg-card: #FFFFFF;
    --bg-secondary: #F1F5F9;
    --primary-blue: #1E3A8A;
    --primary-emerald: #059669;
    --gold-accent: #D97706;
    --text-main: #0F172A;
    --text-muted: #475569;
    --text-light: #64748B;
    --border-color: #E2E8F0;
    --border-hover: #94A3B8;
    --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.05);
    --shadow-md: 0 10px 25px rgba(15, 23, 42, 0.08);
    --shadow-hover: 0 15px 30px rgba(15, 23, 42, 0.12);
  }

  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--bg-light);
    color: var(--text-main);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Custom Light Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #F1F5F9;
  }

  ::-webkit-scrollbar-thumb {
    background: #CBD5E1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #94A3B8;
  }

  h1, h2, h3, h4 {
    font-family: 'DM Serif Display', 'Plus Jakarta Sans', sans-serif;
    color: var(--text-main);
    letter-spacing: -0.01em;
  }

  ::selection {
    background-color: var(--primary-blue);
    color: #FFFFFF;
  }
`;

export default GlobalStyle;