export function getMockStockPrices(symbol) {
  // simple fake price trend
  const base = 150;
  const prices = [];

  for (let i = 0; i < 20; i++) {
    prices.push(
      +(base + Math.random() * 10 + i * 0.5).toFixed(2)
    );
  }

  return prices;
}
