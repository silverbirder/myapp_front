import logo from "./logo.svg";
import "./App.css";
import "./variables.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>{t("Submit")}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Learn React")}
        </a>
      </header>
    </div>
  );
}

export default App;
