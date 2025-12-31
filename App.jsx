import StockInput from "./components/StockInput";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <h1>AI Stock Predictor</h1>

      <p className="subtitle">
        Enter a stock symbol to get an AI-based trend analysis and
        Buy / Sell recommendation.
      </p>

      <StockInput />

      <p className="disclaimer">
        ⚠ This prediction is AI-generated for educational purposes only and is
        not financial advice.
      </p>
    </div>
  );
}

export default App;
