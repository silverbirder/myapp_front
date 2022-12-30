import logo from "./logo.svg";
import "./App.css";
import "./variables.css";
import { useTranslation } from "react-i18next";
import { useQuery } from "urql";

const GetEntriesQuery = `
query getEntries {
  entries{
    data {
      _id
      name
      message
    }
  }
}
`;

function App() {
  const { t } = useTranslation();
  const [result] = useQuery({
    query: GetEntriesQuery,
  });
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

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
        <ul>
          {data.entries.data.map((entry) => (
            <li key={entry._id}>
              name:{entry.name},message:{entry.message}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
