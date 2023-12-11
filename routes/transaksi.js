const express = require("express");
const transaksiRoutes = express.Router();
const { prisma } = require("../config/prisma");

// TRANSAKSI
// GET ALL TRANSAKSI
transaksiRoutes.get("/:idTransaksi", async (req, res) => {
  const transaksi = await prisma.transaksi.findUnique({
    where: {
      idTransaksi: parseInt(req.params.id),    
    },
  });
  if (!transaksi)
    res.status(404).json({
      message: "Transaksi not Found",
    });
  else res.status(200).json(transaksi);
});

// CREATE TRANSAKSI
transaksiRoutes.post("/", async (req, res) => {
  const { username, email, phone, alamat, negara, kota, total_barang, total_harga } = req.body;
  // todo - handle if name is not passed in
  // if (!name) res.status(400).json({message: "Name is required"});
  const newCatalog = await prisma.transaction.create({
    data: {
      username: username,
      email   : email,
      phone   : phone,
      alamat  : alamat,
      negara  : negara,
      kota    : kota,
      total_barang  : total_barang,
      total_harga   : total_harga,
    },
  });
  res.status(201).json({
    message: "Transaksi created",
    data: newCatalog,
  });
});

module.exports = { transaksiRoutes };