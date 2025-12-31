export function getGeminiPrediction(prices) {
  const first = prices[0];
  const last = prices[prices.length - 1];

  let trend = "Sideways";
  let action = "Hold";

  if (last > first + 5) {
    trend = "Upward";
    action = "Buy";
  } else if (last < first - 5) {
    trend = "Downward";
    action = "Sell";
  }

  return {
    trend,
    action,
    reason: `The stock shows a ${trend.toLowerCase()} trend over the last ${
      prices.length
    } days. Momentum suggests a "${action}" position, but market volatility and external news should be considered.`,
    risk: "Market sentiment, macroeconomic factors, and sudden news events may impact price movement."
  };
}
