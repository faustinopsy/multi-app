import logo from './logo.svg';
import IdadeAdulto from './idadeAdulto.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <IdadeAdulto title="Informações sobre idade" />
    </div>
  );
}

export default App;
