const mongoose = require('mongoose');

const filialSchema = new mongoose.Schema(
  {
    filial: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Filial', filialSchema);
