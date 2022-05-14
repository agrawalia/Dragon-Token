import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <button onclick="getName()">Name</button>
    <textarea id="name_textarea"></textarea><br />
    <button onclick="getSymbol()">Symbol</button>
    <textarea id="symbol_textarea"></textarea>
    <form>
      <input type="text" name="address" id="text_address" />
      <input
        type="button"
        id="submit"
        onclick="callTransact()"
        value="Submit"
      />
    </form>
    <script
      src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
      type="application/javascript"
    ></script>
    </div>
  );
}

export default App;
