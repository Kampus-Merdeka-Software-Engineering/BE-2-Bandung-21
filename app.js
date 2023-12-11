require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { productRoutes } = require("./routes/product");
const { transaksiRoutes } = require("./routes/transaksi");
const { kontakRoutes } = require("./routes/kontakkami");
const app = express();
const PORT = process.env.PORT || 3000;

// const bodyParser = require("body-parser");
// const db = require("./connection.js");
// const response = require("./response.js");
// const crypto = require("crypto");

app.use(cors({origin: 'http://127.0.0.1:5500'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("here is the response");
});

// PRODUCT ROUTES
app.use("/Product", productRoutes);

// TRANSAKSI ROUTES
app.use("/Transaksi", transaksiRoutes);

// Kontak ROUTES
app.use("/Kontak", kontakRoutes);

app.all("*", async (req, res) => {
  res.json({
    message: "Routes you're looking is not found",
  });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is already running at ${PORT}`);
});