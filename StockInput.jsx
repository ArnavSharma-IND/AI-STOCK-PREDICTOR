import { useState } from "react";
import { getMockStockPrices } from "../services/mockStockData";
import { getGeminiPrediction } from "../services/geminiApi";
import PredictionCard from "./PredictionCard";
import StockChart from "./StockChart";

function StockInput() {
  const [symbol, setSymbol] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prices, setPrices] = useState([]);

  const handlePredict = () => {
    if (!symbol) return;

    setLoading(true);

    // simulate API delay (UX polish)
    setTimeout(() => {
      const stockPrices = getMockStockPrices(symbol);
      const aiResult = getGeminiPrediction(stockPrices);

      setPrices(stockPrices);
      setPrediction(aiResult);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="page-center">
      {/* INPUT CARD */}
      <div className="input-card">
        <div className="input-row">
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value.toUpperCase())}
            placeholder="AAPL, TSLA, MSFT..."
          />

          <button onClick={handlePredict} disabled={loading}>
            {loading ? (
              <>
                Analyzing
                <span className="spinner" />
              </>
            ) : (
              "Predict Data"
            )}
          </button>
        </div>
      </div>

      {/* CHART */}
      {prices.length > 0 && <StockChart prices={prices} />}

      {/* PREDICTION */}
      {prediction && <PredictionCard prediction={prediction} />}
    </div>
  );
}

export default StockInput;
