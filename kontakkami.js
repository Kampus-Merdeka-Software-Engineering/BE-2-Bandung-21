const DataTypes = require('sequelize')
const connection = require('../config/database');

// Defines the kontak kami table
const KontakKami = connection.define("kontak_kami", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    isi_pesan: {
        type: DataTypes.STRING,
    },
});

module.exports = KontakKami;

// Synchronize databases
(async () => {
    await connection.sync();
})();