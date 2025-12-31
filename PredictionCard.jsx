function PredictionCard({ prediction }) {
  if (!prediction) return null;

  const trendColor =
    prediction.trend === "Upward"
      ? "trend-up"
      : prediction.trend === "Downward"
      ? "trend-down"
      : "trend-side";

  const actionColor =
    prediction.action === "Buy"
      ? "action-buy"
      : prediction.action === "Sell"
      ? "action-sell"
      : "action-hold";

  return (
    <div className="prediction-card fade-in hover-glow">
      <h3 className="card-title">AI Prediction</h3>

      <div className="meta-row">
        <span className="label">Trend:</span>
        <span className={`value ${trendColor}`}>
          {prediction.trend}
        </span>
      </div>

      <div className="meta-row">
        <span className="label">Action:</span>
        <span className={`value ${actionColor}`}>
          {prediction.action}
        </span>
      </div>

      <div className="divider" />

      <p className="reason">
        <strong>Reason:</strong> {prediction.reason}
      </p>

      <p className="risk">
        <strong>Risk:</strong> {prediction.risk}
      </p>

      <p className="disclaimer">
        ⚠️ This prediction is AI-generated for educational purposes only and is
        not financial advice.
      </p>
    </div>
  );
}

export default PredictionCard;
