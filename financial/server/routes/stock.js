// const express = require("express");
// const axios = require("axios");

// const router = express.Router();

// router.get("/:symbol", async (req, res) => {
//   const { symbol } = req.params;

//   try {
//     const response = await axios.get(
//       `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=5d`
//     );

//     const result = response.data.chart.result?.[0];

//     if (!result) {
//       return res.status(400).json({ error: "No stock data available" });
//     }

//     const closes = result.indicators.quote[0].close;
//     const previousClose = closes[closes.length - 2];
//     const latestClose = closes[closes.length - 1];

//     const prediction =
//       latestClose > previousClose
//         ? "📈 Likely to go Up"
//         : "📉 Might go Down";

//     res.json({
//       symbol,
//       previousClose: previousClose.toFixed(2),
//       latestClose: latestClose.toFixed(2),
//       prediction,
//     });
//   } catch (error) {
//     console.error("Stock Fetch Error:", error.message);
//     res.status(500).json({ error: "Failed to fetch stock data" });
//   }
// });

// module.exports = router;
// server/routes/stock.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = process.env.ALPHA_VANTAGE_KEY;


router.get("/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  // ...
  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
    const response = await axios.get(url);

    const data = response.data["Time Series (Daily)"];
    if (!data) {
      return res.status(400).json({ error: "Invalid symbol or limit reached" });
    }

    const keys = Object.keys(data).slice(0, 2);
    const latest = data[keys[0]];
    const previous = data[keys[1]];

    const latestClose = parseFloat(latest["4. close"]);
    const previousClose = parseFloat(previous["4. close"]);
    const prediction = latestClose > previousClose ? "📈 Likely to go Up" : "📉 Might go Down";

    res.json({ symbol, previousClose, latestClose, prediction });
  } catch (e) {
    console.error("AlphaVantage Error:", e.message);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;
