import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { COLORS } from "./values/colors"

const app = ReactDOM.createRoot(document.querySelector(".App"));

let appStyle = {
  width: "70%",
  height: "fit-content",
  margin: "30px auto",
  borderRadius: "5px",
  border: `2px solid ${COLORS.darker}`,
  backgroundColor: COLORS.background,
  padding: "20px",
  boxShadow: "0 0 100px white"
}

app.render(
  <React.StrictMode>
    <App style={appStyle} />
  </React.StrictMode>
);