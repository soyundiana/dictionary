import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          This project was coded by
            <a href="https://github.com/soyundiana/" target="_blank"
              > Diana :-) 
             </a>
              and is 
            <a
              href="https://github.com/soyundiana/travel-project"
              target="_blank"
            > open-sourced on GitHub </a
            >
             and
            <a href="#" target="_blank"> hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}