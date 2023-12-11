const express = require("express");
const kontakRoutes = express.Router();
const {prisma} = require("../config/prisma");

// GET ALL Contak kami
kontakRoutes.get("/:idKontak", async (req, res) => {
  const kontak = await prisma.kontak.findUnique({
    where: {
      idKontak: parseInt(req.params.id),    
    },
  });
  if (!kontak)
    res.status(404).json({
      message: "Kontak not Found",
    });
  else res.status(200).json(kontak);
});


kontakRoutes.post("/", async (req, res) => {
  const { nama, email, telepon, pesan } = req.body;
  // todo - handle if name is not passed in
  // if (!name) res.status(400).json({message: "Name is required"});
  const newKontak = await prisma.contactUs.create({
    data: {
        nama      : nama,
        email     : email,
        telepon   : telepon,
        pesan     : pesan,
    },
  });
  res.status(201).json({
    message: "Kontak created",
    data: newKontak,
  });
});

module.exports = { kontakRoutes };