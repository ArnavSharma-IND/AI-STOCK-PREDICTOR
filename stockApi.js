export async function fetchStockData(symbol) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=1mo&interval=1d`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network response not OK");
    }

    const data = await res.json();
    const prices = data.chart.result[0].indicators.quote[0].close;
    return prices.filter(Boolean);
  } catch (err) {
    console.error("Stock API error:", err);
    return [];
  }
}
