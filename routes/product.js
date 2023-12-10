const express = require("express");
const productRoutes = express.Router();
const { prisma } = require("../config/prisma.js");

// MENU
// GET ALL MENU
productRoutes.get("/", async (req, res) => {
  const menu = await prisma.menu.findMany();
  res.status(200).send(menu);
});

//GET MENU BY ID
productRoutes.get("/:id", async (req, res) => {
  const menu = await prisma.menu.findUnique({
    where: {
      idMenu: parseInt(req.params.idMenu),
    },
  });
  if (!menu)
    res.status(404).json({
      message: "Menu not Found",
    });
  else res.status(200).json(menu);
});

//GET MENU BY KATEGORI
productRoutes.get("/:kategori", async (req, res) => {
  const categoryMenu = await prisma.menu.findCategory();
  res.status(200).send(menu);
});

//CREATE MENU
productRoutes.post("/", async (req, res) => {
  const { namaMenu } = req.body;
  const newMenu = await prisma.menu.create({
    data: {
      namaMenu: namaMenu,
    },
  });
  res.status(201).json({
    message: "Menu created",
    data: newMenu,
  });
});

// UPDATE MENU
productRoutes.put("/:category", async (req, res) => {
  const { categoryMenu } = req.params;
  const { idMenu } = req.params;
  const { namaMenu } = req.body;
  const updateMenu = await prisma.menu.update({
    where: { id: parseInt(id) },
    data: { namaMenu: namaMenu },
  });
  res.status(200).json({
    message: `menu with idMenu: ${id} is updated`,
    data: updatedMenu,
  });
});

//DELETE MENU
productRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.menu.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    message: `menu with idMenu: ${id} successfully deleted`,
  });
});

module.exports = { productRoutes };

